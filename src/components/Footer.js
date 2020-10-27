import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 1.17vw;
	width: 55vw;
	margin: 0 auto;
	border-top: 1px double #000;

	@media screen and (max-width: 768px) {
		width: 85vw;
		margin-bottom: 3rem;
	}
`;

const SNSLink = styled.a`
	text-decoration: none;
	color: inherit;
	& + & {
		margin-left: 1rem;
	}
`;

const Footer = () => {
	return (
		<FooterBlock>
			<SNSLink href="https://www.facebook.com/khmzxc/" target="_blank">
				Facebook
			</SNSLink>
			<SNSLink href="https://github.com/emscb" target="_blank">
				Github
			</SNSLink>
		</FooterBlock>
	);
};

export default Footer;
