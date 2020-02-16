package ru.greenfairytail.engine.repositories;

import java.util.List;

import ru.greenfairytail.engine.models.Product;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface ProductRepository extends MongoRepository<Product, String> {
    public Product findByName(String name);
    public List<Product> findByCategory(Integer category);
}
