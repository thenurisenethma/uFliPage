package com.uflipage.uflipage.controller;

import com.uflipage.uflipage.entity.Book;
import com.uflipage.uflipage.entity.Chapter;
import com.uflipage.uflipage.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }


    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookService.createBook(book);
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        return bookService.updateBook(id, book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }


    @PostMapping("/{bookId}/chapters")
    public Chapter addChapter(@PathVariable Long bookId, @RequestBody Chapter chapter) {
        return bookService.addChapter(bookId, chapter);
    }

    @GetMapping("/{bookId}/chapters")
    public List<Chapter> getChapters(@PathVariable Long bookId) {
        return bookService.getChapters(bookId);
    }

    @PutMapping("/{bookId}/chapters/{chapterId}")
    public Chapter updateChapter(@PathVariable Long bookId,
                                 @PathVariable Long chapterId,
                                 @RequestBody Chapter chapter) {
        return bookService.updateChapter(bookId, chapterId, chapter);
    }

    @DeleteMapping("/{bookId}/chapters/{chapterId}")
    public void deleteChapter(@PathVariable Long bookId, @PathVariable Long chapterId) {
        bookService.deleteChapter(bookId, chapterId);
    }
}
