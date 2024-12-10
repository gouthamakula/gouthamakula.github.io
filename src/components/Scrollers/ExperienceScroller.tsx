import { Scroller } from "./Scroller";
import { experiences } from "../../constants";

export const ExperienceScroller = () => {
    return (
        <Scroller values={experiences.map((e) => e.title)}/>
    );
}