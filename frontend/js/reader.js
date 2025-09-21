// Book reader functionality

function openBook(book) {
    currentBook = book;
    readerSettings.progress = 0;

    // Update reader content
    document.getElementById('reader-title').textContent = book.title;
    document.getElementsByClassName('book-title').textContent = book.title;
    document.getElementById('book-author').textContent = book.author;
    document.getElementById('book-date').textContent = book.publishedDate;
    document.getElementById('book-time').textContent = book.readTime;

    // Render book content
    const bookText = document.getElementById('book-text');
    bookText.innerHTML = '';

    const paragraphs = book.content.split('\n\n');
    paragraphs.forEach(paragraph => {
        if (paragraph.trim()) {
            const p = document.createElement('p');
            p.textContent = paragraph.trim();
            bookText.appendChild(p);
        }
    });

    // Show reader view
    showReader();

    // Reset scroll position
    const readerContent = document.getElementById('reader-content');
    readerContent.scrollTop = 0;

    // Apply current settings
    updateReaderFontSize();
    if (readerSettings.isDarkMode) {
        document.getElementById('reader-view').classList.add('dark');
    }
}

function closeReader() {
    showHome();
    currentBook = null;
}

function showReader() {
    hideAllViews();
    document.getElementById('reader-view').classList.add('active');
}

function increaseFontSize() {
    readerSettings.fontSize = Math.min(24, readerSettings.fontSize + 2);
    updateReaderFontSize();
}

function decreaseFontSize() {
    readerSettings.fontSize = Math.max(14, readerSettings.fontSize - 2);
    updateReaderFontSize();
}

function updateReaderFontSize() {
    const bookText = document.getElementById('book-text');
    bookText.style.fontSize = `${readerSettings.fontSize}px`;
}

function resetProgress() {
    const readerContent = document.getElementById('reader-content');
    readerContent.scrollTop = 0;
    readerSettings.progress = 0;
    updateProgressBar();
}

function toggleDarkMode() {
    readerSettings.isDarkMode = !readerSettings.isDarkMode;
    const readerView = document.getElementById('reader-view');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (readerSettings.isDarkMode) {
        readerView.classList.add('dark');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        readerView.classList.remove('dark');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${readerSettings.progress}%`;
}

// Handle scroll progress tracking
document.getElementById('reader-content').addEventListener('scroll', function(e) {
    const element = e.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight - element.clientHeight;

    if (scrollHeight > 0) {
        readerSettings.progress = (scrollTop / scrollHeight) * 100;
        updateProgressBar();
    }
});

// Keyboard shortcuts for reader
document.addEventListener('keydown', function(e) {
    const readerView = document.getElementById('reader-view');
    if (!readerView.classList.contains('active')) return;

    switch(e.key) {
        case 'Escape':
            closeReader();
            break;
        case '=':
        case '+':
            e.preventDefault();
            increaseFontSize();
            break;
        case '-':
            e.preventDefault();
            decreaseFontSize();
            break;
        case 'd':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                toggleDarkMode();
            }
            break;
        case 'r':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                resetProgress();
            }
            break;
    }
});