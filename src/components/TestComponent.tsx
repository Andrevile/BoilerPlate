import React from 'react';
import styled from 'styled-components';
import testSvg from '@/static/assets/testSvg.svg';

const Box = styled.div`
  width: 100px;
  background-color: black;
  height: 50px;
  color: white;
`;
interface PropsTypes {
  children: React.ReactChild;
}

function BoxComponent({ children }: PropsTypes) {
  return (
    <>
      <Box>{children}</Box>
      <img style={{ width: 100, height: 100 }} src={testSvg} />
    </>
  );
}

export default BoxComponent;
