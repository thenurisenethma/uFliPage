package com.uflipage.uflipage.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;


    private LocalDate publishedDate;


    @ManyToMany
    private List<User> authors;


    public Long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDate getPublishedDate() { return publishedDate; }
    public void setPublishedDate(LocalDate publishedDate) { this.publishedDate = publishedDate; }

    public List<User> getAuthors() { return authors; }
    public void setAuthors(List<User> authors) { this.authors = authors; }
}
