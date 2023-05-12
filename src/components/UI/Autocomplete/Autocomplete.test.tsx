import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "../../../tests/testUtils";
import Autocomplete from "./Autocomplete";

describe("Autocomplete", () => {
  const mockOptions = [
    {
      suggestionText: "Option 1",
      inputText: "Option 1",
      value: "Option 1",
      id: "1",
    },
    {
      suggestionText: "Option 2",
      inputText: "Option 2",
      value: "Option 2",
      id: "2",
    },
  ];

  it("renders without crashing", () => {
    const { getByLabelText } = render(
      <Autocomplete
        options={mockOptions}
        onInputChange={vi.fn()}
        onOptionSelect={vi.fn()}
        label="Label"
      />
    );
    expect(getByLabelText("Label")).toBeInTheDocument();
  });

  it("displays suggestions when input is focused", () => {
    const { getByLabelText, queryByText } = render(
      <Autocomplete
        options={mockOptions}
        onInputChange={vi.fn()}
        onOptionSelect={vi.fn()}
        label="Label"
      />
    );

    fireEvent.focus(getByLabelText("Label"));
    expect(queryByText("Option 1")).toBeInTheDocument();
    expect(queryByText("Option 2")).toBeInTheDocument();
  });

  it("calls onInputChange when input value changes", () => {
    const mockOnInputChange = vi.fn();
    const { getByLabelText } = render(
      <Autocomplete
        options={mockOptions}
        onInputChange={mockOnInputChange}
        onOptionSelect={vi.fn()}
        label="Label"
      />
    );

    fireEvent.change(getByLabelText("Label"), {
      target: { value: "New Value" },
    });
    expect(mockOnInputChange).toHaveBeenCalledWith("New Value");
  });
});
