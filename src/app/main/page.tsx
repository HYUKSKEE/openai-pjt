"use client";
import styled from "styled-components";
import { useState } from "react";
import Aside from "@/components/Aside";

function Main() {
  const [message, setMessage] = useState<string>("");
  const [resMessage, setResMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const clickEvent = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResMessage(data.message);
        setIsLoading(false);
      });

    setMessage("");
  };

  return (
    <Container>
      <Aside />
      <Content>
        <TitleBox>
          <h1>open AI Chat 콘솔에 오신것을 환영합니다.</h1>
        </TitleBox>
        <ChatContainer>
          <>
            <Robot isLoading={isLoading} />
            {resMessage !== "" && <ChatBox>{resMessage}</ChatBox>}
          </>
        </ChatContainer>
        <SearchBox onSubmit={clickEvent}>
          <SearchInput type="text" onChange={handleInput} value={message} />
          <SearchBtn>검색</SearchBtn>
        </SearchBox>
      </Content>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #534e4e;
  color: white;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Robot = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-size: 200px;
  background-image: url("/bot.png");
  background-position-x: -20px;

  animation: ${({ isLoading }) =>
    isLoading === true && "spinner 1s linear infinite"};
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ChatContainer = styled.div`
  width: 100%;
  height: -webkit-fill-available;
  padding: 30px 0px 0px 0px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  background-color: #898989;
  white-space: pre-line;
  line-height: 1.5;
  letter-spacing: 1px;
`;

const ChatBox = styled.div`
  width: 80%;
  height: fit-content;
  padding: 10px;
  background-color: #e7e7e7;
  color: black;
  border-radius: 10px;
`;

const SearchBox = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  outline: none;
`;

const SearchBtn = styled.button`
  width: 20%;
  border: none;
  background-color: #534e4e;
  color: white;
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
