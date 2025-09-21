package com.uflipage.uflipage.service;

import com.uflipage.uflipage.entity.Book;
import com.uflipage.uflipage.entity.Chapter;
import com.uflipage.uflipage.repository.BookRepository;
import com.uflipage.uflipage.repository.ChapterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;
    private final ChapterRepository chapterRepository;

    public BookService(BookRepository bookRepository, ChapterRepository chapterRepository) {
        this.bookRepository = bookRepository;
        this.chapterRepository = chapterRepository;
    }


    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getBookById(Long id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found with id: " + id));
    }

    public Book updateBook(Long id, Book bookDetails) {
        Book book = getBookById(id);
        book.setTitle(bookDetails.getTitle());
        book.setDescription(bookDetails.getDescription());
        book.setPublishedDate(bookDetails.getPublishedDate());


        if (bookDetails.getAuthors() != null) {
            book.setAuthors(bookDetails.getAuthors());
        }

        return bookRepository.save(book);
    }

    public void deleteBook(Long id) {
        Book book = getBookById(id);
        bookRepository.delete(book);
    }


    public Chapter addChapter(Long bookId, Chapter chapter) {
        Book book = getBookById(bookId);
        chapter.setBook(book);
        return chapterRepository.save(chapter);
    }

    public List<Chapter> getChapters(Long bookId) {
        if (!bookRepository.existsById(bookId)) {
            throw new RuntimeException("Book not found with id: " + bookId);
        }
        return chapterRepository.findByBookId(bookId);
    }

    public Chapter updateChapter(Long bookId, Long chapterId, Chapter chapterDetails) {
        Book book = getBookById(bookId);

        Chapter chapter = chapterRepository.findById(chapterId)
                .orElseThrow(() -> new RuntimeException("Chapter not found with id: " + chapterId));

        if (!chapter.getBook().getId().equals(book.getId())) {
            throw new RuntimeException("Chapter does not belong to book id: " + bookId);
        }

        chapter.setChapterTitle(chapterDetails.getChapterTitle());
        chapter.setAuthor(chapterDetails.getAuthor());
        chapter.setContent(chapterDetails.getContent());
        chapter.setPublishedDate(chapterDetails.getPublishedDate());
        chapter.setReadTime(chapterDetails.getReadTime());

        return chapterRepository.save(chapter);
    }

    public void deleteChapter(Long bookId, Long chapterId) {
        Book book = getBookById(bookId);

        Chapter chapter = chapterRepository.findById(chapterId)
                .orElseThrow(() -> new RuntimeException("Chapter not found with id: " + chapterId));

        if (!chapter.getBook().getId().equals(book.getId())) {
            throw new RuntimeException("Chapter does not belong to book id: " + bookId);
        }

        chapterRepository.delete(chapter);
    }
}
