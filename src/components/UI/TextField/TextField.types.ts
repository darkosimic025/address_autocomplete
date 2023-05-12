import { ChangeEvent, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: FieldError;
}
