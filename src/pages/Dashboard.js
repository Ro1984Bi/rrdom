import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }


    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}