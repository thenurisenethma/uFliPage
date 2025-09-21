package com.uflipage.uflipage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookDTO {
    private Long id;
    private String title;
    private String author;
    private String description;
    private String content;
    private String coverImage;
    private String category;
    private String publishedDate;
    private String readTime;
}
