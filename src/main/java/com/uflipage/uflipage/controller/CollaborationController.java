package com.uflipage.uflipage.controller;

import com.uflipage.uflipage.dto.CollaborationCreateDTO;
import com.uflipage.uflipage.dto.CollaborationDTO;
import com.uflipage.uflipage.entity.Collaboration;
import com.uflipage.uflipage.service.CollaborationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/collaborations")
public class CollaborationController {

    private final CollaborationService collaborationService;

    public CollaborationController(CollaborationService collaborationService) {
        this.collaborationService = collaborationService;
    }

    private CollaborationDTO toDTO(Collaboration c) {
        return new CollaborationDTO(c.getId(), c.getBookId(), c.getAuthorId());
    }

    @PostMapping
    public CollaborationDTO addCollaboration(@RequestBody CollaborationCreateDTO dto) {
        Collaboration saved = collaborationService.addCollaboration(dto);
        return toDTO(saved);
    }

    @GetMapping
    public List<CollaborationDTO> getAllCollaborations() {
        return collaborationService.getAllCollaborations()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/book/{bookId}")
    public List<CollaborationDTO> getByBook(@PathVariable Long bookId) {
        return collaborationService.getByBookId(bookId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/author/{authorId}")
    public List<CollaborationDTO> getByAuthor(@PathVariable Long authorId) {
        return collaborationService.getByAuthorId(authorId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}
