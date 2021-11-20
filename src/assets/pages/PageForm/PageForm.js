import React from "react";
import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import DatePicker from "react-datepicker";
import * as Yup from 'yup';

import "./PageForm.scss"

const PageForm = () => {
    const DatePickerField = ({ ...props }) => {
        const { setFieldValue } = useFormikContext();
        const [field] = useField(props);
        return (
            <DatePicker
                {...field}
                {...props}
                className="form-control"
                dateFormat="d/M/Y"
                selected={(field.value && new Date(field.value)) || null}
                onChange={val => {
                    setFieldValue(field.name, val);
                }}
            />
        );
    };

    const SignupSchema = Yup.object().shape({

        name: Yup.string()
            .min(2, 'Must have at least 2 characters')
            .max(50, 'Must have a maximun of 50 characters')
            .matches(/[A-Za-záéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ]+/, "Only characters are allowed")
            .required('Name is required'),

        email: Yup.string().email('Invalid email').required('Email is required'),

        date: Yup.date()
            .min(new Date(), 'Date must be later than today.')
            .required('Date is required'),

    });

    return (
        <div className="form">
            <div className="form-container">
                <h1 className="page-title page-title__form">Ticket Reservation</h1>
                <Formik
                    initialValues={
                        {
                            name: '',
                            email: '',
                            tickets: '1',
                            date: new Date()
                        }
                    }
                    validationSchema={SignupSchema}

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 1000);
                    }}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Name*</label>
                                <Field name="name" className="form-control" type="text" />
                                {errors.name && touched.name ? (<div className="form-error">{errors.name}</div>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address*</label>
                                <Field name="email" className="form-control" type="email" />
                                {errors.email && touched.email ? (<div className="form-error">{errors.email}</div>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="tickets">Number of Tickets:</label>
                                <Field as="select" name="tickets">
                                    {[...Array(10).keys()].map((el) => (
                                        <option key={`opt-${el}`} value={el + 1}>{el + 1}</option>
                                    ))}
                                </Field>
                                {errors.tickets && touched.tickets ? (<div className="form-error">{errors.tickets}</div>) : null}
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Date of reservation:*</label>
                                <DatePickerField name="date" />
                                {errors.date ? (<div className="form-error">{errors.date}</div>) : null}
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary float-right form-submit-btn" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default PageForm;