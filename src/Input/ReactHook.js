import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

const FormHook = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
      <>
        <h1>This is Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            {/* type text to prevent default error message */}
            <input
              type="text"
              className={`form-input ${errors?.email ? "error-message" : ""}`}
              placeholder="Email address"
              aria-label="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Please enter a valid email.",
                },
              })}
              name="email"
            />
            <button className="form-input" type="submit">
              Subscribe
            </button>
            {errors?.email && <ErrorMessage message={errors.email.message} />}
          </div>
        </form>
      </>
    );
}

export default FormHook;