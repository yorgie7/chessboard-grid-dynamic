import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import ChessBoard from "../pages/Home";
import Stopwatch from "../pages/Stopwatch";

export default function RouterComponent() {
    return (
        <Router>
            <div className="min-h-screen ">
                {/* <nav className="flex space-x-4 mb-6"> */}
                <nav className="sticky top-0 w-full bg-gray-100 p-4 shadow-md flex justify-center space-x-8 z-[9999]">
                    <Link to="/" className="text-lg font-semibold hover:text-gray-300">Chess-Board</Link>
                    <Link to="/stopwatch" className="text-lg font-semibold hover:text-gray-300">Stopwatch</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Navigate to="/chessboard" />} />
                    <Route path="/chessboard" exact strict element={<ChessBoard />} />
                    <Route path="/stopwatch" exact strict element={<Stopwatch />} />
                </Routes>
            </div>
        </Router>
    );
}
