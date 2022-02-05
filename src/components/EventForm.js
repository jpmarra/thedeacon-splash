import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const EventForm = () => {
    const [success, setSuccess] = useState(false);
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email_address: "",
            phone_number: "",
            phone_number_extension: "",
            company: "",
        },
        validationSchema: Yup.object({
            first_name: Yup.string()
                .max(20, "Must be 15 characters or less")
                .required("Required"),
            last_name: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            email_address: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            phone_number: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Required"),
            phone_number_extension: Yup.string().max(
                5,
                "Ext must be 5 characters or less"
            ),
            company: Yup.string().max(20, "Must be 15 characters or less"),
        }),
        onSubmit: (values) => {
            setSuccess(true);
            // axios
            //     .post(
            //         "https://cors-anywhere.herokuapp.com/https://api.tripleseat.com/v1/leads/create.js?lead_form_id=22323&public_key=f5ddd67014eacb646e88e06bb8f586ebc5986a0d",
            //         { lead: { ...values }, lead_form_id: 22323 }
            //     )
            //     .then((response) => console.log(response))
            //     .catch((error) => console.error(error));
        },
    });
    return (
        <form className="event-form" onSubmit={formik.handleSubmit}>
            {success ? (
                <div className="event-form__success">
                    <h2 className="event-form__success--header">
                        Thanks for reaching out!
                    </h2>
                </div>
            ) : (
                <>
                    <div className="event-form__field">
                        <label
                            className="event-form__label"
                            htmlFor="first_name"
                        >
                            First Name
                        </label>
                        <input
                            id="first_name"
                            type="text"
                            {...formik.getFieldProps("first_name")}
                        />
                        {formik.touched.first_name &&
                        formik.errors.first_name ? (
                            <div className="event-form__message">
                                {formik.errors.first_name}
                            </div>
                        ) : null}
                    </div>
                    <div className="event-form__field">
                        <label
                            className="event-form__label"
                            htmlFor="last_name"
                        >
                            Last Name
                        </label>
                        <input
                            id="last_name"
                            type="text"
                            {...formik.getFieldProps("last_name")}
                        />
                        {formik.touched.last_name && formik.errors.last_name ? (
                            <div className="event-form__message">
                                {formik.errors.last_name}
                            </div>
                        ) : null}
                    </div>
                    <div className="event-form__field">
                        <label
                            className="event-form__label"
                            htmlFor="email_address"
                        >
                            Email Address
                        </label>
                        <input
                            id="email_address"
                            type="email"
                            {...formik.getFieldProps("email_address")}
                        />
                        {formik.touched.email_address &&
                        formik.errors.email_address ? (
                            <div className="event-form__message">
                                {formik.errors.email_address}
                            </div>
                        ) : null}
                    </div>
                    <div className="event-form__field">
                        <label
                            className="event-form__label"
                            htmlFor="phone_number"
                        >
                            Phone Number
                        </label>
                        <div className="event-form__phone">
                            <input
                                className="event-form__phone--number"
                                id="phone_number"
                                type="text"
                                {...formik.getFieldProps("phone_number")}
                            />
                            <input
                                className="event-form__phone--ext"
                                id="phone_number_extension"
                                type="text"
                                placeholder="Ext."
                                {...formik.getFieldProps(
                                    "phone_number_extension"
                                )}
                            />
                        </div>
                        {formik.touched.phone_number &&
                        formik.errors.phone_number ? (
                            <div className="event-form__message">
                                <span className="event-form__message--phone">
                                    {formik.errors.phone_number}
                                </span>
                                {formik.touched.phone_number_extension &&
                                formik.errors.phone_number_extension
                                    ? formik.errors.phone_number_extension
                                    : null}
                            </div>
                        ) : null}
                    </div>
                    <div className="event-form__field">
                        <label className="event-form__label" htmlFor="company">
                            Company
                        </label>
                        <input
                            id="company"
                            type="text"
                            {...formik.getFieldProps("company")}
                        />
                        {formik.touched.company && formik.errors.company ? (
                            <div className="event-form__message">
                                {formik.errors.company}
                            </div>
                        ) : null}
                    </div>
                    <button className="event-form__button" type="submit">
                        Submit
                    </button>
                </>
            )}
        </form>
    );
};

export default EventForm;
