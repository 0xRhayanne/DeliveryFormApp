import React, { useState } from "react";

function DeliveryForm() {
  const [form, setForm] = useState({
    customerName: "",
    address: "",
    phone: "",
    notes: "",
    items: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...form, items: form.items.split(",") });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="customerName" placeholder="Customer Name" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="notes" placeholder="Notes" onChange={handleChange} />
      <input name="items" placeholder="Items (comma separated)" onChange={handleChange} />
      <button type="submit">Save Form</button>
    </form>
  );
}

export default DeliveryForm;
