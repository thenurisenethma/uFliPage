package com.uflipage.uflipage.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommentCreateDTO {
    private String content;
    private Long userId;
    private Long chapterId;

}
