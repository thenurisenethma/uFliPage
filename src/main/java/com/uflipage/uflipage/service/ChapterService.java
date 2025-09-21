package com.uflipage.uflipage.service;

import com.uflipage.uflipage.entity.Chapter;
import com.uflipage.uflipage.repository.ChapterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChapterService {
    private final ChapterRepository chapterRepository;

    public ChapterService(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    public List<Chapter> getAllChapters() {
        return chapterRepository.findAll();
    }

    public Chapter createChapter(Chapter chapter) {
        return chapterRepository.save(chapter);
    }

    public Chapter getChapterById(Long id) {
        return chapterRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Chapter not found with id: " + id));
    }

    public Chapter updateChapter(Long id, Chapter chapterDetails) {
        Chapter chapter = getChapterById(id);
        chapter.setChapterTitle(chapterDetails.getChapterTitle());
        chapter.setAuthor(chapterDetails.getAuthor());
        chapter.setPublishedDate(chapterDetails.getPublishedDate());
        return chapterRepository.save(chapter);
    }

    public void deleteChapter(Long id) {
        Chapter chapter = getChapterById(id);
        chapterRepository.delete(chapter);
    }
}


