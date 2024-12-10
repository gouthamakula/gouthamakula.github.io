import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import "@fontsource/poiret-one";
import { useGlobalState } from "../misc/useGlobalState";

interface ParallaxProps {
    values: string[] | [];
    baseVelocity: number;
}

const MotionScroller = styled(motion.div)(() => ({
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: '64px',
    display: 'flex',
    whiteSpace: 'nowrap',
    flexWrap: 'nowrap',
}));

function ParallaxText({ values, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((_t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <Box sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'flex',
            flexWrap: 'nowrap',
        }}>
            <MotionScroller style={{ x }}>
                {
                    Array(4)
                        .fill(values)
                        .flatMap((group) =>
                            group.map((child: string) => (
                                <Typography
                                    variant="h2"
                                    component="span"
                                    fontFamily={"Poiret One"}
                                    letterSpacing={8}
                                    mx={8}
                                    sx={{
                                        transition: "transform 0.3s ease", // Smooth transition
                                        ":hover": {
                                            transform: "scale(1.2)",
                                            color: "cyan"
                                        },
                                    }}
                                >
                                    {child}
                                </Typography>
                            ))
                        )
                }
            </MotionScroller>
        </Box>
    );
}


interface ScrollerProps {
    values: string[] | [];
};

export const Scroller = ({ values}: ScrollerProps) => {
    const {cardIdx} = useGlobalState();

    return (
        <Box
            sx={{
                width: "100vw", // Full viewport width for scroller
                position: "relative", // Ensures scrollers are in order
                left: "50%", // Align scroller to center
                transform: "translateX(-50%)", // Center alignment correction
                py: 8,
                opacity: cardIdx.hoveredIdx === -1 ? 1 : 0.4,
            }}
        >
            <ParallaxText baseVelocity={-2} values={values} />
            <ParallaxText baseVelocity={2} values={values} />
        </Box>
    );
};