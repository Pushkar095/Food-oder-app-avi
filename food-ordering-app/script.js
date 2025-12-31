// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Truffle Burger",
        price: 18.99,
        category: "burger",
        desc: "Wagyu beef with black truffle mayo.",
        img: "./images/truffle-burger.png"
    },
    {
        id: 2,
        name: "Margherita Supreme",
        price: 15.50,
        category: "pizza",
        desc: "San Marzano tomato sauce, fresh buffalo mozzarella.",
        img: "./images/margherita.png"
    },
    {
        id: 3,
        name: "Dragon Roll",
        price: 22.00,
        category: "sushi",
        desc: "Eel and cucumber topped with avocado.",
        img: "./images/dragon-roll.png"
    },
    {
        id: 4,
        name: "Molten Lava Cake",
        price: 12.00,
        category: "dessert",
        desc: "Rich chocolate cake with a gooey center.",
        img: "./images/lava-cake.png"
    },
    {
        id: 5,
        name: "Smashed Avo Burger",
        price: 16.50,
        category: "burger",
        desc: "Double patty with fresh smashed avocado.",
        img: "./images/avo-burger.png"
    },
    {
        id: 6,
        name: "Pepperoni Feast",
        price: 17.00,
        category: "pizza",
        desc: "Double pepperoni with extra cheese.",
        img: "./images/pepperoni.png"
    },
    {
        id: 7,
        name: "Crispy Samosa",
        price: 5.99,
        category: "indian",
        desc: "Golden fried pastry filled with spiced potatoes and peas.",
        img: "./images/samosa.png"
    },
    {
        id: 8,
        name: "Veg Chowmein",
        price: 10.50,
        category: "chinese",
        desc: "Stir-fried noodles with fresh vegetables and soy sauce.",
        img: "./images/chowmein.png"
    },
    {
        id: 9,
        name: "Aloo Tikki Burger",
        price: 9.00,
        category: "burger",
        desc: "Spiced potato patty with mint chutney and onions.",
        img: "./images/aloo-tikki.jpg"
    },
    {
        id: 10,
        name: "Butter Chicken",
        price: 16.99,
        category: "indian",
        desc: "Tender chicken in a rich tomato and butter sauce.",
        img: "./images/butter-chicken.jpg"
    },
    {
        id: 11,
        name: "Paneer Tikka Masala",
        price: 14.50,
        category: "indian",
        desc: "Grilled paneer cubes in spicy gravy.",
        img: "./images/paneer-tikka.jpg"
    },
    {
        id: 12,
        name: "Chicken Biryani",
        price: 15.99,
        category: "indian",
        desc: "Aromatic basmati rice cooked with spiced chicken.",
        img: "./images/biryani.jpg"
    },
    {
        id: 13,
        name: "Spring Rolls",
        price: 6.50,
        category: "chinese",
        desc: "Crispy rolls filled with vegetables.",
        img: "./images/spring-rolls.jpg"
    },
    {
        id: 14,
        name: "Veg Manchurian",
        price: 11.50,
        category: "chinese",
        desc: "Fried vegetable balls in spicy tangy sauce.",
        img: "./images/manchurian.jpg"
    },
    {
        id: 15,
        name: "Fried Rice",
        price: 9.50,
        category: "chinese",
        desc: "Wok-tossed rice with veggies and soy sauce.",
        img: "./images/fried-rice.jpg"
    },
    {
        id: 16,
        name: "California Roll",
        price: 8.99,
        category: "sushi",
        desc: "Crab, avocado, and cucumber rolled in rice.",
        img: "./images/california-roll.jpg"
    },
    {
        id: 17,
        name: "Salmon Nigiri",
        price: 7.50,
        category: "sushi",
        desc: "Fresh salmon slice over pressed vinegared rice.",
        img: "./images/salmon-nigiri.jpg"
    },
    {
        id: 18,
        name: "Tuna Sashimi",
        price: 9.99,
        category: "sushi",
        desc: "Fresh slices of premium tuna.",
        img: "./images/tuna-sashimi.jpg"
    },
    {
        id: 19,
        name: "Tiramisu",
        price: 8.50,
        category: "dessert",
        desc: "Classic Italian coffee-flavored dessert.",
        img: "./images/tiramisu.jpg"
    },
    {
        id: 20,
        name: "Cheesecake",
        price: 7.99,
        category: "dessert",
        desc: "Creamy cheesecake with a graham cracker crust.",
        img: "./images/cheesecake.jpg"
    },
    {
        id: 21,
        name: "Chocolate Brownie",
        price: 6.50,
        category: "dessert",
        desc: "Warm chocolate brownie with walnuts.",
        img: "./images/brownie.jpg"
    }
];

// Auth State
let currentUser = JSON.parse(localStorage.getItem('gourmet_current_user'));

// Cart State (Persist in localStorage)
let cart = JSON.parse(localStorage.getItem('gourmet_cart')) || [];

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const categoryBtns = document.querySelectorAll('.cat-btn');

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    if (menuGrid) renderMenu('all');
    updateCartUI();
    typeWriterEffect();
    updateNavBar();
});

