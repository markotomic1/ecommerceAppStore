import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
`;

const Anonouncments = () => {
  return <Container>Free shiping on orders above 50$!</Container>;
};

export default Anonouncments;
