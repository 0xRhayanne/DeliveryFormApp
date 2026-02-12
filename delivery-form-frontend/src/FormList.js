import React, { useState } from "react";

function FormList() {
  // Mocked sample data
  const [forms] = useState([
    { id: 1, customerName: "Alice", address: "123 Main St", status: "Pending" },
    { id: 2, customerName: "Bob", address: "456 Oak Ave", status: "Delivered" },
    { id: 3, customerName: "Charlie", address: "789 Pine Rd", status: "In Progress" },
  ]);

  return (
    <div>
      <h2>All Delivery Forms (Mocked)</h2>
      <ul>
        {forms.map((f) => (
          <li key={f.id}>
            {f.customerName} - {f.address} - {f.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;



/*import React, { useEffect, useState } from "react";

function FormList() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/forms")
      .then((res) => res.json())
      .then((data) => setForms(data));
  }, []);

  return (
    <div>
      <h2>All Delivery Forms</h2>
      <ul>
        {forms.map((f) => (
          <li key={f.id}>
            {f.customerName} - {f.address} - {f.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;
*/