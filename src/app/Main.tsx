"use client";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

function Main() {
  const [message, setMessage] = useState<string>("");
  const [resMessage, setResMessage] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const clickEvent = () => {
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
      });

    setMessage("");
  };

  return (
    <Container>
      <Image src="/bot.png" alt="bot" width={300} height={200} priority />
      <h1>질문 받습니다?</h1>
      <div>
        <input type="text" onChange={handleInput} value={message} />
        <button onClick={clickEvent}>검색</button>
      </div>
      <div>{resMessage}</div>
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
  flex-direction: column;
  background-color: white;
`;
