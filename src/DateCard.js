import React from "react";
import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
from { opacity: 0; }
to   { opacity: 1; }
`;

const DateCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px -1px rgba(133, 131, 133, 1);
  transition: transform 0.6s;
  ${props =>
    props.swipedRight ? "transform: translate(400px) rotate(40deg);" : ""}
  ${props =>
    props.swipedLeft ? "transform: translate(-400px) rotate(-40deg);" : ""}
  animation: ${fadeIn} 0.5s;
`;

const Image = styled.img`
  flex: 1;
  object-fit: cover;
  max-width: 100%;
  filter: blur(10px);
`;

const BottomInfo = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  background-color: white;
  z-index: 1;
`;

export const DateCard = props => {
  return (
    <DateCardWrapper
      swipedRight={props.swipeStatus === "RIGHT"}
      swipedLeft={props.swipeStatus === "LEFT"}
    >
      <Image src={props.imageUrl} />
      <BottomInfo>
        {props.name}, {props.age}
      </BottomInfo>
    </DateCardWrapper>
  );
};
