import { Box, Chip, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useGlobalState } from "./misc/useGlobalState";


interface CardProps {
    title: string;
    summary?: string;
    img?: string;
    to?: string;
    from?: string;
    url: string;
    role?: string;
    techStack?: string[];
    idx: number;
}

const Card = ({ title, summary, img, to, from, url, role, techStack, idx }: CardProps) => {
    const handleClick = () => window.open(url, "_blank");
    const { cardIdx } = useGlobalState();

    return (
        <Box
            sx={{
                color: "grey.400",
                transition: "color 0.3s ease-out, background-color 0.5s ease-out, transfrom 0.5s ease, opacity 0.4s ease",
                borderRadius: "10px",
                "&:hover": {
                    color: "grey.300",
                    backgroundColor: "#141414",
                    cursor: "grab",
                    "& .title": {
                        color: "cyan",
                    },
                    "& .subtitle": {
                        color: "grey.400"
                    },
                    "& .arrow": {
                        transform: "translate(5px, -4px)",
                        transition: "transform 0.3s ease-out",
                    },
                    "& .tech-stack": {
                        color: "cyan",
                        background: "#0d3333"
                    }
                },
                opacity: cardIdx.hoveredIdx !== -1 && cardIdx.hoveredIdx !== idx ? 0.3 : 1,
                position: 'relative',
                overflow: 'hidden',
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '1px', // Adjust underline thickness
                    bottom: '0',
                    left: '0',
                    backgroundColor: 'currentColor', // Matches the text color
                    transform: 'scaleX(0)', // Starts with no line
                    transformOrigin: 'center', // Animation grows/shrinks from the center
                    transition: 'transform 0.5s ease', // Smooth transition
                },
                '&:hover:after': {
                    transform: 'scaleX(1)', // Fully expanded line
                },
                '&:not(:hover):after': {
                    transform: 'scaleX(0)', // Retracts back to the center
                },
                p: 2,
            }}
            onClick={handleClick}
            onMouseEnter={() => cardIdx.setHoveredIdx(idx)}
            onMouseLeave={() => cardIdx.setHoveredIdx(-1)}
        >
            <Stack direction="row" alignItems={"center"}>
                {img !== undefined ?
                    <img width={"150px"} height={"100px"} src={img} alt={title} style={{ objectFit: 'cover' }} /> :
                    <Typography width={"150px"} align="left">{from}
                        <Box
                            component="span"
                            sx={{
                                mx: 1,
                                display: "inline-block",
                                width: "15px",
                                height: "1px",
                                backgroundColor: "currentColor", // Matches text color
                                verticalAlign: "middle",
                            }}
                        />
                        {to}</Typography>
                }
                <Stack direction={"column"} pl={8} py={2}>
                    <Typography
                        className="title"
                        variant="h6"
                        sx={{ position: "relative", pb: 2 }}
                    >
                        {title}
                        <ArrowOutwardIcon
                            className="arrow"
                            sx={{
                                mx: "8px",
                                position: "absolute",
                                top: "8px",
                                transform: "translateX(0px)",
                                transition: "transform 0.3s ease-out",
                            }}
                            fontSize="small"
                        />
                    </Typography>
                    <Typography className="subtitle" variant="subtitle2" color="grey.500">{summary ? summary : role}</Typography>
                    {
                        techStack ?
                            <Stack direction={"row"} useFlexGap>
                                {
                                    techStack.map((tech) => (
                                        <Chip className="tech-stack" label={tech} variant="filled" size="small" sx={{
                                            mx: 0.5,
                                            my: 1,
                                            color: "#217f7f",
                                            background: "#061919",
                                        }} />
                                    ))}
                            </Stack> : <></>}
                </Stack>
            </Stack>
        </Box>
    );
};

export default Card;
