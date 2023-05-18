import { Outlet } from "react-router-dom";
import { AuthForm } from "../../shared/components/authForm";

export const Auth = ( ) => {
    return (
        <AuthForm>
            <Outlet/>
        </AuthForm>
    );
}