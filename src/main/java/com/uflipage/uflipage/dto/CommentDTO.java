package com.uflipage.uflipage.dto;
import lombok.*;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CommentDTO {
    private Long id;
    private String content;
    private Long userId;
    private String userName;
    private Long chapterId;


}
