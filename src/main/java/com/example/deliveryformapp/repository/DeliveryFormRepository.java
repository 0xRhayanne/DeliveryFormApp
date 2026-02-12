package com.example.deliveryformapp.repository;

import com.example.deliveryformapp.model.DeliveryForm;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeliveryFormRepository extends MongoRepository<DeliveryForm, String> {
    // You can add custom queries later, e.g.:
    // List<DeliveryForm> findByStatus(String status);
}
