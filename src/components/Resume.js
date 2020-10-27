import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import "../styles/Resume.scss";

const StyledA = styled.a`
	text-decoration: none;
	color: inherit;
`;

const Resume = () => {
	return (
		<div>
			<Helmet>
				<title>emscb | CV</title>
			</Helmet>
			<h1>CV</h1>

			<h2>기술 스택 Tech Stack </h2>

			<h3>Programming language</h3>
			<h4>JavaScript</h4>
			<p>ES6 문법을 이해하고 활용할 수 있습니다. Axios를 이용해 API를 사용할 수 있습니다.</p>

			<h4>Python</h4>
			<p>PEP8에 따라 코드를 작성할 수 있습니다. 정규표현식을 활용할 수 있습니다.</p>

			<h4>HTML / CSS</h4>
			<p>
				템플릿을 마크업으로 작성할 수 있습니다. 다양한 기기에 대응하여 반응형으로 페이지를 만들 수
				있습니다. Sass/scss를 작성할 수 있습니다.
			</p>

			<h4>SQL</h4>
			<p>
				원하는 데이터 결과를 받을 수 있는 쿼리문을 작성할 수 있습니다. Index와 view를 활용할 수
				있습니다.
			</p>

			<h3>Framework / Library</h3>
			<h4>React</h4>
			<p>
				Component 라이프 사이클에 따라 적절한 메서드를 사용합니다. Fuctional component, class
				component를 모두 만들 수 있습니다. Redux를 이용하여 상태 관리를 할 수 있습니다.
			</p>

			<h4>Django</h4>
			<p>
				필요한 템플릿과 view를 만들 수 있습니다. Admin 페이지를 관리할 수 있습니다. Model을 설계하고
				사용할 수 있습니다.
			</p>

			<h3>Tool</h3>
			<h4>GitHub</h4>
			<p>
				Git을 이용하여 형상 관리를 할 수 있습니다. 협업 과정에서 필요한 기능들을 활용할 수 있습니다.
			</p>

			<h4>Slack, Dooray</h4>
			<p>Slack 사용에 익숙합니다. 일감 관리 도구인 Dooray를 사용할 수 있습니다.</p>

			<h2>프로젝트 Project</h2>

			<h3>게임 정보 검색 사이트</h3>
			<p>온라인 게임 던전앤파이터 속 여러 정보들을 검색하고 보여주는 사이트입니다.</p>
			<p>
				페이지는 React를 통해 그리고, 백엔드 서버는 Koa로 만들었습니다. 이전부터 쌓아오던 RDB는
				Python으로 크롤링하여 sqlite3로 쌓고 있습니다. 백엔드 서버에서는 MongoDB를 이용한 DB에서
				데이터를 가져와서 프론트엔드로 넘겨줍니다. RDB와 MongoDB는 Python으로 크롤링 시
				동기화됩니다.
			</p>
			<p>GitHub pages로 배포하고 있으나, CORS 문제가 있어 해결하고 있습니다.</p>
			<ul>
				<li>
					홈페이지:{" "}
					<StyledA href="https://emscb.github.io/DnfSPA/" target="_blank">
						emscb.github.io/DnfSPA/
					</StyledA>
				</li>
				<li>
					Front-end GitHub repo:{" "}
					<StyledA href="https://github.com/emscb/DnfSPA" target="_blank">
						github.com/emscb/DnfSPA
					</StyledA>
				</li>
				<li>
					Back-end GitHub repo:{" "}
					<StyledA href="https://github.com/emscb/DnfSPA-api" target="_blank">
						github.com/emscb/DnfSPA-api
					</StyledA>
				</li>
			</ul>

			<h3>IoT를 이용한 수면 분석</h3>
			<p>
				SBC(Single-board computer)를 이용하는 IoT 프로젝트입니다. Python 코드들을 조합하여 수면
				정보를 수집하고, sqlite3로 DB를 만들었습니다.
			</p>
			<p>학부에서 프로그래밍을 팀으로 하는 경우가 없었어서 GitHub을 간단하게 사용하였습니다.</p>
			<ul>
				<li>
					GitHub repo:{" "}
					<StyledA href="https://github.com/emscb/Sleeptionary" target="_blank">
						github.com/emscb/Sleeptionary
					</StyledA>
				</li>
			</ul>

			<h2>경력 Work Experience</h2>
			<p>경력 없음</p>

			<h2>커뮤니티 활동 Community activity</h2>

			<h3>파이콘 한국 준비위원회 PyCon Korea Organizing Team</h3>
			<h5>2018.11 - 현재</h5>
			<p>
				파이콘 한국 2019 준비 과정부터 참여하였습니다. 컨퍼런스뿐만 아니라 연말 세미나, 튜토리얼,
				스프린트 등 커뮤니티 행사 준비에 참여하였습니다. 파이콘 한국 2019에서는 후원사 업무와
				전반적인 메일, 재정 지원을 도맡아 하였고, 홈페이지에는 오탈자 수정, 간단한 디자인 수정으로 기여하였습니다.
			</p>
			<p>파이콘 한국 2020에서는 Django 기반의 홈페이지 템플릿 작업과 백엔드 작업을 하였습니다.</p>
			<ul>
				<li>
					홈페이지:{" "}
					<StyledA href="https://www.pycon.kr/2020/" target="_blank">
						pycon.kr/2020
					</StyledA>
				</li>
				<li>
					GitHub repo:{" "}
					<StyledA href="https://github.com/pythonkr/pyconkr" target="_blank">
						github.com/pythonkr/pyconkr
					</StyledA>
				</li>
			</ul>

			<h2>학력 Education</h2>

			<h5>2014.03 - 2020.02</h5>
			<p>숭실대학교 의생명시스템학부 생명정보학 이학사</p>

			<h2>기타 Etc.</h2>
			<h4>자격증</h4>
			<p>컴퓨터활용능력 1급, MOS Excel Expert</p>

			<h4>영어 English</h4>
			<p>영문서로 작업 가능. 영문 메일 의사소통 가능</p>
		</div>
	);
};

export default Resume;
