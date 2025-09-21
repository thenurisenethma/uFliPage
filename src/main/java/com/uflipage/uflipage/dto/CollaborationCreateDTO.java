package com.uflipage.uflipage.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CollaborationCreateDTO {
    private Long bookId;
    private Long authorId;
}
