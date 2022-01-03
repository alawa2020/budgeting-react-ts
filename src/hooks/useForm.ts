import { useState } from 'react';

const useForm = (initialState: any) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleValue = (e: any): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = (): void => {
    setFormValues(initialState);
  };

  return [formValues, handleValue, resetForm];
};

export default useForm;
