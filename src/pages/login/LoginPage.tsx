import { useFormik } from "formik"
import ButtonBlock from "../../components/ButtonBlock"
import * as Yup from 'yup';
import InputField from "../../components/InputField";

interface LoginFormField {
  email: string;
  password: string;
}

const LoginPage = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required"),
  })

  const initialValues: LoginFormField = {
    email: '',
    password: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: values => {
      // dispatch(saveProfile(values))
      // navigate('/profile')
    },
  });

  return (
    <div className="m-auto w-full p-4">
      <form onSubmit={formik.handleSubmit}>

        <InputField label="Email" value={formik.values.email} onChange={formik.handleChange} valid={formik.errors.email && formik.touched.email ? false : true}>
          {formik.errors.email && formik.touched.email && (<p className="text-red-600">{formik.errors.email}</p>)}
        </InputField>
        <InputField label="Password" type="password" value={formik.values.password} onChange={formik.handleChange} valid={formik.errors.password && formik.touched.password ? false : true}>
          {formik.errors.password && formik.touched.password && (<p className="text-red-600">{formik.errors.password}</p>)}
        </InputField>

        <ButtonBlock type="submit">
          Save
        </ButtonBlock>
      </form>
    </div>
  )
}

export default LoginPage