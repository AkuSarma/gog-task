import { useState, useEffect } from "react";

const Dashboard = () => {
  const [name, setName] = useState();

  useEffect(() => {
    const storedName = localStorage.getItem("user");
    if (storedName) {
      setName(JSON.parse(storedName)); // Parse the JSON string
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {name ? ( // Check if name is not undefined
        <>
          <p>Welcome, {name.name}</p>
          <p>Email: {name.email}</p>
        </>
      ) : (
        <p>Loading...</p> // Optional: Handle loading state
      )}
    </div>
  );
};

export default Dashboard;
