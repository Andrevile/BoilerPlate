import React from "react";
import { Container } from "@/components/styles/Container.styled";
import Card from "@/components/Card";
import content from "@/static/constants/content";
function Main() {
  return (
    <Container>
      {content.map((item, index) => (
        <Card key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Main;
