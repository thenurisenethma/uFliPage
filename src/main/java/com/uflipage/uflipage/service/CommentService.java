package com.uflipage.uflipage.service;

import com.uflipage.uflipage.dto.CommentCreateDTO;
import com.uflipage.uflipage.entity.Comment;
import com.uflipage.uflipage.repository.ChapterRepository;
import com.uflipage.uflipage.repository.CommentRepository;
import com.uflipage.uflipage.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final ChapterRepository chapterRepository;

    public CommentService(CommentRepository commentRepository,
                          UserRepository userRepository,
                          ChapterRepository chapterRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.chapterRepository = chapterRepository;
    }

    // Add a comment
    public Comment addComment(CommentCreateDTO dto) {
        var user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        var chapter = chapterRepository.findById(dto.getChapterId())
                .orElseThrow(() -> new RuntimeException("Chapter not found"));

        Comment comment = new Comment();
        comment.setContent(dto.getContent());
        comment.setUser(user);
        comment.setChapter(chapter);

        return commentRepository.save(comment);
    }

    // Return all comments
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    // Return comments by chapter
    public List<Comment> getCommentsByChapter(Long chapterId) {
        return commentRepository.findByChapterId(chapterId);
    }


    public List<Comment> getCommentsByUser(Long userId) {
        return commentRepository.findByUserId(userId);
    }

    public Comment getCommentById(Long id) {
        return commentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Comment not found"));
    }


}
