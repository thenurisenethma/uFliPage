package com.uflipage.uflipage.controller;

import com.uflipage.uflipage.dto.FavoriteCreateDTO;
import com.uflipage.uflipage.dto.FavoriteDTO;
import com.uflipage.uflipage.entity.Favorite;
import com.uflipage.uflipage.service.FavoriteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    private FavoriteDTO toDTO(Favorite f) {
        return new FavoriteDTO(f.getId(), f.getUserId(), f.getBookId());
    }

    @PostMapping
    public FavoriteDTO addFavorite(@RequestBody FavoriteCreateDTO dto) {
        Favorite saved = favoriteService.addFavorite(dto);
        return toDTO(saved);
    }

    // ✅ this is missing in your case
    @GetMapping
    public List<FavoriteDTO> getAllFavorites() {
        return favoriteService.getAllFavorites()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/user/{userId}")
    public List<FavoriteDTO> getByUser(@PathVariable Long userId) {
        return favoriteService.getFavoritesByUser(userId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/book/{bookId}")
    public List<FavoriteDTO> getByBook(@PathVariable Long bookId) {
        return favoriteService.getFavoritesByBook(bookId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @DeleteMapping("/{userId}/{bookId}")
    public void removeFavorite(@PathVariable Long userId, @PathVariable Long bookId) {
        favoriteService.removeFavorite(userId, bookId);
    }
}
