import {useFormik} from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Es requerido'),
            lastName: Yup.string()
                        .max(10, 'Debe tener 10 o menos caracteres')
                        .required('Es requerido'),
            email: Yup.string()
                    .email('Formato de correo inválido')
                    .required('Es requerido')
        })
    });

    const {
        handleSubmit, errors, touched, getFieldProps
    } = formik;

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    {...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
                <label htmlFor="firstName">Email</label>
                <input 
                    type="email" 
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
