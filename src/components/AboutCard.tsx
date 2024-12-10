import { Box, Typography } from "@mui/material";
import React from "react";

const AboutCard = React.forwardRef((_, ref) => {

    return (
        <Box ref={ref}>
                <Typography variant={"subtitle1"} sx={{
                    color: "grey.400", transition: "color 0.3s ease-out, background-color 0.5s ease-out",
                    "&:hover": {
                        color: "grey.300",
                        backgroundColor: "#141414",
                        cursor: "grab"
                    },
                    p: 8,
                    borderRadius: 2
                }} textAlign={{ xs: "center", lg: "left" }} >
                    <br />
                    I’m a software engineer passionate about crafting accessible, fast and reliable applications that blend thoughtful design with robust engineering. My favorite work lies at the intersection of system design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                    <br />
                    <br />
                    In the past, I've had the opportunity to develop a feature across a variety of settings — from advertising banner to still production. Additionally, I also developed a end to end application for stock data analysis using only spring ecosystem.
                    <br />
                    <br />
                    In my spare time, I’m usually play chess, hanging out with my cats and do spiritual practices.
                </Typography>
        </Box>
    );

});

export default AboutCard;