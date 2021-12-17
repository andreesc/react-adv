import { BrowserRouter, Navigate, Routes, Route, NavLink} from "react-router-dom"
import logo from "../logo.svg";
import { Suspense } from "react";

import { routes } from "./routes";

export const Navigation = () => {
    return (
        <Suspense fallback={<h1>Cargando...</h1>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="Logo" />
                        <ul>
                            {
                                routes.map(route => {
                                    return (
                                        <li key={route.to}>
                                            <NavLink 
                                                to={route.to} 
                                                className={ ({isActive}) => isActive ? 'nav-active' : '' }>
                                                    {route.name}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(route => {
                                return (
                                    <Route 
                                        key={route.path}
                                        path={route.path} 
                                        element={<route.Component />} 
                                    />
                                )
                            })
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
