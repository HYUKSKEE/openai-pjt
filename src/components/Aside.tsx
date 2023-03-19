"use client";
import Link from "next/link";
import styled from "styled-components";

function Aside() {
  return (
    <Container>
      <Wrap>
        <LinkStyle href="/main">Chat</LinkStyle>
      </Wrap>
    </Container>
  );
}

export default Aside;

const Container = styled.div`
  width: 300px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #363232;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const LinkStyle = styled(Link)`
  width: 100%;
  margin: 20px 0px 20px 0px;
  padding: 10px 0px 10px 0px;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(121, 209, 164, 0.5);
`;
