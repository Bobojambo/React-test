import React from "react";
import styled, { createGlobalStyle } from "styled-components";

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

const App = () => {
  const cardStatus = "CENTER";
  const loading = false;
  const response = {
    picture: {
      large: "https://randomuser.me/api/portraits/men/34.jpg"
    },
    name: { first: "Pena" },
    dob: { age: 50 }
  };

  return (
    <IPhoneBackground>
      <GlobalStyle />
      <PhoneDisplayWrapper>
        <TopBar />
        {loading || response == null ? (
          <Loading />
        ) : (
          <DateCard
            imageUrl={response.picture.large}
            name={response.name.first}
            age={response.dob.age}
            cardStatus={cardStatus}
          />
        )}
        <Buttons
          onAccept={() => console.log("Accept!") /* setCardStatus("RIGHT") */}
          onDecline={() => console.log("Decline!") /* setCardStatus("LEFT") */}
        />
      </PhoneDisplayWrapper>
    </IPhoneBackground>
  );
};

export default App;
