// ----------------- GLOBAL VARIABLES -----------------
let allBooks = [];
let currentUser = null;
let readerSettings = { fontSize: 16, isDarkMode: false, progress: 0 };
const API_BASE_URL = 'http://localhost:8080/api'; // adjust if needed
let favoriteBookIds = []; // store user favorites

// ----------------- FETCH BOOKS -----------------
function fetchBooks() {
    const token = localStorage.getItem("token");

    fetch(`${API_BASE_URL}/books`, {
        headers: { "Authorization": "Bearer " + token }
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch books');
            return response.json();
        })
        .then(books => {
            allBooks = books.map(book => ({
                id: book.id,
                title: book.title,
                author: book.author,
                authorId: book.authorId,
                description: book.description,
                content: book.content,
                coverImage: book.coverImage || './assets/beautiful-book-cover-mockup_23-2149152253.jpg',
                category: book.category || 'Uncategorized',
                publishedDate: book.publishedDate || new Date().toLocaleDateString(),
                readTime: book.readTime || `${Math.ceil((book.content.split(/\s+/).length) / 250)} min`
            }));

             fetchFavorites(); // load favorites after books
        })
        .catch(error => {
            console.error(error);
            showNotification('Error fetching books from server');
        });
}

// ----------------- FETCH FAVORITES -----------------
 function fetchFavorites() {
    if (!currentUser) {
        renderBooks();
        return;
    }

    const token = localStorage.getItem("token");

    fetch(`${API_BASE_URL}/users/${currentUser.id}/favorites`, {
        headers: { "Authorization": "Bearer " + token }
    })
        .then(res => res.json())
        .then(favs => {
            favoriteBookIds = favs.map(f => f.id);
            renderBooks();
            if (typeof updateWriterBooks === 'function') updateWriterBooks();
            if (typeof updateWriterStats === 'function') updateWriterStats();
        })
        .catch(() => {
            renderBooks();
        });
}

// ----------------- CREATE BOOK CARD -----------------
function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card');

    const isFavorited = favoriteBookIds.includes(book.id);

    card.innerHTML = `
        <img src="${book.coverImage}" alt="${book.title}" class="book-cover">
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        <p class="book-category">${book.category}</p>
        <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" data-book-id="${book.id}">
            ${isFavorited ? "💔 Unfavorite" : "❤️ Favorite"}
        </button>
    `;

    // Favorite button logic
    const favBtn = card.querySelector('.favorite-btn');
    favBtn.addEventListener("click", async () => {
        const token = localStorage.getItem("token");
        const bookId = favBtn.dataset.bookId;
        const isFav = favBtn.classList.contains("favorited");

        const url = `${API_BASE_URL}/books/${bookId}/favorite`;
        const response = await fetch(url, {
            method: isFav ? "DELETE" : "POST",
            headers: { "Authorization": "Bearer " + token }
        });

        if (response.ok) {
            favBtn.classList.toggle("favorited");
            favBtn.textContent = isFav ? "❤️ Favorite" : "💔 Unfavorite";

            if (isFav) {
                favoriteBookIds = favoriteBookIds.filter(id => id !== book.id);
            } else {
                favoriteBookIds.push(book.id);
            }
        } else {
            showNotification("Failed to update favorite");
        }
    });

    return card;
}
