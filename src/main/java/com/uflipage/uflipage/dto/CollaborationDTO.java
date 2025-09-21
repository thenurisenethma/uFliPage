package com.uflipage.uflipage.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CollaborationDTO {
    private Long id;
    private Long bookId;
    private Long authorId;
}