function updateNavBar() {
    const navIcons = document.querySelector('.nav-icons');
    if (!navIcons) return;

    const existingLoginBtn = document.getElementById('nav-auth-btn');
    if (existingLoginBtn) existingLoginBtn.remove();

    const authBtn = document.createElement('div');
    authBtn.id = 'nav-auth-btn';
    authBtn.style.marginLeft = '20px';
    authBtn.style.cursor = 'pointer';

    if (currentUser) {
        authBtn.innerHTML = `
            <div class="user-profile" onclick="logout()" title="Logout">
                <i class="fa-solid fa-user-check" style="color: var(--primary); font-size: 1.2rem;"></i>
                <span style="margin-left: 8px; font-size: 0.9rem; color: var(--text-white); font-weight: 600;">${currentUser.name.split(' ')[0]}</span>
            </div>
        `;
    } else {
        authBtn.innerHTML = `
            <a href="auth.html" class="btn btn-primary" style="padding: 8px 20px; font-size: 0.9rem; border-radius: 50px;">Login</a>
        `;
    }

    navIcons.appendChild(authBtn);
}

function logout() {
    // Direct logout without popup to prevent issues
    localStorage.removeItem('gourmet_current_user');
    currentUser = null;
    updateNavBar();
    window.location.reload();
}

// Category Filtering
if (categoryBtns.length > 0) {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');
            // Render
            renderMenu(btn.dataset.category);
        });
    });
}

// Render Menu Function
function renderMenu(category) {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    const filteredItems = category === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('food-card');

        // Check if item is in cart
        const inCart = cart.find(i => i.id === item.id);
        const buttonText = inCart ? 'Added' : 'Add to Cart';
        const buttonClass = inCart ? 'add-btn added' : 'add-btn';

        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" onerror="this.src='./images/coming-soon.png'">
            <button class="wishlist-btn" onclick="toggleWishlist(this)">
                <i class="fa-regular fa-heart"></i>
            </button>
            <div class="food-info">
                <div class="food-meta">
                    <h3>${item.name}</h3>
                    <div class="price">$${item.price.toFixed(2)}</div>
                </div>
                <p>${item.desc}</p>
                <button class="${buttonClass}" data-id="${item.id}" onclick="addToCart(${item.id})">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <span>${buttonText}</span>
                </button>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

// Cart Functionality
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    const existingItem = cart.find(i => i.id === id);

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    updateButtonState(id);
    localStorage.setItem('gourmet_cart', JSON.stringify(cart));
    // Open cart automatically on add for better UX
    openCart();
}

// Update button state
function updateButtonState(id) {
    const button = document.querySelector(`button[data-id="${id}"]`);
    if (button) {
        button.classList.add('added');
        const span = button.querySelector('span');
        if (span) {
            span.textContent = 'Added';
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('gourmet_cart', JSON.stringify(cart));
    updateCartUI();
    // Re-render menu to update button states
    const activeCategory = document.querySelector('.cat-btn.active');
    if (activeCategory) {
        renderMenu(activeCategory.dataset.category);
    }
}

function updateCartUI() {
    // Update Count
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.innerText = totalQty;

    // Update Items List
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
    } else {
        cart.forEach(item => {
            totalPrice += item.price * item.qty;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}" onerror="this.src='./images/coming-soon.png'">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.qty}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    // Update Total
    cartTotal.innerText = '$' + totalPrice.toFixed(2);
}

// Toggle Cart
function toggleCart() {
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Cart is empty!');
        return;
    }

    if (!currentUser) {
        alert('Please login to complete your order.');
        window.location.href = `auth.html?redirect=${encodeURIComponent(window.location.href)}`;
        return;
    }

    alert(`Thank you for your order, ${currentUser.name}! Total: ${cartTotal.innerText}`);
    cart = [];
    localStorage.removeItem('gourmet_cart');
    updateCartUI();
    toggleCart();
}

// Typewriter Effect
function typeWriterEffect() {
    const heroTitle = document.querySelector('.hero-text h1');
    if (!heroTitle) return;

    const plainText = "Taste the ";
    const words = ["Extraordinary", "Delicious cuisine"];

    // Set static part
    heroTitle.innerHTML = plainText;

    // Create span for animated part
    const span = document.createElement('span');
    span.classList.add('gradient-text');
    heroTitle.appendChild(span);

    // Create cursor
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    cursor.innerHTML = '&nbsp;'; // Non-breaking space for height
    heroTitle.appendChild(cursor);

    let wordIndex = 0;

    function startTyping() {
        const currentWord = words[wordIndex];
        let j = 0;

        function typeGradient() {
            if (j < currentWord.length) {
                span.innerHTML += currentWord.charAt(j);
                j++;
                setTimeout(typeGradient, 100);
            } else {
                // Wait 3 seconds then delete
                setTimeout(deleteText, 3000);
            }
        }

        function deleteText() {
            if (j > 0) {
                span.innerHTML = currentWord.substring(0, j - 1);
                j--;
                setTimeout(deleteText, 50);
            } else {
                // Move to next word and restart typing
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(startTyping, 500);
            }
        }

        typeGradient();
    }

    startTyping();
}

function toggleWishlist(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        icon.style.color = 'var(--primary)';
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        icon.style.color = 'white';
    }
}
