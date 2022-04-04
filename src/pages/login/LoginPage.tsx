import { useFormik } from "formik";
import ButtonBlock from "../../components/ButtonBlock";
import * as Yup from "yup";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setProfile } from "../../redux/slice/profile-slice";
import { PageState, setPageState } from "src/redux/slice/page-slice";
import { useEffect } from "react";

interface LoginFormField {
  email: string;
  password: string;
}

const pageState: PageState = {
  title: "Login",
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues: LoginFormField = {
    email: "john@email.com",
    password: "123456",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, _) => {
      const { email, password } = values;
      if (email != "john@email.com" || password != "123456") {
        return;
      }
      dispatch(setProfile());
      navigate(-1);
    },
  });

  useEffect(() => {
    dispatch(setPageState(pageState));

    return () => {};
  }, []);

  return (
    <div className="h-full w-full p-4">
      <form onSubmit={formik.handleSubmit}>
        <InputField
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          valid={formik.errors.email && formik.touched.email ? false : true}
        >
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-600">{formik.errors.email}</p>
          )}
        </InputField>
        <InputField
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          valid={
            formik.errors.password && formik.touched.password ? false : true
          }
        >
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-600">{formik.errors.password}</p>
          )}
        </InputField>

        <ButtonBlock type="submit">Login</ButtonBlock>
      </form>
    </div>
  );
};

export default LoginPage;
