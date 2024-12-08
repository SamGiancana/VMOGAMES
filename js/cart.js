let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartContainer = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Корзина пуста</p>';
        document.querySelector('.empty-cart').style.display = 'block';
        document.querySelector('.cart-content').style.display = 'none';
        return;
    } else {
        document.querySelector('.empty-cart').style.display = 'none';
        document.querySelector('.cart-content').style.display = 'grid';
    }

    cartContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.title}</h3>
                <p class="cart-item-price">${item.price}₽</p>
                <button class="remove-from-cart" onclick="removeFromCart(${index})">Удалить</button>
            </div>
        </div>
    `).join('');
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = currentCart.length;
    document.querySelector('.total-items').textContent = currentCart.length;
    document.querySelector('.total-price').textContent = `${summCartData()} ₽`;
    document.querySelector('.final-price').textContent = `${summCartData()} ₽`;
}

// Обработчик оформления заказа
document.querySelector('.checkout-btn').addEventListener('click', () => {
    const emailInput = document.querySelector('.email-input'); 
    const email = emailInput.value.trim();

    if (cart.length === 0) {
        alert('Ваша корзина пуста!');
        return;
    }

    if (!email) {
        alert('Пожалуйста, введите ваш email!');
        return;
    }

    // Отправляем запрос на сервер
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }) 
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Ключ успешно отправлен на ваш email') {
            alert('Заказ успешно оформлен! Ключ отправлен на ваш email.');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
            updateCartCount();
            emailInput.value = '';
        } else {
            alert(`Ошибка: ${data}`);
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке заказа.');
    });
});


document.querySelectorAll('.promo-code button').forEach(button => {
    button.addEventListener('click', () => {
        const promoInput = button.parentElement.querySelector('input'); // Исправлено: переменная должна быть promoInput
        const code = promoInput.value.trim(); // Исправлено: переменная должна быть code
        
        if (code === 'vmogamess') { // Исправлено: проверка должна быть на code, а не promoCode
            const totalPriceElem = document.querySelector('.total-price');
            let total = summCartData();
            let discount = total * 0.10;
            let finalPrice = total - discount;
            document.querySelector('.total-discount').textContent = `${discount} ₽`;
            document.querySelector('.final-price').textContent = `${finalPrice} ₽`;
            alert('Промокод применен! Вы получили скидку 10%.');
        } else {
            alert('Промокод не найден');
        }
        promoInput.value = ''; // Исправлено: переменная должна быть promoInput
    });
});

        
        if (promoCode === 'vmogamess') {
            const totalPriceElem = document.querySelector('.total-price');
            let total = summCartData();
            let discount = total * 0.10;
            let finalPrice = total - discount;
            document.querySelector('.total-discount').textContent = `${discount} ₽`;
            document.querySelector('.final-price').textContent = `${finalPrice} ₽`;
            alert('Промокод применен! Вы получили скидку 10%.');
        } else {
            alert('Промокод не найден');
        }
        promoInput.value = '';
    });
});

function checkCartData() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

function summCartData(){
    const cart = checkCartData();
    return cart.reduce((total, product) => total + product.price, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    updateCartCount();
});
