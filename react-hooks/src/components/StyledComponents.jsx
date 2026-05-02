import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components"

export function StyledComponents() {
  let mainColor = "#db7093";
  let mainAlphaColor80 = "#db709380";

  const setTransitionTime = (time) => `all ${time} ease-in-out`

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: .5;
    }
    100% {
      opacity: 1;
    }
  `
  
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    /* color: ${(props) => props.color || "#fff"}; */
    color: ${({ color }) => color || "#fff"};
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 5s ease-in-out;

    ${({ isButton }) => isButton && 
    css`
      margin: auto;
      max-width: 50%;
      border-radius: 1rem;
      border: 1px solid #000;
      cursor: pointer;
    `}

    &:hover {
      background-color: ${mainAlphaColor80};
      cursor: pointer;
    }
  `

  const light = {
    color: "#222",
    bgColor: "#DDD"
  }

  const dark = {
    color: "#DDD",
    bgColor: "#222"
  }



  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `

  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transform: uppercase;
      text-align: center;
    }
  `

  return (
    <>
      <GlobalStyle />
      <h2>Styled Components</h2>
      <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
      <MyH3 color="#61dafb">Hola soy un h3 estilizado con styled-components</MyH3>
      <MyH3 isButton color="#61dafb">Hola soy un h3 estilizado como boton</MyH3>
      <ThemeProvider theme={light} >
        <Box>Soy una caja light</Box>
        <BoxRounded>Soy una caja light redondeada</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark} >
        <Box>Soy una caja dark</Box>
        <BoxRounded>Soy una caja dark redondeada</BoxRounded>
      </ThemeProvider>
    </>
  )
}