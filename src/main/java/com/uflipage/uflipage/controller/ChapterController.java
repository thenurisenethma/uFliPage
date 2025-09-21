package com.uflipage.uflipage.controller;

import com.uflipage.uflipage.entity.Chapter;
import com.uflipage.uflipage.service.ChapterService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chapters")
public class ChapterController {
    private final ChapterService chapterService;

    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @GetMapping
    public List<Chapter> getAllChapters() {
        return chapterService.getAllChapters();
    }

    @PostMapping
    public Chapter createChapter(@RequestBody Chapter chapter) {
        return chapterService.createChapter(chapter);
    }

    @GetMapping("/{id}")
    public Chapter getChapterById(@PathVariable Long id) {
        return chapterService.getChapterById(id);
    }

    @PutMapping("/{id}")
    public Chapter updateChapter(@PathVariable Long id, @RequestBody Chapter chapter) {
        return chapterService.updateChapter(id, chapter);
    }

    @DeleteMapping("/{id}")
    public void deleteChapter(@PathVariable Long id) {
        chapterService.deleteChapter(id);
    }
}

