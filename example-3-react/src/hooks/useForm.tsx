import React, { useState } from "react";

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (key: keyof T) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [key]: event.target.value });
  };

  return {
    values,
    handleChange,
  };
}
