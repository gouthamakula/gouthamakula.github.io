import { Scroller } from "./Scroller";
import { projects } from "../../constants";
import { Box } from "@mui/material";

export const ProjectScroller = () => {

    return (
        <Box >
            <Scroller values={projects.map((project) => project.name)} />
        </Box>
    );
}