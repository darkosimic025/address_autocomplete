import styled from "styled-components";
import { color, spacing, fontSize } from "../../../theme/themeHelpers";
import { AutocompleteProps } from "./Autocomplete.types";

export const AutocompleteWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${spacing("sm")};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  margin-bottom: ${spacing("xs")};
  font-size: ${fontSize("s")};
  color: ${color("inputLabelTextColor")};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  font-size: ${fontSize("s")};
  padding: ${spacing("sm")} ${spacing("sm")};
  border: 2px solid ${color("inputBorderColor")};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease;
  background-color: ${color("inputBackgroundColor")};
  color: ${color("inputTextColor")};
  width: 100%;

  &:focus {
    border-color: ${color("primary")};
  }

  &::placeholder {
    color: ${color("inputPlaceholderTextColor")};
    font-size: ${fontSize("s")};
  }
`;

export const Suggestions = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  margin-top: -14px;
  padding: 0;
  list-style: none;
  background-color: ${color("suggestionsBackgroundColor")};
  border: 1px solid ${color("suggestionsBorderColor")};
  border-radius: 0 0 6px 6px;
  z-index: 1000;
  max-height: ${spacing("xl")};
  overflow-y: auto;
`;

export const Suggestion = styled.li`
  padding: ${spacing("sm")} ${spacing("md")};
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: ${fontSize("s")};
  color: ${color("suggestionTextColor")};

  &:hover,
  &[aria-selected="true"] {
    background-color: ${color("suggestionSelectedColor")};
  }

  svg {
    margin-right: ${spacing("sm")};
    vertical-align: middle;
  }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  right: ${spacing("md")};
  transform: translateY(-50%);
`;

export const ErrorText = styled.span<Pick<AutocompleteProps, "error">>`
  color: ${color("error")};
  font-size: ${fontSize("xs")};
  height: 1rem;
  visibility: ${({ error }) => (error ? "visible" : "hidden")};
`;
