package ru.greenfairytail.engine.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {
    @Id
    private ObjectId _id;
    private String id;

    public Product(String name, String title, Integer category, Double price, String coverImage) {
        this.category = category;
        this.name = name;
        this.price = price;
        this.title = title;
        this.coverImage = coverImage;
    }

    @Indexed
    public String name;

    private String title;

    private Integer category;

    private Double price;



    private String coverImage;

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Integer getCategory() {
        return category;
    }

    public Double getPrice() {
        return price;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCategory(Integer category) {
        this.category = category;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return String.format(
                "Product[id=%s, name='%s', category='%s']",
                id, name, category);
    }

}
