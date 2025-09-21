package com.uflipage.uflipage.repository;

import com.uflipage.uflipage.entity.Book;
import com.uflipage.uflipage.entity.Collaboration;
import com.uflipage.uflipage.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CollaborationRepository extends JpaRepository<Collaboration, Long> {
    List<Collaboration> findByBookId(Long bookId);
    List<Collaboration> findByAuthorId(Long authorId);
}
