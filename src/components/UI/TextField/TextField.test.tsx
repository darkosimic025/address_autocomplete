import { describe, it, expect, vi } from "vitest";

import TextInput from "./TextField";
import { fireEvent, render } from "@tests/testUtils";

describe("TextInput", () => {
  it("renders without crashing", () => {
    const mockOnChange = vi.fn();
    const { getByLabelText } = render(
      <TextInput
        id="testInput"
        value=""
        onChange={mockOnChange}
        label="Label"
      />
    );
    expect(getByLabelText("Label")).toBeInTheDocument();
  });

  it("displays the correct value", () => {
    const mockOnChange = vi.fn();
    const { getByLabelText } = render(
      <TextInput
        id="testInput"
        value="Test Value"
        onChange={mockOnChange}
        label="Label"
      />
    );
    const input = getByLabelText("Label") as HTMLInputElement;
    expect(input.value).toBe("Test Value");
  });

  it("displays error message when error prop is provided", () => {
    const mockOnChange = vi.fn();
    const { getByText } = render(
      <TextInput
        id="testInput"
        value=""
        onChange={mockOnChange}
        label="Label"
        error={{ type: "required", message: "Test Error" }}
      />
    );
    expect(getByText("Test Error")).toBeInTheDocument();
  });

  it("calls onChange function when value changes", () => {
    const mockOnChange = vi.fn();
    const { getByLabelText } = render(
      <TextInput
        id="testInput"
        value=""
        onChange={mockOnChange}
        label="Label"
      />
    );
    fireEvent.change(getByLabelText("Label"), {
      target: { value: "New Value" },
    });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
