//book data
const mockBooks = [
    {
        id: '1',
        title: 'ABC',
        author: 'Natalie Thompson ',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
        
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        
        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
        
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
        
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
        
        Curabitur ullamcorper ultricies nisi. 
        
        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
        
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. 
        
        Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`,

        coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcMEN2YRHIhYfb9-AQfXgLH7-0jlGhY40AAF9_s2Tl9oQTqFQyQgrYylS5P2J4ufTwoM&usqp=CAU',
        category: 'Sci-Fi',
        publishedDate: '2025-08-15',
        readTime: '15 min',
    },
    {
        id: '2',
        title: 'DEF',
        author: 'Elena Doe',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
        
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        
        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
        
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
        
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
        
        Curabitur ullamcorper ultricies nisi. 
        
        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
        
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. 
        
        Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`,

        coverImage: '/assets/book2.jpg',
        category: 'Fiction',
        publishedDate: '2024-02-10',
        readTime: '12 min',
    },
    {
        id: '3',
        title: 'GHI',
        author: 'James Thompson',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        
        Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
        
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        
        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
        
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
        
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
        
        Curabitur ullamcorper ultricies nisi. 
        
        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
        
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. 
        
        Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`,
        coverImage: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/300261004/original/b57ba15f49b23a8ed815ad96bf1ac764019dca80/create-a-custom-indie-album-cover-masterpieces.jpg',
        category: 'Mystery',
        publishedDate: '2024-01-28',
        readTime: '18 min',
    },
    {
        id: '4',
        title: 'XYZ',
        author: 'Michael Doe',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
        
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        
        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
        
        Aenean vulputate eleifend tellus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        
        Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        
        Nulla consequat massa quis enim. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
        
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
        
        Curabitur ullamcorper ultricies nisi. 
        
        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
        
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. 
        
        Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`,
        coverImage: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-desert-indie-album-song-cover-art-design-template-a82f1df5f64521d0a382c4d7f1bc491a_screen.jpg?ts=1738367533',
        category: 'Non-Fiction',
        publishedDate: '2025-02-05',
        readTime: '20 min',
    },
    {
        id: '5',
        title: 'PQR',
        author: 'Jane Potts',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
        
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        
        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
        
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
        
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
        
        Curabitur ullamcorper ultricies nisi.
        
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
        
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        
        Nulla consequat massa quis enim. 
        
        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
        
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. 
        
        Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`,

        coverImage: 'https://i.etsystatic.com/48597516/r/il/0b6a5f/5610799993/il_570xN.5610799993_s6p1.jpg',
        category: 'Fantasy',
        publishedDate: '2025-02-20',
        readTime: '16 min',
    },
];

// Application state
let currentUser = null;
let allBooks = [];

async function loadBooks() {
    const response = await fetch("http://localhost:8080/api/books");
    const books = await response.json();
    console.log(books);
    renderBooks(books);
}

loadBooks();


loadBooks();
let currentBook = null;
let readerSettings = {
    fontSize: 18,
    isDarkMode: false,
    progress: 0
};