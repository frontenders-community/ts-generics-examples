import React from "react";
import { useForm } from "../hooks/useForm";

const UserFormComponent: React.FC = () => {
  const {values, handleChange} = useForm({
    name: "",
    email: ""
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={values.name} onChange={handleChange('name')} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={values.email} onChange={handleChange('email')} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserFormComponent;
