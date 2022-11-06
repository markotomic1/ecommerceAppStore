import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Tittle = styled.h1`
  color: white;
  margin: 20px;
  ${mobile({ margin: "5px", fontSize: "20px" })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: #343030;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "10px", padding: "5px" })}
`;

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Link to={"/products/" + item.cat}>
        <Image src={item.img} />
        <Info>
          <Tittle>{item.title}</Tittle>
          <Button>Shop now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoriesItem;
