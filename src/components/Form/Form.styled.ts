import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #232526;
  background: -webkit-linear-gradient(to top, #232526, #414345);
  background: linear-gradient(to top, #232526, #414345);
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 2rem;
  border-right: 0.1rem #69686899 solid;

  @media (max-width: 999px) {
    width: 100%;
    height: 70%;
    border-right: none;
    border-bottom: 0.1rem #69686899 solid;
  }
`;

export const MapSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  position: relative;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

  @media (max-width: 999px) {
    height: 50vh;
    width: 100%;
  }
`;
