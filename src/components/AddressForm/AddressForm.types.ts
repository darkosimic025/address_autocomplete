import {
  Control,
  FieldErrors,
  UseFormSetValue,
  UseFormSetError,
  UseFormClearErrors,
} from "react-hook-form";

export interface FormData {
  address: string;
  city: string;
  country: string;
  addressLine2: string;
  postalCode: string;
  coordinates: [number, number];
}

export interface AddressFormProps {
  setValue: UseFormSetValue<FormData>;
  setError: UseFormSetError<FormData>;
  clearError: UseFormClearErrors<FormData>;
  setInitialCoordinates: (coordinates: [number, number]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: any;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

export interface Suggestion {
  place_name: string;
  text: string;
  address: string;
  properties: { accuracy: string };
  id: string;
}
