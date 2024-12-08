// Данные о играх (в реальном проекте загружались бы с сервера)
const gamesData = [
    
    {
        id: 1,
        title: "Cyberpunk 2077",
        price: 1500,
        image: "https://vkplay.ru/hotbox/content_files/news/2019/09/09/dfa0aa25bb3e4142b16cd892bd96a9da.jpg",
        genre: "action",
        popularity: 50
    },

    {
        id: 2,
        title: "God of War",
        price: 2000,
        image: "https://avatars.mds.yandex.net/i?id=2cdab43cd240a91edb68e7841c067f8e_l-4726647-images-thumbs&n=13",
        genre: "action",
        popularity: 60
    },

    {
        id: 3,
        title: "Elden Ring",
        price: 2500,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg?w=5000&thumb=false",
        genre: "action",
        popularity: 70
    },
    
    {
        id: 4,
        title: "Witcher 3: Wild Hunt",
        price: 3000,
        image: "https://assets.vg247.com/current/2014/06/witcher_3_wild_hunt.jpg",
        genre: "action",
        popularity: 80
    },

    {
        id: 5,
        title: "Red Dead Redemption 2",
        price: 3500,
        image: "https://avatars.mds.yandex.net/i?id=66e8327553109d674496b5259f538772_l-7084983-images-thumbs&n=13",
        genre: "action",
        popularity: 90
    },

    {
        id: 6,
        title: "Resident Evil 9",
        price: 4000,
        image: "https://img.ixbt.site/live/topics/preview/00/04/41/97/4090e07c6d.jpg",
        genre: "action",
        popularity: 100
    },

    {
        id: 7,
        title: "Alan Wake 2",
        price: 1500,
        image: "https://pic.rutubelist.ru/video/c2/d9/c2d94372c37199afb8bbbb74399d052b.jpg",
        genre: "horror",
        popularity: 50
    },

    {
        id: 8,
        title: "Bloodborne",
        price: 2000,
        image: "https://avatars.mds.yandex.net/i?id=4f65fd498e7dfa22e66c5f60ae60fbaa_l-8519693-images-thumbs&n=13",
        genre: "horror",
        popularity: 60
    },

    {
        id: 9,
        title: "Soma",
        price: 2500,
        image: "https://steamuserimages-a.akamaihd.net/ugc/198554277139345889/BAA07D0C1B840B97C994C6DE3B239C6280CF466F/",
        genre: "horror",
        popularity: 70
    },

    {
        id: 10,
        title: "Layers of Fear",
        price: 3000,
        image: "https://steamuserimages-a.akamaihd.net/ugc/94974190740123742/D7639738DD8B72A96FCEAE10066036F14037985E/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
        genre: "horror",
        popularity: 80
    },

    {
        id: 11,
        title: "Left 4 Dead 2",
        price: 3500,
        image: "https://steamuserimages-a.akamaihd.net/ugc/574527129692229663/B953EFCC6650877A9C927063738B1E51E9B0290C/?imw=512&amp;imh=409&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
        genre: "horror",
        popularity: 90
    },

    {
        id: 12,
        title: "Outlast 2",
        price: 4000,
        image: "https://overclockers.ru/st/images/preview/Zmlh7TXdHNaYezqh.jpg",
        genre: "horror",
        popularity: 100
    },

    {
        id: 13,
        title: "The Crew 2",
        price: 1500,
        image: "https://i.ytimg.com/vi/2sz7GDqmfIk/maxresdefault.jpg",
        genre: "races",
        popularity: 50
    },

    {
        id: 14,
        title: "FlatOut 2",
        price: 2000,
        image: "https://cdn1.epicgames.com/spt-assets/c723c10fb4a34df5b505bd97c85be76b/flatout-2-offer-ox2un.png",
        genre: "races",
        popularity: 60
    },

    {
        id: 15,
        title: "Wreckfest",
        price: 2500,
        image: "https://pic.rutubelist.ru/video/4d/ec/4dec4d509d2ce01485a339dfdf11a87d.jpg",
        genre: "races",
        popularity: 70
    },

    {
        id: 16,
        title: "V-Rally 4",
        price: 3000,
        image: "https://c1.neweggimages.com/BizIntell/item/74/756/74-756-053/1.jpg",
        genre: "races",
        popularity: 80
    },

    {
        id: 17,
        title: "NFS: Underground",
        price: 3500,
        image: "https://i.pinimg.com/736x/23/fb/c7/23fbc706bee0ea09f06f045992131d57.jpg",
        genre: "races",
        popularity: 90
    },

    {
        id: 18,
        title: "Forza Horizon 5",
        price: 4000,
        image: "https://digiseller.mycdn.ink/preview/975862/p1_3234942_f0c96f08.jpg",
        genre: "races",
        popularity: 100
    },

    {
        id: 19,
        title: "Frostpunk",
        price: 1500,
        image: "https://i.ytimg.com/vi/9NfALKLrnGw/maxresdefault.jpg",
        genre: "simulator",
        popularity: 50
    },

    {
        id: 20,
        title: "The Sims 4",
        price: 2000,
        image: "https://avatars.mds.yandex.net/i?id=d1468ceb4602219a4e8d3967eec0d480_l-5348428-images-thumbs&n=13",
        genre: "simulator",
        popularity: 60
    },

    {
        id: 21,
        title: "SnowRunner",
        price: 2500,
        image: "https://avatars.mds.yandex.net/i?id=f88ce7860d0af7932bc0ac1fe28b14ba_l-4628448-images-thumbs&n=13",
        genre: "simulator",
        popularity: 70
    },

    {
        id: 22,
        title: "House Flipper",
        price: 3000,
        image: "https://i.playground.ru/e/aBnNsTMxC5HHZBUBzWR87A.jpeg",
        genre: "simulator",
        popularity: 80
    },

    {
        id: 23,
        title: "Planet Zoo",
        price: 3500,
        image: "https://i.playground.ru/p/pQg7-Zw7cN2xbByVidjH0g.jpeg",
        genre: "simulator",
        popularity: 90
    },

    {
        id: 24,
        title: "Subnautica",
        price: 4000,
        image: "https://images.stopgame.ru/blogs/2019/07/27/wuPtTyy.jpg",
        genre: "simulator",
        popularity: 100
    },

    
];

