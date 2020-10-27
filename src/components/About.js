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
				완벽을 추구하는 주니어 프론트엔드 개발자입니다. 혼자가 아니라 같이 일하는 것을 좋아하고,
				새로운 것을 배우는 데 거부감이 없습니다.
			</p>
			<ul>
				<li>Contact: khmzxc@naver.com</li>
			</ul>
		</div>
	);
};

export default About;
