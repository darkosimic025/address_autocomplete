import styled from "styled-components";
import { fontSize, color, spacing } from "../../../theme/themeHelpers";
import { TextInputProps } from "./TextField.types";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing("sm")};
`;

export const InputLabel = styled.label`
  font-size: ${fontSize("s")};
  margin-bottom: ${spacing("xs")};
  color: ${color("inputLabelTextColor")}
`;

export const InputField = styled.input`
  font-size: ${fontSize("s")};
  padding: ${spacing("sm")} ${spacing("sm")};
  border: 2px solid ${color("inputBorderColor")};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease;
  background-color: ${color("inputBackgroundColor")};
  color: ${color("inputTextColor")};

  &:focus {
    border-color: ${color("primary")};
  }

  &::placeholder {
    color: ${color("inputPlaceholderTextColor")};
    font-size: ${fontSize("s")};
  }
`;

export const ErrorText = styled.span<Pick<TextInputProps, "error">>`
  color: ${color("error")};
  font-size: ${fontSize("xs")};
  height: 1rem;
  visibility: ${({ error }) => (error ? "visible" : "hidden")};
`;
