import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const menus = [
	{ name: "about", text: "About" },
	{ name: "cv", text: "CV" },
	// { name: "project", text: "Project" },
];

const MenuBlock = styled.div`
	display: flex;
	padding: 1.17vw;
	justify-content: flex-start;
	width: 55vw;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		width: 85%;
		overflow-x: auto;
		margin: 2vh auto;
	}
`;

const MenuItem = styled(NavLink)`
	font-size: 1.125rem;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	color: inherit;
	padding-bottom: 0.25rem;

	&:hover {
		color: #495057;
	}

	&.active {
		font-weight: 600;
		border-bottom: 2px solid #a2844d;
		color: #a2844d;
		&:hover {
			color: #b89b68;
		}
	}

	& + & {
		margin-left: 1rem;
	}
`;

const Menu = () => {
	return (
		<div>
			<MenuBlock>
				{menus.map(m => (
					<MenuItem
						key={m.name}
						activeClassName="active"
						exact={m.name === "home"}
						to={m.name === "home" ? "/" : `/${m.name}`}
					>
						{m.text}
					</MenuItem>
				))}
			</MenuBlock>
		</div>
	);
};

export default Menu;
