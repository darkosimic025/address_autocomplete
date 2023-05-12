import { forwardRef } from "react";
import { TextInputProps } from "./TextField.types";
import {
  ErrorText,
  InputField,
  InputLabel,
  InputWrapper,
} from "./TextField.styled";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, id, placeholder, value, onChange, error, required, ...props }, ref) => {
    return (
      <InputWrapper>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <InputField
          id={id}
          ref={ref}
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={`${id}-error`}
          aria-required={required}
          {...props}
        />
        <ErrorText id={`${id}-error`} error={error} role={error ? 'alert' : undefined}>
          {error && error.message}
        </ErrorText>
      </InputWrapper>
    );
  }
);

export default TextInput;