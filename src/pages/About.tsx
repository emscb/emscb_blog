import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const About = () => {
	return (
		<div>
			<Helmet title="emscb | About" />
			<h1>권혁민</h1>
			<p>
				Contact:{" "}
				<a
					href="mailto:khmzxc6622@gmail.com"
					style={{
						color: "inherit",
					}}
				>
					khmzxc6622@gmail.com
				</a>
			</p>
			<br />
			<p>
				4년 차 개발자. Python으로 개발 및 PO, PM 역할을 했고, 웹 서비스 개발,
				배포, 운영을 했습니다. Domain-driven design, MSA 기반의 백엔드 비즈니스
				설계, 개발을 했고, React로 사내 어드민 페이지와 B2B 페이지를 기획,
				개발했습니다. AWS 아키텍처 설계와 운영 관리를 했습니다.
			</p>

			<h2>기술</h2>
			<ul>
				<li>
					Backend: Python으로 aiohttp 기반 자체 framework 작성, SQLAlchemy,
					asyncio, aio-pika
				</li>
				<li>Frontend: React 기반의 admin 사이트, B2B 사이트 개발</li>
				<li>
					Infra: AWS ECS, Lambda로 MSA 구축, Terraform으로 AWS 자원 형상 관리,
					AWS RDS, DynamoDB를 이용한 CQRS 패턴
				</li>
				<li>CI-CD: Jenkins</li>
			</ul>

			<h2>경력</h2>
			<ExprCompany>저스트큐</ExprCompany>
			<Caption>이커머스 스타트업</Caption>
			<Experience>
				<section>
					<div>연구개발팀</div>
					<div>2020.12-2024.08</div>
				</section>
				<section>
					<ul>
						<li>Python 기반의 백엔드 개발</li>
						<ul>
							<li>DDD 방식으로 MSA 설계 및 구축</li>
							<li>Rabbit MQ를 이용한 분산 처리</li>
							<li>API 평균 100ms 내 응답으로 원활한 서비스 운영</li>
							<li>일 100만 개의 상품 데이터 수집/가공/판매하는 서비스 개발</li>
						</ul>
					</ul>
					<ul>
						<li>AWS 기반의 인프라 구축 및 유지보수</li>
						<ul>
							<li>ECS, Lambda, RDS, Amazon MQ, DynamoDB 등 사용</li>
							<li>
								Autoscaling, 앱 스펙 조정 등 비용 최적화로 월 사용료 50% 감소
							</li>
							<li>대규모 트래픽 처리를 위해 스케일 아웃이 용이하게 구축</li>
							<li>Terraform으로 형상 관리 및 운영 비용 최소화</li>
							<li>Jenkins로 배포 파이프라인 구축 및 유지보수</li>
						</ul>
					</ul>
					<ul>
						<li>사내용 어드민 페이지, B2B 페이지 개발</li>
						<ul>
							<li>TypeScript를 이용해 안정성 및 생산성 증가</li>
							<li>AWS Cognito를 통한 사용자 로그인 관리</li>
							<li>서버 API mocking을 DI 패턴으로 구축</li>
							<li>백엔드 연동으로 즐겨찾기, 중복 호출 방지 등 개인화</li>
						</ul>
					</ul>
				</section>
			</Experience>
			<CVLink>
				<NavLink
					to="/cv"
					onClick={() => {
						window.scrollTo({ top: 0 });
					}}
				>
					경력기술서 보기
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</NavLink>
			</CVLink>

			<h2>기타 활동</h2>
			<h5>2018.11 - 현재</h5>
			<p>파이콘 한국 준비위원회</p>

			<h2>학력</h2>
			<h5>2014.03 - 2020.02</h5>
			<p>숭실대학교 의생명시스템학부 생명정보학</p>
		</div>
	);
};

export default About;

const ExprCompany = styled.h3`
	margin-bottom: 1vh;
`;

const Caption = styled.div`
	color: #939294;
	font-size: 0.9rem;
`;

const Experience = styled.div`
	display: flex;
	margin-top: 3vh;

	& > section:first-of-type {
		width: 30%;

		& > div:first-of-type {
			font-weight: bold;
		}
		& > div:nth-of-type(2) {
			color: #939294;
			font-size: 0.9rem;
			margin-top: 0.5vh;
		}
	}
	& > section:last-of-type {
		width: 70%;
	}

	@media screen and (max-width: 768px) {
		display: block;

		& > section:first-of-type {
			width: 100%;
		}
		& > section:last-of-type {
			width: 100%;
		}
	}
`;

const CVLink = styled.div`
	border-top: 1px dashed #a7a4a9;
	border-bottom: 1px dashed #a7a4a9;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75rem 0;
	margin-top: 1rem;

	& > a {
		text-decoration: none;
		color: inherit;

		& > svg {
			font-size: 0.85rem;
			margin-left: 0.25rem;
		}
	}

	@media print {
		display: none;
	}
`;
