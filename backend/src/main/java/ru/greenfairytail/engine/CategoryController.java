package ru.greenfairytail.engine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ru.greenfairytail.engine.models.Category;
import ru.greenfairytail.engine.models.Product;
import ru.greenfairytail.engine.repositories.CategoryRepository;
import ru.greenfairytail.engine.repositories.ProductRepository;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    private CategoryRepository repository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Category> getAllCategories () {
        return repository.findAll();
    }
}
