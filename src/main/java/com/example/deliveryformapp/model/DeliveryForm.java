package com.example.deliveryformapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Document(collection = "delivery_forms")
public class DeliveryForm {

    @Id
    private String id;

    @NotBlank
    @Size(max = 100)
    private String customerName;

    @NotBlank
    @Size(max = 200)
    private String address;

    @NotBlank
    @Size(max = 20)
    private String phone;

    @Size(max = 500)
    private String notes;

    private LocalDate deliveryDate;      // e.g., 2025-12-09
    private List<String> items;          // simple list of item names for now
    private String status;               // e.g., "NEW", "CONFIRMED", "DELIVERED"
    private Instant createdAt;           // auto-set when created

    public DeliveryForm() {
        // Set defaults
        this.status = "NEW";
        this.createdAt = Instant.now();
    }

    // Getters and setters

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getDeliveryDate() {
        return deliveryDate;
    }
    public void setDeliveryDate(LocalDate deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    public List<String> getItems() {
        return items;
    }
    public void setItems(List<String> items) {
        this.items = items;
    }

    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
