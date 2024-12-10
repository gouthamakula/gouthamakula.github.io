import '@fontsource/plaster'
import { Container } from "@mui/material";
import { Fragment } from 'react/jsx-runtime';
import SectionControl from './SectionControl';
import { motion, useScroll, useSpring } from 'framer-motion';
import { styled } from "@mui/system";

const ProgressBar = styled(motion.div) (() => ({
        position: "fixed",
        left: 0,
        right: 0,
        height: "5px",
        background: "white",
        bottom: 2,
      }
));

interface HomeContainerProps {
    showHeader: (x: boolean) => void;
}

const HomeContainer = ({showHeader}: HomeContainerProps) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    return (
        <Fragment>
            <Container
                maxWidth="xl"
                sx={{
                    minHeight: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: "100px",
                    pb: "80px",
                }}
            >
                <SectionControl showHeader={showHeader}/>
                <ProgressBar className="progress" style={{ scaleX }}/>
            </Container>

        </Fragment>
    );
};

export default HomeContainer;