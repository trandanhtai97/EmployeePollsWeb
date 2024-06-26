import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="not-found">
        <h1>This page doesn't exist!</h1>
        <button onClick={() => navigate("/")}>Back To Home Page</button>
      </div>
    </>
  );
};

export default NotFound;
