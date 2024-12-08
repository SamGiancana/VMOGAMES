document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки "В корзину"
    const cartButtons = document.querySelectorAll('.cart-button');
  
    const cartCount = document.querySelector('.cart-count');
    let itemsInCart = 0;


    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Получаем информацию о игре из карточки
            const gameCard = button.closest('.game-card');
            const gameTitle = gameCard.querySelector('h3').textContent;
            const gamePrice = gameCard.querySelector('.new-price').textContent;
            const gamePriceNumber = parseInt(gameCard.querySelector('.new-price').textContent.replace(/[^0-9]/g, ''), 10);
            const gameImage = gameCard.querySelector('img').src
            console.log(gamePriceNumber)
            
            itemsInCart++;
            cartCount.textContent = itemsInCart;
            
            
            button.textContent = 'Добавлено!';
            button.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                button.textContent = 'В корзину';
                button.style.backgroundColor = '';
            }, 1500);

            saveToCart({
                id: null,
                title: gameTitle,
                price: gamePriceNumber,
                image: gameImage
            });
        });
    });

    function saveToCart(gameData) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(gameData);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function loadCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        itemsInCart = cart.length;
        cartCount.textContent = itemsInCart;
    }

    loadCartCount();
});


function displayFeaturedGames() {
    const featuredContainer = document.querySelector('.featured-games');
    
    featuredGames.forEach(game => {
        const discountedPrice = game.price * (1 - game.discount / 100);
        
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        
        gameCard.innerHTML = `
            <img src="images/${game.image}" alt="${game.title}">
            <div class="game-info">
                <h3>${game.title}</h3>
                <div class="price-info">
                    <span class="original-price">${game.price}₽</span>
                    <span class="discounted-price">${discountedPrice.toFixed(0)}₽</span>
                </div>
                <span class="discount-badge">-${game.discount}%</span>
                <button onclick="addToCart(${game.id})" class="add-to-cart">В корзину</button>
            </div>
        `;
        
        featuredContainer.appendChild(gameCard);
    });
}


function addToCart(gameId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(gameId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    


    const cartIcon = document.querySelector('.cart-count');
    cartIcon.classList.add('bounce');
    setTimeout(() => cartIcon.classList.remove('bounce'), 300);
}


function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}


document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedGames();
    updateCartCount();
});

