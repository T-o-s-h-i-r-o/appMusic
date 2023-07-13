import { Routes, Route } from "react-router-dom";
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Registration } from './pages/registration';
import { Selection } from './pages/selection';
// import { MyTracks } from './pages/my-tracks';
// import { Collections } from './pages/collections';
import { NotFound } from './pages/not-found';
import { ProtectedRoute } from './pages/protected-route';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute><Main /></ProtectedRoute>} />
            <Route path="/selection/:id" element={<ProtectedRoute><Selection /></ProtectedRoute>} />
            {/* <Route path="/my-tracks" element={<ProtectedRoute><MyTracks /></ProtectedRoute>} /> */}
            {/* <Route path="/collections" element={<ProtectedRoute><Collections /></ProtectedRoute>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}