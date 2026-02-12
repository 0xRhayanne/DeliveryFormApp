package com.example.deliveryformapp.controller;

import com.example.deliveryformapp.model.DeliveryForm;
import com.example.deliveryformapp.repository.DeliveryFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/forms")
public class DeliveryFormController {

    @Autowired
    private DeliveryFormRepository repository;

    // 1. Create a new form
    @PostMapping
    public ResponseEntity<DeliveryForm> createForm(@Valid @RequestBody DeliveryForm form) {
        DeliveryForm saved = repository.save(form);
        return ResponseEntity.ok(saved);
    }

    // 2. Get all forms
    @GetMapping
    public List<DeliveryForm> getAllForms() {
        return repository.findAll();
    }

    // 3. Get a single form by ID
    @GetMapping("/{id}")
    public ResponseEntity<DeliveryForm> getFormById(@PathVariable String id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 4. Update a form
    @PutMapping("/{id}")
    public ResponseEntity<DeliveryForm> updateForm(@PathVariable String id,
                                                   @Valid @RequestBody DeliveryForm updatedForm) {
        return repository.findById(id)
                .map(existing -> {
                    updatedForm.setId(existing.getId());
                    DeliveryForm saved = repository.save(updatedForm);
                    return ResponseEntity.ok(saved);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // 5. Delete a form
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteForm(@PathVariable String id) {
        return repository.findById(id)
                .map(existing -> {
                    repository.delete(existing);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().<Void>build());
    }
}
