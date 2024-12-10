import { ExperienceScroller } from "../Scrollers/ExperienceScroller";
import { experiences, projects } from "../../constants";
import Card from "../Card";
import { Box } from "@mui/material";
import React from "react";


const ExperienceComponent = React.forwardRef((_, ref) => {
  return (
    <Box ref={ref}>
      <ExperienceScroller />
      {experiences.map((e, idx) => (
        <Card title={e.title} url={e.url} to={e.to} from={e.from} role={e.role} idx={projects.length + idx}/>
      ))}
    </Box>
  );
});

export default ExperienceComponent;