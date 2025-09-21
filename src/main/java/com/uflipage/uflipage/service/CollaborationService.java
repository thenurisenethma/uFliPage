package com.uflipage.uflipage.service;

import com.uflipage.uflipage.dto.CollaborationCreateDTO;
import com.uflipage.uflipage.entity.Collaboration;
import com.uflipage.uflipage.repository.CollaborationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollaborationService {

    private final CollaborationRepository collaborationRepository;

    public CollaborationService(CollaborationRepository collaborationRepository) {
        this.collaborationRepository = collaborationRepository;
    }

    public Collaboration addCollaboration(CollaborationCreateDTO dto) {
        Collaboration collaboration = new Collaboration();
        collaboration.setBookId(dto.getBookId());
        collaboration.setAuthorId(dto.getAuthorId());
        return collaborationRepository.save(collaboration);
    }

    public List<Collaboration> getAllCollaborations() {
        return collaborationRepository.findAll();
    }

    public List<Collaboration> getByBookId(Long bookId) {
        return collaborationRepository.findByBookId(bookId);
    }

    public List<Collaboration> getByAuthorId(Long authorId) {
        return collaborationRepository.findByAuthorId(authorId);
    }
}
