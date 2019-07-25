import React from "react";

import useFormValidation from "./hooks/useFormValidation";
import validate from "./utils/validate";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

const Form = () => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validate);

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            type="text"
            className={errors.name && "error-input"}
            placeholder="Your name"
            autoComplete="off"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            type="email"
            className={errors.email && "error-input"}
            placeholder="Your email"
            autoComplete="off"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={errors.password && "error-input"}
            name="password"
            type="password"
            placeholder="Choose a secure password"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="button"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "grey" : "orange" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
