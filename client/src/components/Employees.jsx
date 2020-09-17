import React, { useState, useEffect } from "react";

const Employees = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setEmployees(res);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>The Office</h1>
        <ul>
          {employees.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Employees;
