import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
  forwardRef,
} from "react";
import { AutocompleteProps, Option } from "./Autocomplete.types";
import {
  AutocompleteWrapper,
  InputWrapper,
  Label,
  InputContainer,
  Input,
  Suggestions,
  Suggestion,
  SpinnerContainer,
  ErrorText,
} from "./Autocomplete.styles";
import Spinner from "../Spinner/Spinner";

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      options,
      label,
      onInputChange,
      onOptionSelect,
      value,
      onChange,
      loading,
      error,
      placeholder,
      id,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value);
    const [suggestionsOpen, setSuggestionsOpen] = useState(false);
    const [focusedSuggestionIndex, setFocusedSuggestionIndex] = useState(-1);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const suggestionsRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
      setFocusedSuggestionIndex(-1);
    }, [options]);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleFocus = () => {
      setSuggestionsOpen(true);
    };

    const handleBlur = () => {
      setSuggestionsOpen(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onInputChange(e.target.value);
      if (onChange) {
        const target = inputRef.current as HTMLInputElement;
        target.value = e.target.value;
        target.name = props.name || "";
        onChange({ target } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const handleSelect = (option: Option) => {
      setInputValue(option.inputText);
      onOptionSelect(option);
      if (onChange) {
        const target = inputRef.current as HTMLInputElement;
        target.value = option.inputText;
        target.name = props.name || "";
        onChange({ target } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedSuggestionIndex((prevIndex) =>
          Math.min(prevIndex + 1, options.length - 1)
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (focusedSuggestionIndex > -1) {
          handleSelect(options[focusedSuggestionIndex]);
        }
      } else if (e.key === "Tab" && focusedSuggestionIndex > -1) {
        e.preventDefault();
        handleSelect(options[focusedSuggestionIndex]);
      } else if (e.key === "Escape") {
        setSuggestionsOpen(false);
      }
    };

    const setRefs = (el: HTMLInputElement | null) => {
      inputRef.current = el;
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        ref.current = el;
      }
    };

    return (
      <AutocompleteWrapper>
        <InputWrapper>
          {label && (
            <Label id={`${id}-label`} htmlFor={id}>
              {label}
            </Label>
          )}
          <InputContainer>
            <Input
              {...props}
              ref={setRefs}
              type="text"
              id={id}
              value={inputValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              placeholder={placeholder}
              aria-activedescendant={options[focusedSuggestionIndex]?.id}
              aria-labelledby={`${id}-label`}
            />
            {loading && (
              <SpinnerContainer>
                {<Spinner size="s" color="primary" />}
              </SpinnerContainer>
            )}
          </InputContainer>
          <ErrorText error={error}>{error && error.message}</ErrorText>
        </InputWrapper>
        {suggestionsOpen && options.length > 0 && (
          <Suggestions ref={suggestionsRef} role="listbox">
            {options.map((option, index) => (
              <Suggestion
                key={option.suggestionText}
                id={option.id}
                onMouseDown={() => handleSelect(option)}
                onFocus={() => setFocusedSuggestionIndex(index)}
                onMouseEnter={() => setFocusedSuggestionIndex(index)}
                role="option"
                tabIndex={-1}
                aria-selected={index === focusedSuggestionIndex}
              >
                {option.icon}
                {option.suggestionText}
              </Suggestion>
            ))}
          </Suggestions>
        )}
      </AutocompleteWrapper>
    );
  }
);

export default Autocomplete;
