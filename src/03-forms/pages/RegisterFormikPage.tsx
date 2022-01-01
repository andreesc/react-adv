import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
          <h1>Register Formik Page</h1>

          <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .min(2, 'Debe tener al menos 2 caracteres')
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Es requerido'),
                        email: Yup.string()
                                .email('Formato de correo inválido')
                                .required('Es requerido'),
                        password1: Yup.string()
                                .min(6, 'Debe tener al menos 6 caracteres.')
                                .required('Es requerido'),
                        password2: Yup.string()
                                .min(6, 'Debe tener al menos 6 caracteres')
                                .required('Es requerido.')
                                .oneOf([Yup.ref('password1'), null], 'Las contraseñas no coinciden')
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field 
                                name="name"
                                type="text"
                            />
                            <ErrorMessage name="name" component="span"/>
                            <label htmlFor="name">Email</label>
                            <Field 
                                name="email"
                                type="email"
                            />
                            <ErrorMessage name="email" component="span"/>
                            <label htmlFor="name">Password</label>
                            <Field 
                                name="password1"
                                type="password"
                            />
                            <ErrorMessage name="password1" component="span"/>
                            <label htmlFor="name">Repeat password</label>
                            <Field 
                                name="password2"
                                type="password"
                            />
                            <ErrorMessage name="password2" component="span"/>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={formik.handleReset}>Reset Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
