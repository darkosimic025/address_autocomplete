import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface Option {
  id: string;
  icon?: React.ReactNode;
  suggestionText: string;
  inputText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

export interface AutocompleteProps
  extends InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  label?: string;
  onInputChange: (inputValue: string) => void;
  onOptionSelect: (option: Option) => void;
  value?: string;
  loading?: boolean;
  placeholder?: string;
  error?: FieldError;
}