let currentFilters = {
    genres: [],
    minPrice: 0,
    maxPrice: 5000,
    searchQuery: '',
    sortBy: 'popular'
};

//фильтрация
function displayGames() {
    let filteredGames = gamesData.filter(game => {
        const matchesGenre = currentFilters.genres.length === 0 || 
                           currentFilters.genres.includes(game.genre);
        const matchesPrice = game.price >= currentFilters.minPrice && 
                           game.price <= currentFilters.maxPrice;
        const matchesSearch = game.title.toLowerCase()
                            .includes(currentFilters.searchQuery.toLowerCase());
        
        return matchesGenre && matchesPrice && matchesSearch;
    });

    // Сортировка
    switch(currentFilters.sortBy) {
        case 'price-asc':
            filteredGames.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredGames.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredGames.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'popular':
            filteredGames.sort((a, b) => b.popularity - a.popularity);
            break;
    }

    const gamesGrid = document.querySelector('.games-grid');
    gamesGrid.innerHTML = '';
    
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="genre">${game.genre}</p>
                <p class="price">${game.price}₽</p>
                <button class="cart-button" onclick="addToCart(${game.id})">В корзину</button>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Обработчики событий
document.getElementById('apply-filters').addEventListener('click', () => {
    currentFilters.genres = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                                .map(cb => cb.value);
    currentFilters.minPrice = parseInt(document.getElementById('min-price').value) || 0;
    currentFilters.maxPrice = parseInt(document.getElementById('max-price').value) || 5000;
    displayGames();
});

document.querySelector('.search-bar button').addEventListener('click', () => {
    const searchInput = document.querySelector('.search-bar input');
    currentFilters.searchQuery = searchInput.value;
    displayGames();
});

document.getElementById('sort-select').addEventListener('change', (e) => {
    currentFilters.sortBy = e.target.value;
    displayGames();
});

document.addEventListener('DOMContentLoaded', () => {
    displayGames();
    updateCartCount();
});


function addToCart(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({
        id: game.id,
        title: game.title,
        price: game.price,
        image: game.image
    });
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCount();
    
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Добавлено!';
    button.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
    }, 1500);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}