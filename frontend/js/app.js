// Main application functionality

// Initialize the application
// Load user from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedUser = localStorage.getItem('bookverse_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForUser();
    }

    renderBooks();
});

document.addEventListener('DOMContentLoaded', function() {
    renderBooks();
    updateUIForUser();

    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Navigation functions
function showHome() {
    hideAllViews();
    document.getElementById('home-view').classList.add('active');
    updateNavButtons('home');
}

function showWriter() {

    if (!currentUser) {
        showAuth();
        return;
    }

    if (currentUser.type !== 'writer') {
        hideAllViews();
        document.getElementById('auth-required-view').classList.add('active');
        updateNavButtons('writer');
        return;
    }

    hideAllViews();
    document.getElementById('writer-view').classList.add('active');
    updateNavButtons('writer');
    updateWriterBooks();
    updateWriterStats();
}

function hideAllViews() {
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.classList.remove('active'));
}

function updateNavButtons(activeView) {
    const homeBtn = document.getElementById('home-btn');
    const writerBtn = document.getElementById('writer-btn');

    // Reset all buttons
    homeBtn.classList.remove('active', 'writer-active');
    writerBtn.classList.remove('active', 'writer-active');

    // Set active button
    if (activeView === 'home') {
        homeBtn.classList.add('active');
    } else if (activeView === 'writer') {
        writerBtn.classList.add('writer-active');
    }
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Handle escape key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
        }
    }
});

// Search functionality (basic implementation)
function searchBooks(query) {
    if (!query.trim()) {
        renderBooks();
        return;
    }

    const filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.description.toLowerCase().includes(query.toLowerCase()) ||
        book.category.toLowerCase().includes(query.toLowerCase())
    );

    const bookGrid = document.getElementById('book-grid');
    bookGrid.innerHTML = '';

    if (filteredBooks.length === 0) {
        bookGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <h3 style="color: #6b7280; margin-bottom: 0.5rem;">No books found</h3>
                <p style="color: #9ca3af;">Try adjusting your search terms</p>
            </div>
        `;
        return;
    }

    filteredBooks.forEach(book => {
        const bookCard = createBookCard(book);
        bookGrid.appendChild(bookCard);
    });
}

// Filter books by category
function filterByCategory(category) {
    if (category === 'all') {
        renderBooks();
        return;
    }

    const filteredBooks = allBooks.filter(book => book.category === category);
    const bookGrid = document.getElementById('book-grid');
    bookGrid.innerHTML = '';

    filteredBooks.forEach(book => {
        const bookCard = createBookCard(book);
        bookGrid.appendChild(bookCard);
    });
}

// Get unique categories
function getCategories() {
    const categories = [...new Set(allBooks.map(book => book.category))];
    return ['all', ...categories.sort()];
}

// Local storage functions
function saveToLocalStorage() {
    localStorage.setItem('bookverse_books', JSON.stringify(allBooks));
    localStorage.setItem('bookverse_user', JSON.stringify(currentUser));
    localStorage.setItem('bookverse_reader_settings', JSON.stringify(readerSettings));
}

function loadFromLocalStorage() {
    const savedBooks = localStorage.getItem('bookverse_books');
    const savedUser = localStorage.getItem('bookverse_user');
    const savedSettings = localStorage.getItem('bookverse_reader_settings');

    if (savedBooks) {
        try {
            allBooks = JSON.parse(savedBooks);
        } catch (e) {
            console.warn('Failed to load saved books');
        }
    }

    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            updateUIForUser();

            if (currentUser.type === 'writer') {
                showWriter();
            }
        } catch (e) {
            console.warn('Failed to load saved user');
        }
    }


    if (savedSettings) {
        try {
            readerSettings = { ...readerSettings, ...JSON.parse(savedSettings) };
        } catch (e) {
            console.warn('Failed to load saved settings');
        }
    }
}

// Auto-save functionality
setInterval(saveToLocalStorage, 30000); // Save every 30 seconds

// Save on page unload
window.addEventListener('beforeunload', saveToLocalStorage);

// Load saved data on startup
loadFromLocalStorage();