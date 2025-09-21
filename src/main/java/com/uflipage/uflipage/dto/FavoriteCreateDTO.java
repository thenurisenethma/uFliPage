package com.uflipage.uflipage.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteCreateDTO {
    private Long userId;
    private Long bookId;
}
