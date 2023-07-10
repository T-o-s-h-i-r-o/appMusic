import { Routes, Route } from "react-router-dom";
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Registration } from './pages/registration';
import { MyTracks } from './pages/my-tracks';
import { Collections } from './pages/collections';
import { NotFound } from './pages/not-found';
// import { ProtectedRoute } from './pages/protected-route';

export const AppRoutes = ({ user }) => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/my-tracks" element={<MyTracks />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}