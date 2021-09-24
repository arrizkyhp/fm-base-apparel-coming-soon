import React, { useState } from 'react'
import Button from './Button'
import { useForm } from "react-hook-form";
import ErrorMessage from './ErrorMessage';

export default function FormEmail() {
    const [submitted, isSubmitted] = useState(false);

      const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
          isSubmitted(true);
          console.log(data);
      };

      console.log(submitted)
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors?.email ? "error-message" : ""}`}
            placeholder="Email Address"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Please enter a valid email.",
              },
            })}
          />
          {errors?.email && <span className="error-icon"></span>}
          <Button className={"btn"} />
        </div>
        {submitted && <p className="success text-dark-red">Thanks for joining us!</p>}
          {errors?.email && <ErrorMessage message={errors.email.message}/>}
      </form>
    );
}
