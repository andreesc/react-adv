import { BrowserRouter, Navigate, Routes, Route, NavLink} from "react-router-dom"
import { DynamicForm, FormikAbstraction, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from "../03-forms/pages";

import logo from "../logo.svg";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register-yup" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-page" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Formik Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={ ({isActive}) => isActive ? 'nav-active' : '' }>Dynamic Form Page</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1>About page</h1>} />
                    <Route path="users" element={<h1>User page</h1>} />
                    <Route path="home" element={<h1>Homepage</h1>}/>
                    <Route path="register" element={<RegisterPage />}/>
                    <Route path="register-yup" element={<FormikYupPage />}/>
                    <Route path="formik-components" element={<FormikComponents />}/>
                    <Route path="formik-abstraction" element={<FormikAbstraction />}/>
                    <Route path="formik-page" element={<RegisterFormikPage />}/>
                    <Route path="dynamic-form" element={<DynamicForm />}/>
                    <Route path="/*" element={<Navigate to="/home" replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
