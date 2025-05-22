import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
// import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";

const Form = () => {
  //   const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  const phoneNumberRegex =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const useSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneNumberRegex, "Phone Number Is Not Valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });

  return (
    <div className="m-5 flex flex-col gap-10">
      <Header title="CREATE USER" subtitle="Create A New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={useSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-row flex-wrap gap-10 sm:gap-x-[2%] sm:gap-y-10 "
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              className="basis-full sm:basis-[49%]"
              sx={{
                input: { color: "var(--color-menu)" },
                label: { color: "var(--color-menu)" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "var(--sidebar)",
                },
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={!!touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              className="basis-full sm:basis-[49%]"
              sx={{
                input: { color: "var(--color-menu)" },
                label: { color: "var(--color-menu)" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "var(--sidebar)",
                },
              }}
            />
            <TextField
              variant="filled"
              type="email"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              className="basis-full"
              sx={{
                input: { color: "var(--color-menu)" },
                label: { color: "var(--color-menu)" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "var(--sidebar)",
                },
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Contact Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={!!touched.contact && !!errors.contact}
              helperText={touched.contact && errors.contact}
              className="basis-full"
              sx={{
                input: { color: "var(--color-menu)" },
                label: { color: "var(--color-menu)" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "var(--sidebar)",
                },
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 1"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address1}
              name="address1"
              error={!!touched.address1 && !!errors.address1}
              helperText={touched.address1 && errors.address1}
              className="basis-full sm:basis-[49%]"
              sx={{
                input: { color: "var(--color-menu)" },
                label: { color: "var(--color-menu)" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "var(--sidebar)",
                },
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 2"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name="address2"
              className="basis-full sm:basis-[49%]"
              sx={{
                input: { color: "var(--color-menu)" },
                label: { color: "var(--color-menu)" },
                "& .MuiFilledInput-root": {
                  backgroundColor: "var(--sidebar)",
                },
              }}
            />

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="w-fit bg-admin rounded-md text-white p-4 font-bold cursor-pointer hover:bg-not-admin transition-colors duration-300"
              >
                CREATE USER
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
