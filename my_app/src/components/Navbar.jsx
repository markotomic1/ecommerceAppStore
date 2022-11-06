import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  width: 100%;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: Center;
`;
const SearchContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "25px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;
const Menutem = styled.div`
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart).quantity;

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>App</Logo>
        </Center>
        <Right>
          <Menutem>Register</Menutem>
          <Menutem>Sign in</Menutem>
          <Link to='/cart'>
            <Menutem style={{ marginRight: "30px" }}>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartIcon color='action' />
              </Badge>
            </Menutem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
