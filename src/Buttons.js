import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  padding-left: 6px;
  border-radius: 30px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 60px;
  box-shadow: 0px 0px 10px -1px rgba(133, 131, 133, 1);
  font-size: 26px;
`;

export const Buttons = props => (
  <ButtonWrapper>
    <Button onClick={props.onDecline}>❌</Button>
    <Button onClick={props.onAccept}>💚</Button>
  </ButtonWrapper>
);
