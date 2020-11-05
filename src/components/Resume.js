import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import "../styles/Resume.scss";

const StyledA = styled.a`
	color: inherit;
	&:hover {
		color: #495057;
	}
`;

const Resume = () => {
	return (
		<div>
			<Helmet>
				<title>emscb | CV</title>
			</Helmet>
			<h1>CV</h1>

			<h2>기술 스택 Tech Stack </h2>

			<h4>React</h4>
			<p>
				Component 라이프 사이클에 따라 적절한 메서드를 사용합니다. Fuctional
				component, class component를 모두 만들 수 있습니다. Redux를 이용하여
				상태 관리를 할 수 있습니다.
			</p>

			<h4>JavaScript</h4>
			<p>
				ES6 문법을 이해하고 활용할 수 있습니다. Axios를 이용해 API를 사용할 수
				있습니다.
			</p>

			<h4>HTML / CSS</h4>
			<p>
				템플릿을 마크업으로 작성할 수 있습니다. 다양한 기기에 대응하여
				반응형으로 페이지를 만들 수 있습니다. Sass/scss를 작성할 수 있습니다.
			</p>

			<h4>Python</h4>
			<p>
				PEP8에 따라 코드를 작성할 수 있습니다. 정규표현식을 활용할 수 있습니다.
			</p>

			<h4>Django</h4>
			<p>
				필요한 템플릿과 view를 만들 수 있습니다. Admin 페이지를 관리할 수
				있습니다. Model을 설계하고 사용할 수 있습니다.
			</p>

			<h4>SQL</h4>
			<p>
				원하는 데이터 결과를 받을 수 있는 쿼리문을 작성할 수 있습니다. Index와
				view를 활용할 수 있습니다.
			</p>

			<h3>Tool</h3>
			<h4>GitHub</h4>
			<p>
				Git을 이용하여 형상 관리를 할 수 있습니다. 협업 과정에서 필요한 기능들을
				활용할 수 있습니다.
			</p>

			<h4>Slack, Dooray</h4>
			<p>
				Slack 사용에 익숙합니다. 일감 관리 도구인 Dooray를 사용할 수 있습니다.
			</p>

			<h2>프로젝트 Project</h2>

			{/* 따로 project를 빼는거보단 여기다가 한 두줄 적어주자 */}
			<h3>게임 정보 검색 사이트</h3>
			<p>
				온라인 게임 던전앤파이터 속 여러 정보들을 검색하고 보여주는
				사이트입니다.
			</p>
			{/* 프론트 위주로 먼저 쓰고 단락을 나눠서 그냥 밑에다가 백엔드도 했다고 쓰기 */}
			<p>
				React 기반으로 페이지를 그립니다. Redux를 통해 페이지를 이동해도
				유지되는 상태를 관리합니다.
			</p>
			<p>
				필요한 정보를 API를 통해 프론트엔드로 전달해주는 서버는 Koa로
				만들었습니다. 누적 데이터는 Python으로 sqlite3 DB에 쌓고 있습니다. 그 중
				홈페이지에 필요한 데이터는 MongoDB에 동기화됩니다.
			</p>
			<p>GitHub pages로 배포하고 있으나, CORS 문제가 있어 해결하고 있습니다.</p>
			{/* 해결을 하고 빼버리자 */}
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

			{/* 이 데이터를 활용해서 한 번 리액트로 해보는 건 어떨까
			프로젝트 관리를 담당했다~ 회의록은 어떻게했고 뭐 그렇게 줄글보다는 항목으로 딱딱
			깃을 다른 팀원들에게 알려주고 그걸로 회의록을 작성했따 */}
			<h3>IoT를 이용한 수면 분석</h3>
			<p>
				SBC(Single-board computer)를 이용하는 IoT 프로젝트입니다. Python
				코드들을 조합하여 수면 정보를 수집하고, sqlite3로 DB를 만들었습니다.
			</p>
			<p>
				학부에서 프로그래밍을 팀으로 하는 경우가 없었어서 GitHub을 간단하게
				사용하였습니다.
			</p>
			<ul>
				<li>
					GitHub repo:{" "}
					<StyledA href="https://github.com/emscb/Sleeptionary" target="_blank">
						github.com/emscb/Sleeptionary
					</StyledA>
				</li>
			</ul>

			{/* <h2>경력 Work Experience</h2>
			<p>경력 없음</p> */}

			<h2>커뮤니티 활동 Community Activity</h2>

			<h3>파이콘 한국 준비위원회 PyCon Korea Organizing Team</h3>
			<h5>2018.11 - 현재</h5>
			<p>
				개발자를 포함한 여러 분야의 사람들과 만나고 어울리게 되었습니다. 다양한
				사람들과 서로 맞춰가며 협업하는 것을 배웠습니다.
			</p>
			<ul>
				<li>파이콘 한국 2019</li>
				<ul>
					<li>재정 지원</li>
					<ul>
						<li>
							당일 심사 과정을 간소화, 자동화하여 신청액 변경으로 인해 지원금을
							받지 못하는 경우를 없앴습니다.
						</li>
						<li>
							명확한 지원액 산정으로 더욱 많은 분들을 지원할 수 있었습니다.
						</li>
					</ul>
					<li>후원사와의 메일 커뮤니케이션</li>
				</ul>
				<li>파이콘 한국 2020</li>
				<ul>
					<li>홈페이지</li>
					<ul>
						<li>
							Django 기반의 홈페이지 템플릿 작업과 백엔드 작업을 리드하였습니다.
						</li>
						<li>
							홈페이지:{" "}
							<StyledA href="https://www.pycon.kr/2020/" target="_blank">
								pycon.kr/2020
							</StyledA>
						</li>
						<li>
							GitHub repo:{" "}
							<StyledA
								href="https://github.com/pythonkr/pyconkr"
								target="_blank"
							>
								github.com/pythonkr/pyconkr
							</StyledA>
						</li>
					</ul>
				</ul>
			</ul>

			<h2>학력 Education</h2>

			<h5>2014.03 - 2020.02</h5>
			<p>숭실대학교 의생명시스템학부 생명정보학 전공</p>

			<h2>기타 Etc.</h2>
			<h4>자격증</h4>
			<p>컴퓨터활용능력 1급, MOS Excel Expert</p>

			<h4>영어 English</h4>
			<p>영문서로 작업 가능. 영문 메일 의사소통 가능</p>
		</div>
	);
};

export default Resume;
