import styled, { keyframes } from 'styled-components';
import { SpinnerSize, SpinnerColor } from './Spinner.types';

interface StyledSpinnerProps {
  size: SpinnerSize;
  color: SpinnerColor;
}

const spinnerAnimation = keyframes`
  0%,
  80%,
  100% {
    transform: scaleY(0.4);
  }
  40% {
    transform: scaleY(1);
  }
`;

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ size }) =>
    size === 's' ? '3vw' : size === 'm' ? '7.5vw' : '10vw'};
  min-width: 40px;
  max-width: 80px;

  @media (min-width: 768px) {
    width: ${({ size }) =>
      size === 's' ? '40px' : size === 'm' ? '60px' : '80px'};
  }
`;

export const SpinnerDot = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 0.5vw;
  height: 1.75vw;
  min-width: 4px;
  min-height: 14px;
  max-width: 8px;
  max-height: 28px;
  border-radius: 2px;
  animation: ${spinnerAnimation} 1s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: -0.32s;
  }

  &:nth-child(3) {
    animation-delay: -0.16s;
  }

  @media (min-width: 768px) {
    width: 4px;
    height: 14px;
  }
`;