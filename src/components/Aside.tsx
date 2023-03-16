"use client";
import Link from "next/link";
import styled from "styled-components";

function Aside() {
  return (
    <Container>
      <LinkStyle href="/main">Chat</LinkStyle>
    </Container>
  );
}

export default Aside;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;
