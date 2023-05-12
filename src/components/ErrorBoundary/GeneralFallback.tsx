import Header from "@components/UI/Header/Header";
import { styled } from "styled-components";

interface GeneralFallbackProps {
  message: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #414345;
`;

const GeneralFallback: React.FC<GeneralFallbackProps> = ({ message }) => {
  return (
    <Container>
      <Header size="h2" color="#dc3545">
        {message}
      </Header>
    </Container>
  );
};

export default GeneralFallback;
