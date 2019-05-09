import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TopBar from "./TopBar";
import { DateCard } from "./DateCard";
import { Buttons } from "./Buttons";
import * as ReactRedux from "react-redux";
import { swipeRight, swipeLeft, reset, fetchRandomUser } from "./redux";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const IPhoneBackground = styled.div`
  background-color: rgb(250, 250, 250);
  background-image: url("https://raw.githubusercontent.com/Wombbu/rekry/master/ui/public/iphone.png");
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const PhoneDisplayWrapper = styled.div`
  position: absolute;
  margin: auto;
  background-color: #fff;
  width: 265px;
  height: 470px;
  top: -3px;
  bottom: 0;
  left: 1px;
  right: -0.5px;
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
`;

const mapStateToProps = (state: State) => ({
  swipeStatus: state.swipeStatus,
  response: state.response
});

const mapDispatchToProps = dispatch => ({
  swipeRight: () => dispatch(swipeRight()),
  swipeLeft: () => dispatch(swipeLeft()),
  reset: () => dispatch(reset()),
  fetchRandomUser: () => dispatch(fetchRandomUser())
});

function App(props) {
  const { swipeStatus } = props;

  React.useEffect(() => {
    if (props.swipeStatus === "CENTER") {
      return;
    }

    setTimeout(() => {
      //setLoading(true);
      props.fetchRandomUser();
      props.reset();
    }, 300);
  }, [swipeStatus]);

  return (
    <IPhoneBackground>
      <GlobalStyle />
      <PhoneDisplayWrapper>
        <TopBar />
        {!props.response ? (
          <div style={{ flex: 1 }} />
        ) : (
          <DateCard
            imageUrl={props.response.picture.large}
            name={props.response.name.first}
            age={props.response.dob.age}
            swipeStatus={props.swipeStatus}
          />
        )}
        <Buttons
          onAccept={() => props.swipeRight()}
          onDecline={() => props.swipeLeft()}
        />
      </PhoneDisplayWrapper>
    </IPhoneBackground>
  );
}

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
