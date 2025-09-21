package com.uflipage.uflipage.repository;

import com.uflipage.uflipage.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByChapterId(Long chapterId);

    List<Comment> findByUserId(Long userId);
}
