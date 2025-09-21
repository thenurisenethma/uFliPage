package com.uflipage.uflipage.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "chapters")
public class Chapter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String chapterTitle;
    private String author;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String publishedDate;
    private String readTime;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @OneToMany(mappedBy = "chapter", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();
}
