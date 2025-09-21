package com.uflipage.uflipage.repository;

import com.uflipage.uflipage.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    List<Favorite> findByUserId(Long userId);
    List<Favorite> findByBookId(Long bookId);
    void deleteByUserIdAndBookId(Long userId, Long bookId);
}
