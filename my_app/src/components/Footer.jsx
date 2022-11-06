import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "None" })}
`;
const Tittle = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#f5f4f4" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 100%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>App.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          dolores nemo fugit incidunt similique fugiat corporis distinctio
          aliquam debitis magnam?
        </Desc>
        <SocialContainer>
          <SocialIcon color='3b5999'>
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color='e4405f'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='55acee'>
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Tittle>Useful links</Tittle>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Tittle>Contact</Tittle>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} />
          Ulica broj 26
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +66789765
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} /> @gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
