package ru.greenfairytail.engine.repositories;

import ru.greenfairytail.engine.models.Category;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface CategoryRepository extends MongoRepository<Category, String> {
    public Category findByName(String name);
}
