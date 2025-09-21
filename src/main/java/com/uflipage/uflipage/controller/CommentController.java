package com.uflipage.uflipage.controller;

import com.uflipage.uflipage.dto.CommentCreateDTO;
import com.uflipage.uflipage.dto.CommentDTO;
import com.uflipage.uflipage.entity.Comment;
import com.uflipage.uflipage.service.CommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/chapters/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }
    private CommentDTO toDTO(Comment comment) {
        return new CommentDTO(
                comment.getId(),
                comment.getContent(),
                comment.getUser().getId(),
                comment.getUser().getName(),
                comment.getChapter().getId()
        );
    }


    @PostMapping
    public CommentDTO addComment(@RequestBody CommentCreateDTO dto) {
        Comment saved = commentService.addComment(dto);
        return toDTO(saved);
    }


    @GetMapping
    public List<CommentDTO> getAllComments() {
        return commentService.getAllComments()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/chapter/{chapterId}")
    public List<CommentDTO> getCommentsByChapter(@PathVariable Long chapterId) {
        return commentService.getCommentsByChapter(chapterId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/user/{userId}")
    public List<CommentDTO> getCommentsByUser(@PathVariable Long userId) {
        return commentService.getCommentsByUser(userId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public CommentDTO getComment(@PathVariable Long id) {
        return toDTO(commentService.getCommentById(id));
    }

}
