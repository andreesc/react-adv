import {Formik, Form} from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

import data from '../data/custom-form.json';

const initialValues: {[x:string]: any} = {}
const requiredFields: {[x:string]: any} = {}

for (const input of data) {
    initialValues[input.name] = input.value;
    if (!input.validations) continue; 

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type==="required") {
            schema = schema.required("This field is required.");
        }

        if (rule.type==="min") {
            schema = schema.min((rule as any).value || 1, `El mínimo es de ${rule.value} caracteres.`);
        }

        if (rule.type==="email") {
            schema = schema.email('El formato del correo es inválido.');
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validationSchema}
            >
                {
                    (formik) => (
                        <Form noValidate>
                            {data.map(({type, name, placeholder, label, options}) => {

                                if (type==="input" || type==="password" || type==="email") {
                                    return <MyTextInput
                                        key={name}
                                        type={(type as any)}
                                        label={label}
                                        name={name}
                                        placeholder={placeholder}
                                    />
                                } else if (type==="select") {
                                    return (
                                        <MySelect
                                            key={name}
                                            label={label}
                                            name={name}
                                        > 
                                            <option value="">Select an option</option>
                                            { 
                                                options?.map(option => {
                                                    return <option key={option.id} value={option.id}>{option.label}</option>
                                                })
                                            }
                                        </MySelect>
                                    )
                                }

                                return <span>Type: {type} not be supported</span>
                                
                            })}
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
