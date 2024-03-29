package ru.greenfairytail.engine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ru.greenfairytail.engine.models.Product;
import ru.greenfairytail.engine.repositories.ProductRepository;

import java.util.List;


@RestController
@RequestMapping("/api/products")
public class ProductsController {
    @Autowired
    private ProductRepository repository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Product> getAllProduct() {
        return repository.findAll();
    }
//
//    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
//    public Pets getPetById(@PathVariable("id") ObjectId id) {
//        return repository.findBy_id(id);
//    }
//
//    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
//    public void modifyPetById(@PathVariable("id") ObjectId id, @Valid @RequestBody Pets pets) {
//        pets.set_id(id);
//        repository.save(pets);
//    }
//
//    @RequestMapping(value = "/", method = RequestMethod.POST)
//    public Pets createPet(@Valid @RequestBody Pets pets) {
//        pets.set_id(ObjectId.get());
//        repository.save(pets);
//        return pets;
//    }
//
//    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
//    public void deletePet(@PathVariable ObjectId id) {
//        repository.delete(repository.findBy_id(id));
//    }
}
