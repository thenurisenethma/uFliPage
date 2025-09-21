package com.uflipage.uflipage.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "collaborations")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Collaboration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long bookId;
    private Long authorId;
}
