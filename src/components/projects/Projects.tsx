import { Box } from "@mui/material";
import { projects } from "../../constants";
import Card from "../Card";
import { ProjectScroller } from "../Scrollers/ProjectScroller";
import React from "react";

const Projects = React.forwardRef((_, ref) => {

  return (
    <Box ref={ref}>
      <ProjectScroller/>
      {projects.map((p, idx) => (
        <Card title={p.title} summary={p.summary} url={p.url} img={p.pic} techStack={p.tech_stack} idx={idx}/>
      ))}
    </Box>
  );
});

export default Projects;