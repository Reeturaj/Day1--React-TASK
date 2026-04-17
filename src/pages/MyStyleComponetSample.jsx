import styled from "styled-components";


const Title = styled.h1`color: red;
  font-size: 32px`;

const Header = styled.header`color: blue;
  font-size: 31px`;;

const Box = styled.div`width: 100px;
  height: 100px;
  background: red`;;


export default function MyStyleComponetSample() {
  return(
    <div>
      <Title>Hello Styled Components</Title>
      <Header>This is a header</Header>
        <Box></Box>
    </div>
  )
}




