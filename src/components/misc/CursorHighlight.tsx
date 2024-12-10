import { useState, useEffect } from "react";

const CursorHighlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)",
                borderRadius: "50%",
                pointerEvents: "none", // Prevent interference with mouse clicks
                zIndex: 9999,
                transform: "translate(-50%, -50%)",
            }}
        ></div>
    );
};

export default CursorHighlight;
