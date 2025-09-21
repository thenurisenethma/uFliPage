package com.uflipage.uflipage.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteDTO {
    private Long id;
    private Long userId;
    private Long bookId;
}
