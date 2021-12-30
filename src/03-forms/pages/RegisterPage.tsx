import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

    const {
        formData, onChangeFormValue, reset, isValidEmail,
        name, password1, password2, email
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
          <h1>Register page</h1>

          <form noValidate onSubmit={onSubmit}> 
            <input 
                type="text" 
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChangeFormValue}
                className={`${name.trim().length <= 0 && 'has-error'}}`}
            />
            {name.trim().length <=0 && <span>Este campo es necesario</span>}
            <input 
                type="email" 
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChangeFormValue}
                className={`${!isValidEmail(email) && 'has-error'}`}
            />
            {!isValidEmail(email) && <span>Email no es válido</span>}
            <input 
                type="password" 
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={onChangeFormValue}
            />
            {password1.trim().length <=0 && <span>Este campo es necesario</span>}
            {password1.trim().length <6 && password1.trim().length>0 &&  <span>La contraseña tiene que tener 6 caracteres</span>}
            <input 
                type="password" 
                placeholder="Repeat Password"
                name="password2"
                value={password2}
                onChange={onChangeFormValue}
            />
            {password2.trim().length <=0 && <span>Este campo es necesario</span>}
            {password2.trim().length > 0 && password1 !== password2 && <span>Este campo es necesario</span>}
            <button type="submit">Create</button>
            <button type="button" onClick={reset}>Reset</button>
          </form>  

        </div>
    )
}
