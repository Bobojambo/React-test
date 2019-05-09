import React from "react";
import styled from "styled-components";

const TopBarWrapper = styled.div`
  height: 40px;
  background-color: red;
  position: relative;
  justify-content: center;
  display: flex;
  box-shadow: 0 4px 2px -2px gray;
`;

const TinderLogo = styled.img`
  object-fit: contain;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export default () => (
  <TopBarWrapper>
    <TinderLogo src="http://pluspng.com/img-png/tinder-logo-png-open-2000.png" />
  </TopBarWrapper>
);
