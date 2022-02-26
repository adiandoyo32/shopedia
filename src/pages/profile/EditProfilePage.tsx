import { Formik, useFormik } from "formik"
import InputField from "../../components/InputField"
import User from "../../models/User";
import * as Yup from 'yup';
import ButtonBlock from "../../components/ButtonBlock";

const EditProfilePage = () => {
    const schema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters long')
            .required('Name is required'),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        city: Yup.string()
            .min(6, 'Name must be at least 6 characters long')
            .required("City is required"),
    })

    const initialValues: User = {
        name: '',
        email: '',
        city: ''
    }

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="p-4">
            <form onSubmit={formik.handleSubmit}>
                <InputField label="Name" value={formik.values.name} onChange={formik.handleChange} valid={formik.errors.name && formik.touched.name ? false : true}>
                    {formik.errors.name && formik.touched.name && (<p className="text-red-600">{formik.errors.name}</p>)}
                </InputField>
                <InputField label="Email" value={formik.values.email} onChange={formik.handleChange} valid={formik.errors.email && formik.touched.email ? false : true}>
                    {formik.errors.email && formik.touched.email && (<p className="text-red-600">{formik.errors.email}</p>)}
                </InputField>
                <InputField label="City" value={formik.values.city} onChange={formik.handleChange} valid={formik.errors.city && formik.touched.city ? false : true}>
                    {formik.errors.city && formik.touched.city && (<p className="text-red-600">{formik.errors.city}</p>)}
                </InputField>
                <ButtonBlock type="submit">
                    Save
                </ButtonBlock>
            </form>
        </div>
    )
}

export default EditProfilePage