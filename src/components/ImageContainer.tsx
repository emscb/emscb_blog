import React from "react";
import styled from "styled-components";

type Props = {
	src: string;
	caption?: string;
};

const ImageContainer = ({ src, caption }: Props) => {
	return (
		<Container>
			<a href={src} target="_blank" rel="noreferrer">
				<img src={src} alt={src.split("/").reverse()[0]} />
			</a>
			{caption && <div>{caption}</div>}
		</Container>
	);
};

export default ImageContainer;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2vh;

	img {
		width: 100%;
	}

	& > div {
		color: #939294;
		font-size: 0.9rem;
	}
`;
