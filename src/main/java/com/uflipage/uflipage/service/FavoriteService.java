package com.uflipage.uflipage.service;

import com.uflipage.uflipage.dto.FavoriteCreateDTO;
import com.uflipage.uflipage.entity.Favorite;
import com.uflipage.uflipage.repository.FavoriteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;

    public FavoriteService(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }

    public Favorite addFavorite(FavoriteCreateDTO dto) {
        Favorite favorite = new Favorite();
        favorite.setUserId(dto.getUserId());
        favorite.setBookId(dto.getBookId());
        return favoriteRepository.save(favorite);
    }

    public void removeFavorite(Long userId, Long bookId) {
        favoriteRepository.deleteByUserIdAndBookId(userId, bookId);
    }

    public List<Favorite> getFavoritesByUser(Long userId) {
        return favoriteRepository.findByUserId(userId);
    }

    public List<Favorite> getFavoritesByBook(Long bookId) {
        return favoriteRepository.findByBookId(bookId);
    }

    public List<Favorite> getAllFavorites() {
        return favoriteRepository.findAll();
    }
}
