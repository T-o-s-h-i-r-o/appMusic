import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    
    const DeleteToken = () => {
        localStorage.removeItem('token');
    }
    
    function login() {
        localStorage.setItem("token", 'token');
        navigate('/');
    }

    return (
        <>
        <DeleteToken />
        <div>
            <h1>Login</h1>
            <button onClick={login}>Войти</button>
        </div>
        </>
    )
}