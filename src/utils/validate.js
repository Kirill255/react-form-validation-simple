export default function validate(values) {
  let errors = {};

  // Name Errors
  if (!values.name) {
    errors.name = "Name required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email Errors
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Password Errors
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
}
