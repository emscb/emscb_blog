import React from "react";
import { projects } from "../Projects";

const Project = ({ match }) => {
	const { projectName } = match.params;

	return <div>{projects[projectName].component}</div>;
};

export default Project;
