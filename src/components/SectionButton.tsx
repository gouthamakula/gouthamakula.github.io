import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SectionButtonProps {
    scrollToSection: (x: number) => void;
    activeSection: number;
}


interface ButtonProps {
    index: number;
    scrollToSection: (x: number) => void;
    activeSection: number;
    children: ReactNode;
}

const Button = ({ index, scrollToSection, activeSection, children }: ButtonProps) => {
    return (
        <Typography
            onClick={() => scrollToSection(index)}
            sx={{
                position: "relative",
                cursor: "pointer",
                ml: 4,
                color: activeSection === index ? "white" : "grey.600",
                fontWeight: "bold",
                py: 1,
                width: "auto",
                "::before": {
                    content: '""',
                    position: "absolute",
                    left: activeSection === index ? "-40px" : "-10px", // Line position
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: activeSection === index ? "30px" : "0px", // Line width
                    height: "2px",
                    backgroundColor: activeSection === index ? "white" : "transparent",
                    transition: "all 0.6s ease-in-out", // Smooth transition
                },
                textTransform: "uppercase",
            }}
        >
            {children}
        </Typography>
    );
};

const SectionButton = ({ scrollToSection, activeSection }: SectionButtonProps) => {

    return (
        <Box sx={{ my: 4, cursor: "pointer" }}>
            <Button index={0} scrollToSection={scrollToSection} activeSection={activeSection}>
                About
            </Button>
            <Button index={1} scrollToSection={scrollToSection} activeSection={activeSection}>
                Projects
            </Button >
            <Button index={2} scrollToSection={scrollToSection} activeSection={activeSection} >
                Experience
            </Button >
        </Box >
    );
};

export default SectionButton;
