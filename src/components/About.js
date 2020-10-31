import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
	return (
		<div>
			<Helmet>
				<title>emscb | About</title>
			</Helmet>
			<h2>권혁민 Kwon Hyeok Min</h2>
			<p>
				새로운 걸 배우기 좋아하는 주니어 프론트엔드 개발자입니다. 혼자가 아니라
				같이 일하는 것을 좋아합니다.
			</p>
			<ul>
				<li>Contact: khmzxc6622@gmail.com</li>
			</ul>
		</div>
	);
};

export default About;
