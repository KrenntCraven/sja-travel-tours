import Contact_Hero from "../../assets/png/Contact_Hero.png";

// === Styled ===
import styled from "styled-components";
import { device } from "../../MediaQuery";
import { Hero, Heading } from "../Home/HomeHero";

const Container = styled.div`
  z-index: -1;
  top: 40%;
  left: 10%;
  position: absolute;
  ${"" /* 1366px */}
  @media ${device.laptop} {
    top: 22%;
  }
  ${"" /* 820px */}
  @media ${device.tablet} {
    top: 20%;
  }
  ${"" /* 768px */}
  @media ${device.ipadMini} {
    top: 14%;
  }
  ${"" /* 680px */}
  @media ${device.smallTablet} {
    top: 22%%;
  }
  @media ${device.GalaxyFold} {
    top: 6%;
  }
`;

const ContactHero = () => {
  return (
    <>
      <Hero>
        <img alt="Contact_Hero" src={Contact_Hero} />
      </Hero>
      <Container>
        <Heading>Contact</Heading>
      </Container>
    </>
  );
};
export default ContactHero;
