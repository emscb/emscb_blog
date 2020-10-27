import React from "react";
import { Link } from "react-router-dom";
import Dnfspa from "./projects/Dnfspa";
import Sleeptionary from "./projects/Sleeptionary";

const projects = {
	dnfspa: { name: "게임 정보 검색 사이트", component: <Dnfspa /> },
	sleeptionary: { name: "IoT를 이용한 수면 분석", component: <Sleeptionary /> },
};

const Projects = () => {
	return (
		<div>
			<ul>
				{Object.keys(projects).map(slug => (
					<li key={slug}>
						<Link to={`project/${slug}`}>{projects[slug].name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Projects;
export { projects };
