// Book management functionality

function renderBooks() {
    const bookGrid = document.getElementById('book-grid');
    bookGrid.innerHTML = '';

    allBooks.forEach(book => {
        const bookCard = createBookCard(book);
        bookGrid.appendChild(bookCard);
    });
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card fade-in';
    card.onclick = () => openBook(book);

    card.innerHTML = `
        <div class="book-cover">
            <img src="${book.coverImage}" alt="${book.title}" loading="lazy">
            <div class="book-overlay">
                <span class="book-category">${book.category}</span>
            </div>
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <div class="book-meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>${book.author}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <span>${book.readTime}</span>
            </div>
            <p class="book-description">${book.description}</p>
        </div>
    `;

    return card;
}

function showAddBookForm() {
    if (!currentUser || currentUser.type !== 'writer') {
        showNotification('Please sign in as a writer to publish books.');
        return;
    }

    const modal = document.getElementById('add-book-modal');
    modal.classList.add('active');
}

function closeAddBookForm() {
    const modal = document.getElementById('add-book-modal');
    modal.classList.remove('active');
    document.getElementById('add-book-form').reset();
}

// Handle add book form submission
// Handle add book form submission
document.getElementById('add-book-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    if (!currentUser || currentUser.type !== 'writer') {
        showNotification('Please sign in as a writer to publish books.');
        return;
    }

    const title = document.getElementById('input-book-title').value; // use input ID
    const description = document.getElementById('book-description').value;
    const category = document.getElementById('book-category').value;
    const coverImage = document.getElementById('book-cover').value || 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400';
    const content = document.getElementById('book-content').value;

    const wordCount = content.split(' ').length;
    const readTime = `${Math.ceil(wordCount / 250)} min`;

    const newBook = {
        title,
        author: currentUser.name,
        authorId: currentUser.id,
        description,
        content,
        coverImage,
        category,
        publishedDate: new Date().toISOString(),
        readTime
    };

    try {
        const response = await fetch('http://localhost:8080/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        });

        if (!response.ok) throw new Error('Failed to publish book');

        const savedBook = await response.json();
        allBooks.unshift(savedBook);
        renderBooks();
        updateWriterBooks();
        updateWriterStats();
        closeAddBookForm();
        showNotification('Book published successfully!');
    } catch (error) {
        console.error('Publish error:', error);
        showNotification('Failed to publish book. Check console for details.');
    }
});


function updateWriterBooks() {
    if (!currentUser || currentUser.type !== 'writer') return;

    const writerBooksList = document.getElementById('writer-books-list');
    const emptyState = document.getElementById('empty-books');
    const userBooks = allBooks.filter(book => book.authorId === currentUser.id);

    if (userBooks.length === 0) {
        emptyState.style.display = 'block';
        // Remove any existing book items
        const existingItems = writerBooksList.querySelectorAll('.book-item');
        existingItems.forEach(item => item.remove());
    } else {
        emptyState.style.display = 'none';

        // Clear existing items
        const existingItems = writerBooksList.querySelectorAll('.book-item');
        existingItems.forEach(item => item.remove());

        // Add user's books
        userBooks.forEach(book => {
            const bookItem = createWriterBookItem(book);
            writerBooksList.appendChild(bookItem);
        });
    }
}

function createWriterBookItem(book) {
    const item = document.createElement('div');
    item.className = 'book-item slide-in';

    item.innerHTML = `
        <div class="book-item-cover">
            <img src="${book.coverImage}" alt="${book.title}" loading="lazy">
        </div>
        <div class="book-item-info">
            <h3 class="book-item-title">${book.title}</h3>
            <p class="book-item-description">${book.description}</p>
            <div class="book-item-meta">
                <span>Published ${book.publishedDate}</span>
                <span>${book.readTime} read</span>
                <span class="book-item-category">${book.category}</span>
            </div>
        </div>
    `;

    return item;
}

function updateWriterStats() {
    if (!currentUser || currentUser.type !== 'writer') return;

    const userBooks = allBooks.filter(book => book.authorId === currentUser.id);
    const booksCount = userBooks.length;
    const readersCount = booksCount * 127; // Simulated reader count
    const monthlyCount = booksCount * 23; // Simulated monthly growth

    document.getElementById('books-count').textContent = booksCount;
    document.getElementById('readers-count').textContent = readersCount.toLocaleString();
    document.getElementById('monthly-count').textContent = `+${monthlyCount}`;
}