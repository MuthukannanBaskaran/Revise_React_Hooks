import { useNavigate } from "react-router-dom";

export default function GoHome() {
    const navigate = useNavigate();
    const goHome = () => navigate('/');

    return (
        <div>
            <button className="btn-home" onClick={goHome}>Home</button>
        </div>
    )
}