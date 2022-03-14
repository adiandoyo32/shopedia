import { useFormik } from "formik";
import InputField from "../../components/InputField";
import Profile from "../../models/Profile";
import * as Yup from "yup";
import ButtonBlock from "../../components/ButtonBlock";
import TextAreaField from "../../components/TextAreaField";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { saveProfile, selectProfile } from "../../redux/slice/profile-slice";
import { useNavigate } from "react-router-dom";
import { PageState, setPageState } from "../../redux/slice/page-slice";
import { useEffect } from "react";

const pageState: PageState = {
    title: "Edit Profile",
};

const EditProfilePage = () => {
    const profileState = useAppSelector(selectProfile);
    const profile = profileState.profile;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setPageState(pageState));

        return () => {};
    }, []);

    const schema = Yup.object().shape({
        name: Yup.string().min(3, "Name must be at least 3 characters long").required("Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        city: Yup.string().required("City is required"),
        address: Yup.string().min(10, "Please enter valid address").required("Address is required"),
    });

    const initialValues: Profile = {
        name: profile.name ?? "",
        email: profile.email ?? "",
        city: profile.city ?? "",
        address: profile.address ?? "",
    };

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(saveProfile(values));
            navigate("/profile");
        },
    });

    return (
        <div className="p-4">
            <form onSubmit={formik.handleSubmit}>
                <InputField
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    valid={formik.errors.name && formik.touched.name ? false : true}
                >
                    {formik.errors.name && formik.touched.name && <p className="text-red-600">{formik.errors.name}</p>}
                </InputField>
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
                <TextAreaField
                    label="Address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    valid={formik.errors.address && formik.touched.address ? false : true}
                >
                    {formik.errors.address && formik.touched.address && (
                        <p className="text-red-600">{formik.errors.address}</p>
                    )}
                </TextAreaField>
                <InputField
                    label="City"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    valid={formik.errors.city && formik.touched.city ? false : true}
                >
                    {formik.errors.city && formik.touched.city && <p className="text-red-600">{formik.errors.city}</p>}
                </InputField>
                <ButtonBlock type="submit">Save</ButtonBlock>
            </form>
        </div>
    );
};

export default EditProfilePage;
