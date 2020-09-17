const express = require("express");
const app = express();

app.get("/api/employees", (req, res) => {
  const employees = [
    { id: 1, firstName: "Michael", lastName: "Scott" },
    { id: 2, firstName: "Dwight", lastName: "Schrute" },
    { id: 3, firstName: "Jim", lastName: "Halpert" },
    { id: 4, firstName: "Pam", lastName: "Beesly" },
    { id: 5, firstName: "Andy", lastName: "Bernard" },
  ];

  res.json(employees);
});

const PORT = 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
