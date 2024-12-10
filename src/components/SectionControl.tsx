import { Box, Grid2, Typography } from "@mui/material";
import AboutCard from "./AboutCard";
import Contact from "./Contact";
import SectionButton from "./SectionButton";
import { useRef, useState, useEffect } from "react";
import Projects from "./projects/Projects";
import ExperienceComponent from "./experience/Experience";

export const IntroTitles = () => {
    return (
        <Box sx={{ overflow: 'hidden', pt: 8 }}>
            <Typography
                variant="h1"
                fontFamily="Plaster"
                fontSize="5rem"
            >
                Software Development Engineer
            </Typography>
        </Box>
    );
};

interface SectionControlProps {
    showHeader: (x: boolean) => void;
}

const SectionControl = ({ showHeader }: SectionControlProps) => {
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        showHeader(activeSection == 0);
    }, [activeSection, showHeader]);

    const scrollToSection = (index: number) => {
        const target = sectionRefs.current[index];
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    useEffect(() => {
        const thresholdHeight = window.innerHeight * 0.5;
        const handleScroll = () => {
            if(sectionRefs.current.length === 3) {
                let activeSection = 0;
                sectionRefs.current.forEach((el, index) => {
                    const scrollerTop = el?.getBoundingClientRect().top;
                    if (scrollerTop && scrollerTop < thresholdHeight) { activeSection = index; }
                    console.log(activeSection);
                });
                setActiveSection(activeSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setActiveSection]);

    return (
        <Grid2 container rowSpacing={1} direction={{ xs: "column", lg: "row" }} alignContent={"center"} alignItems={"start"} pt={2}>
            <Grid2 size={{ xs: 10, lg: 6 }} pt={4}>
                <Box position={{ xs: "relative", lg: "fixed" }} width={{ xs: "100vw", lg: "35vw" }} height={"80vh"}>
                    <IntroTitles />
                    <SectionButton scrollToSection={scrollToSection} activeSection={activeSection} />
                    <Contact />
                </Box>
            </Grid2>
            <Grid2 size={{ xs: 10, lg: 6 }} >
                <Grid2 container rowSpacing={8} direction="row" alignContent={"center"} alignItems={"center"} sx={{ overflow: "auto" }}>
                    <Grid2>
                        <AboutCard ref={(el: HTMLElement) => (sectionRefs.current[0] = el)} />
                    </Grid2>
                    <Grid2>
                        <Projects ref={(el: HTMLElement) => (sectionRefs.current[1] = el)} />
                    </Grid2>
                    <Grid2>
                        <ExperienceComponent ref={(el: HTMLElement) => (sectionRefs.current[2] = el)} />
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default SectionControl;
