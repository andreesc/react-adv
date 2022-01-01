import {Form, Field, ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
 
    return (
        <div>
            <h1>Formik Components Tutorial</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Es requerido'),
                        lastName: Yup.string()
                                    .max(10, 'Debe tener 10 o menos caracteres')
                                    .required('Es requerido'),
                        email: Yup.string()
                                .email('Formato de correo inválido')
                                .required('Es requerido'),
                        terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar los términos y condiciones'),
                        jobType: Yup.string()
                                .required('Debe seleccionar una profesión')
                                .notOneOf(['it-jr'], 'Esta opción de trabajo no es permitida.')
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field 
                                name="firstName"
                                type="text"
                            />
                            <ErrorMessage name="firstName" component="span"/>

                            <label htmlFor="lastName">Last Name</label>
                            <Field 
                                name="lastName"
                                type="text"
                            />
                            <ErrorMessage name="lastName" component="span"/>


                            <label htmlFor="email">Email</label>
                            <Field 
                                name="email"
                                type="email"
                            />
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select"> 
                                <option value="">Pick one</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>

                            <label>
                                <Field 
                                    name="terms"
                                    type="checkbox"
                                />
                                Terms and Conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>


                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
                
            </Formik>

        </div>
    )
}
