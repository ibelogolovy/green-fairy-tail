package ru.greenfairytail.engine.repositories;

import ru.greenfairytail.engine.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
}