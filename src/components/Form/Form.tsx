import React, { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { Container, FormSection, MapSection } from "./Form.styled";
import Header from "@components/UI/Header/Header";
import AddressForm from "@components/AddressForm/AddressForm";
import Spinner from "@components/UI/Spinner/Spinner";
import { FormData } from "@components/AddressForm/AddressForm.types";

const Map = React.lazy(() => import("../Map/Map"));

const Form: React.FC = () => {
  const [initialCoordinates, setInitialCoordinates] = useState<
    [number, number] | null
  >();
  const { t } = useTranslation();

  const validationSchema = yup.object().shape({
    address: yup.string().required(t("validation.addressRequired") as string),
    city: yup.string().required(t("validation.cityRequired") as string),
    country: yup.string().required(t("validation.countryRequired") as string),
    postalCode: yup
      .string()
      .required(t("validation.postalCodeRequired") as string),
  });

  const {
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: "",
      addressLine2: "",
      city: "",
      country: "",
      postalCode: "",
      coordinates: [0, 0] as [number, number],
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <FormSection>
        <Header color="#7DDED8" size="h2">
          {t("title")}
        </Header>
        <AddressForm
          clearError={clearErrors}
          setValue={setValue}
          setError={setError}
          setInitialCoordinates={setInitialCoordinates}
          handleSubmit={handleSubmit(onSubmit)}
          control={control}
          errors={errors}
        />
      </FormSection>
      <MapSection>
        {initialCoordinates && (
          <Suspense fallback={<Spinner size="l" />}>
            <Map setValue={setValue} coordinates={initialCoordinates} />
          </Suspense>
        )}
      </MapSection>
    </Container>
  );
};

export default Form;
