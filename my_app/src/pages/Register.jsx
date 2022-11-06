import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(75, 75, 223, 0.6), rgba(188, 202, 218, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 800;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-weight: 600;
  ${mobile({ margin: "10px 5px 0px 0px", padding: "5px" })}
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ padding: "10px 15px" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='lastname' />
          <Input placeholder='email' />
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            By creating an account,I consent to the proccessing of my peronal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
