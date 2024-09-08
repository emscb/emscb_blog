import React from "react";
import { Helmet } from "react-helmet";
import ImageContainer from "../components/ImageContainer";

const CV = () => {
	return (
		<div>
			<Helmet title="emscb | CV" />
			<h1>CV</h1>

			<h2>저스트큐</h2>

			<h3>DDD 방식으로 microservice 설계 및 개발</h3>
			<ul>
				<li>IoC 구현을 위해 DI 패턴을 사용하여 이벤트 기반 프레임워크 구축</li>
				<li>
					DDD를 적용하여 domain, infrastructure, application layer로 코드 구조
					구성
				</li>
				<li>Application layer 로직은 파사드(facade) 패턴으로 개발</li>
				<li>ORM (SQLAlchemy) 사용</li>
				<li>Pytest를 사용하여 unit test 작성</li>
				<li>MQ를 비동기로 사용하기 위해 aio-pika를 이용하여 framework 개발</li>
			</ul>
			<ImageContainer
				src="images/Architecture - Framework.png"
				caption="Framework 개요"
			/>

			<h3>MSA 아키텍처 설계 및 구축</h3>
			<ul>
				<li>AWS 기반의 MSA 구축</li>
				<ul>
					<li>ECS, Lambda, Amazon MQ, ELB, API Gateway 등을 활용하여 구축</li>
					<li>
						대규모 데이터를 처리하기 위해 스케일 아웃에 유리한 구조로 구축
					</li>
				</ul>
				<li>Terraform을 이용한 AWS 자원 형상 관리</li>
			</ul>
			<ImageContainer
				src="images/Architecture - AWS.png"
				caption="전반적인 AWS 아키텍처"
			/>
			<ImageContainer
				src="images/Architecture - Microservice.png"
				caption="마이크로서비스 아키텍처"
			/>

			<h3>멀티 채널 판매 솔루션의 이커머스 판매 서비스 개발</h3>
			<ul>
				<li>도매처로부터 정보를 수집 및 가공하는 데이터 파이프라인 개발</li>
				<li>
					상품 데이터 전처리 및 판매 채널에 판매, 상품 관리하는 서비스 개발
				</li>
				<li>DDD 방식으로 서비스 설계 및 개발</li>
				<li>Amazon MQ를 사용하여 분산 처리</li>
				<li>AWS Lambda와 SQS 기반의 상품 가공 서비스 개발</li>
				<li>연동된 모든 판매 채널(약 10곳)로 상품 등록, 수정 연동</li>
				<li>구축된 MSA 기반으로 분산 처리</li>
			</ul>

			<h3>멀티 채널 판매 솔루션의 주문 및 CS 처리 서비스 개발</h3>
			<ul>
				<li>
					판매 채널로부터 주문, 문의, 클레임을 수집하고 배송 송장 입력, 문의
					답변 등을 처리할 수 있는 기능을 제공하는 서비스 개발
				</li>
			</ul>

			<h3>멀티 채널 판매 솔루션의 판매자 입점 서비스 개발</h3>
			<ul>
				<li>
					판매자가 상품 등록/수정, 주문, 문의, 정산 관리를 할 수 있는
					판매자센터의 API 개발
				</li>
				<li>자사에서 상품 검수, 정산할 수 있는 서비스 개발</li>
				<li>
					판매자의 데이터를 독립적으로 관리하고, 많은 판매사 입점을 위해
					확장성이 보장되는 Multi-tenancy 아키텍처 도입
				</li>
				<li>사용자 니즈에 맞는 신규 비즈니스 로직 구현 및 UX 개선</li>
				<li>aiohttp로 Restful API 개발</li>
				<li>Open API를 제공하기 위한 AWS 구축</li>
			</ul>

			<h3>CQRS 패턴 적용을 위해 Read DB 구축</h3>
			<ul>
				<li>데이터 조회 속도 개선으로 서비스 처리 속도 증가</li>
				<li>AWS DynamoDB를 사용하여 구현</li>
				<li>Microservice가 사용할 interface를 AWS Lambda로 구현</li>
				<li>Query를 기준으로 partition key, sort key, GSI 구성</li>
			</ul>

			<h3>CI-CD 구축</h3>
			<ul>
				<li>AWS EC2와 Docker를 이용해 Jenkins 서버 구축</li>
				<li>Python으로 개발한 자체 배포용 CLI를 통한 pipeline 구성</li>
				<li>
					실제 서비스와 동일한 테스트 환경을 위해 docker-compose를 사용하여 test
					실행
				</li>
			</ul>
			<ImageContainer src="images/Architecture - CI_CD.png" />

			<h3>사내용 어드민 페이지</h3>
			<ul>
				<li>React, TypeScript 기반의 사내 서비스 관리용 어드민 페이지 개발</li>
				<li>
					생산성 및 약 100개의 페이지에 일관성 있는 UI/UX를 위한 공통 컴포넌트
					개발
				</li>
				<li>백엔드 연동을 통해 즐겨찾는 메뉴 등 사용자 경험 개인화</li>
				<li>AWS Cognito를 사용하여 사용자 로그인 관리</li>
				<li>자체 권한 관리를 통한 접근 제어</li>
				<li>백엔드 API mocking 간편화를 위해 DI 패턴 도입</li>
				<li>GitHub Actions, S3, Route 53, Cloudfront로 배포</li>
			</ul>
			<ImageContainer
				src="images/Admin page - Module.png"
				caption="페이지 구조 개요"
			/>

			<h3>멀티 채널 판매 솔루션의 판매자 B2B 사이트(판매자센터) 개발</h3>
			<ul>
				<li>
					판매자가 상품 등록/수정, 주문, 문의, 정산 관리를 할 수 있는 판매자센터
					개발
				</li>
			</ul>

			<h3>API authentication 구축</h3>
			<ul>
				<li>
					여러 경로를 통해 들어오는 API 요청에 대한 인증 및 접근 제어 개발
				</li>
				<li>
					API 요청 경로에 따라 AWS API Gateway의 API를 분리하여 각기 다른 인증
					방식을 통해 검증할 수 있게 구현
				</li>
				<li>
					AWS API Gateway의 authorizer와 AWS Cognito를 통해 페이지에서 보내는
					token 검증
				</li>
			</ul>
			<ImageContainer
				src="images/Architecture - API authorizer.png"
				caption="AWS API Gateway를 통한 authentication"
			/>

			<h3>외국 여행객 대상 전통주 커머스 웹 개발</h3>
			<ul>
				<li>카카오맵 API를 이용해 주변 상점 표시</li>
				<li>결제 모듈 연동</li>
				<li>한국어, 영어, 중국어 지원</li>
				<li>다국가 전화 번호 입력 지원</li>
			</ul>
		</div>
	);
};

export default CV;
