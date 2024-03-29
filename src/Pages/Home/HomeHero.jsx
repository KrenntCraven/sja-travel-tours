// === Styled ===
import styled from "styled-components";
import { FourthColor, PrimaryColor } from "../../Global";
import { device } from "../../MediaQuery";
import Home_Hero from "../../assets/png/Home_Hero.png";
import { Button } from "@mui/material";
import Service from "../Service/Service";
export const Container = styled.div`
  z-index: -1;
  top: 26%;
  left: 10%;
  position: absolute;
  ${"" /* 1366px */}
  @media ${device.laptop} {
    top: 10%;
  }
  ${"" /* 820px */}
  @media ${device.tablet} {
    top: 8%;
  }
  ${"" /* 768px */}
  @media ${device.ipadMini} {
    top: 4%;
  }
  ${"" /* 680px */}
  @media ${device.smallTablet} {
    top: 10%;
  }
  ${"" /* 425px */}
  @media ${device.mobileL} {
    top: 0%;
  }
  ${"" /* 540 */}
  @media ${device.surfaceDuo} {
    top: 0%;
  }
  ${"" /* 280 */}
  @media ${device.GalaxyFold} {
    top: 4%;
  }
  a {
    display: flex;
    justify-content: center;
  }
  .Button {
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    margin: auto;
    text-transform: none;
    top: 1.2em;
    padding: 0.4rem 1.4rem;
    font-weight: 600;
    letter-spacing: normal;
    color: ${PrimaryColor};
    font-size: 1.4rem;
    ${"" /* 425px */}
    @media ${device.mobileL} {
      font-size: 1.2rem;
      top: 0.4em;
    }
    @media ${device.mobileM} {
      font-size: 1rem;
    }
    @media ${device.mobileS} {
      font-size: 0.9rem;
      height: 40px;
    }
    @media ${device.GalaxyFold} {
      font-size: 0.6rem;
      height: 30px;
    }
    &:hover {
      background: linear-gradient(
        121.09deg,
        rgba(255, 255, 255, 0.1) 33.36%,
        rgba(255, 255, 255, 0) 103.28%
      );
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      backdrop-filter: blur(22px);
    }
  }
`;

export const Hero = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    position: relative;
  }
`;

export const Heading = styled.h1`
   {
     {
      background: ${FourthColor};
      position: static
      
      z-index: 3;
      padding: 0;
      font-size: 3.2rem;
      text-align: center;
      font-weight: 800;
      width: 80vw;
      margin: auto;
      padding-top: 2.5em;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      ${"" /* 768px */}
      @media ${device.ipadMini} {
        font-size: 2.4rem;
      }
      ${"" /* 680px */}
      @media ${device.smallTablet} {
        font-size: 2.2rem;
      }
      ${"" /* 540px */}+
                                                                  
      @media ${device.surfaceDuo} {
        font-size: 2rem;
        padding: 0;
        top: 9%;
      }
      ${"" /* 425px */}
      @media ${device.mobileL} {
        font-size: 1.6rem;
      }
      @media ${device.mobileM} {
        font-size: 1.4rem;
      }
      @media ${device.mobileS} {
        font-size: 1.2rem;
      }
      @media ${device.GalaxyFold} {
        font-size: 1rem;
      }
    }
  }
`;

const HomeHero = () => {
  return (
    <>
      <Hero>
        <img alt="Home-Hero" src={Home_Hero} />
      </Hero>
      <Container>
        <Heading>
          Providing you with comfort and relaxation across the nation at the
          cheapest rates.
        </Heading>
        {/* <Button className="Button" variant="elevated" onClick={Service}>
          Travel Plan
        </Button> */}
      </Container>
    </>
  );
};

export default HomeHero;
