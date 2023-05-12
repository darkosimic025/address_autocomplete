import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AddressFormProps, FormData, Suggestion } from "./AddressForm.types";
import useDebounce from "@hooks/useDebounce";
import useSearchAddress from "@hooks/useSearchAddress";
import { Option } from "@components/UI/Autocomplete/Autocomplete.types";
import { extractValueFromContext } from "@utils/extractValueFromContext";
import Icon from "@components/UI/Icon/Icon";
import { Form, SubmitButton } from "./AddressForm.styled";
import Autocomplete from "@components/UI/Autocomplete/Autocomplete";
import TextInput from "@components/UI/TextField/TextField";

const AddressForm: React.FC<AddressFormProps> = ({
  setValue,
  setError,
  clearError,
  setInitialCoordinates,
  handleSubmit,
  control,
  errors,
}) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearchKeyword = useDebounce<string>(searchKeyword, 300);

  const { t } = useTranslation();

  const {
    data: suggestions,
    isError,
    isFetching,
  } = useSearchAddress(debouncedSearchKeyword);

  useEffect(() => {
    if (isError) {
      setError("address", {
        type: "costum",
        message:
          "Error occurred while fetching address suggestions. Please try again.",
      });
    } else {
      clearError("address");
    }
  }, [isError, setError, clearError]);

  const onInputChange = (value: string) => {
    setSearchKeyword(value);
  };

  const onSelect = (option: Option) => {
    const { properties, center, context } = option.value;

    const setFieldValue = (field: keyof FormData, contextKey: string) => {
      setValue(field, extractValueFromContext(context, contextKey), {
        shouldValidate: true,
      });
    };

    if (properties.accuracy === "street") {
      setError("address", {
        type: "custom",
        message:
          "Please select your complete address, not just the street name.",
      });
    } else {
      clearError("address");
      const newCoordinates: [number, number] = [center[0], center[1]];
      setInitialCoordinates(newCoordinates);
      setValue("coordinates", newCoordinates);

      setFieldValue("city", "place");
      setFieldValue("country", "country");
      setFieldValue("postalCode", "postcode");
    }
  };

  const options =
    suggestions?.map(
      (suggestion: Suggestion): Option => ({
        id: suggestion.id,
        suggestionText: suggestion.place_name,
        inputText: `${suggestion.text} ${suggestion.address || ""}`,
        value: suggestion,
        icon:
          suggestion.properties.accuracy != "street" ? (
            <Icon name="location" />
          ) : (
            <Icon name="street" />
          ),
      })
    ) || [];

  const isDebouncing = searchKeyword !== debouncedSearchKeyword;
  const showLoadingIndicator = isDebouncing || isFetching;

  return (
    <Form onSubmit={handleSubmit}>
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            options={options}
            id="autoComplete"
            label={t("addressLabel") as string}
            onInputChange={onInputChange}
            onOptionSelect={onSelect}
            loading={showLoadingIndicator}
            error={errors.address}
            placeholder={t("addressPlaceholder") as string}
          />
        )}
      />

      <Controller
        name="addressLine2"
        control={control}
        render={({ field }) => (
          <TextInput
            label={t("addressLine2Label") as string}
            id="addressLine2"
            placeholder={t("addressLine2Placeholder") as string}
            {...field}
          />
        )}
      />

      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <TextInput
            label={t("cityLabel") as string}
            id="city"
            placeholder={t("cityPlaceholder") as string}
            error={errors.city}
            {...field}
          />
        )}
      />

      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <TextInput
            label={t("countryLabel") as string}
            id="country"
            placeholder={t("countryPlaceholder") as string}
            error={errors.country}
            {...field}
          />
        )}
      />

      <Controller
        name="postalCode"
        control={control}
        render={({ field }) => (
          <TextInput
            label={t("postalCodeLabel") as string}
            id="postalCode"
            placeholder={t("postalCodePlaceholder") as string}
            error={errors.postalCode}
            {...field}
          />
        )}
      />
      <SubmitButton id="submitButton" type="submit">
        {t("submitButton") as string}
      </SubmitButton>
    </Form>
  );
};

export default AddressForm;
