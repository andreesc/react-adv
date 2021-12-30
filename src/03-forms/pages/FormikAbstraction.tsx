import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {
 
    return (
        <div>
            <h1>Formik Abstraction Tutorial</h1>

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
                            <MyTextInput 
                                label="First Name"
                                name="firstName"
                                placeholder="First name"
                            />
                            <MyTextInput 
                                label="Last Name"
                                name="lastName"
                                placeholder="Last Name"
                            />
                            <MyTextInput 
                                label="Email"
                                name="email"
                                placeholder="Email address"
                                type="email"
                            />
                            <MySelect 
                                label="Job Type" 
                                name="jobType"
                            > 
                                <option value="">Pick one</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelect>
                            <MyCheckbox label="Términos" name="terms" />
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
                
            </Formik>

        </div>
    )
}
