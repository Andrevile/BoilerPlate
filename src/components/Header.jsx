import React, { useEffect } from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import LogoSvg from "@/static/assets/logo.svg";
import IllustrationMockups from "@/static/assets/Illustration-mockups.svg";

function dynamicImport() {
  return import(/* webpackChunkName: "test"*/ "../utils/codeSplitting.js").then(
    ({ codeSplitting }) => codeSplitting()
  );
}
export default function Header() {
  const onClickHandler = () => {
    dynamicImport().then((res) => alert(res));
  };
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={LogoSvg} alt="" />
          <Button onClick={onClickHandler}>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src={IllustrationMockups} alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
