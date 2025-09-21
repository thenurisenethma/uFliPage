package com.uflipage.uflipage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChapterDTO {

        private Long id;
        private String chapterTitle;
        private String author;
        private String content;
        private String publishedDate;
        private String readTime;

}
