function openCart() {
    let cart_main = document.getElementById('cart-main');
    cart_main.style.display = 'block';

    let cart_button = document.getElementById('cart-button');
    cart_button.style.display = 'none';
    let search_button = document.getElementById('search-button');
    search_button.style.display = 'none';
}

function closeCart() {
    let cart_main = document.getElementById('cart-main');
    cart_main.style.display = 'none';

    let cart_button = document.getElementById('cart-button');
    cart_button.style.display = 'block';
    let search_button = document.getElementById('search-button');
    search_button.style.display = 'block';
}

function emptyCart() {
    localStorage.removeItem('cart');
    showcart();
}

function addtocart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({ name, price });

    localStorage.setItem('cart', JSON.stringify(cart));

    showcart();
}

function removefromcart(name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let index = cart.findIndex((item) => item.name === name);
    if (index !== -1) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    showcart();
}

function getimage(name) {
    if (name === 'Expresso') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/expresso2.jpg';
    }
    if (name == 'Americano') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/americano.jpg';
    }
    if (name == 'Mocha') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/mochacoffee.jpg';
    }
    if (name == 'Cappuncino') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/cappuccino.webp';
    }
    if (name == 'Latte') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/latte.jpg';
    }
    if (name == 'Flat White') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/flatwhite.jpeg';
    }
    if (name == 'Hot Chocolate') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/hotchocolate2.jpg';
    }
    if (name == 'White Hot Chocolate') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/whitehotchocolate.webp';
    }
    if (name == 'Chai Latte') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/chailatte.jpg';
    }
    if (name == 'Salted Caramel Frappé') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/saltedcaramelfrappe.jpg';
    }
    if (name == 'Chocolate Chip Frappé') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/ChocolateChipFrappe.jpg';
    }
    if (name == 'Iced Latte') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/icedlatte.webp';
    }
    if (name == 'Iced Cappuncino') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/icedcappuccino.webp';
    }
    if (name == 'Iced Chai Latte') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/icedchailatte.jpg';
    }
    if (name == 'Iced Black Americano') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/icedblackamericano.jpg';
    }
    if (name == 'Iced Mocha') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/icedmocha.jpg';
    }
    if (name == 'English Breakfast Tea') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/englishbreakfasttea.jpeg';
    }
    if (name == 'Croissant') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/croissant.webp';
    }
    if (name == "Chocolate Croissant") {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/chocolatecroissant.jpg';
    }
    if (name == 'Blueberry Muffin') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/blueberrymuffin.jpg';
    }
    if (name == 'Chocolate Chip Muffin') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/chocolatechipmuffin.jpg';
    }
    if (name == 'Chocolate Muffin') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/chocolatemuffin.jpg';
    }
    if (name == 'Chocolate Chip Cookie') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/chocolatechipcookie.jpg';
    }
    if (name == 'Double Chocolate Chip Cookie') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/Double Chocolate Chip Cookie';
    }
    if (name == 'Brownies') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/brownies.jpg';
    }
    if (name == 'Avocado Toast') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/avocadotoast.jpg';
    }
    if (name == 'BLT Sandwich') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/BLTsandwich.jpg';
    }
    if (name == 'Bagel Sandwich') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/bagelsandwich.jpg';
    }
    if (name == 'Grilled Cheese Sandwich') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/grilledcheesesandwich.jpg';
    }
    if (name == 'Blueberry Cheesecake') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/blueberrycheescake.jpg';
    }
    if (name == 'Strawberry Cheesecake') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/strawberrycheesecake.jpg';
    }
    if (name == 'Tiramisu') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/tiramisu.webp';
    }
    if (name == 'Chocolate Cake') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/chocolatecake.jpeg';
    }
    if (name == 'Carrot Cake') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/carrotcake2.jpg';
    }
    if (name == 'Red Velvet Cake') {
        return 'https://pravalika234.github.io/Elite-Cafe---Assignment/Images/redvelvetcake.webp';
    }
}

function showcart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let ce = document.getElementById('cart-number');
    ce.innerText = cart.length;

    let cartlist = document.getElementById('cart');

    cartlist.innerHTML = '';

    let totalPrice = 0;

    let newItems = {}

    cart.forEach((item) => {
        if (item.name in newItems) {
            newItems[item.name].quantity += 1;
            newItems[item.name].price += item.price;
        } else {
            newItems[item.name] = {
                name: item.name,
                price: item.price,
                quantity: 1
            }
        }
    });

    for (let key in newItems) {
        let item = newItems[key];
        let li = document.createElement('div');
        li.classList.add("cart-items");

        let name = document.createElement('div');
        name.classList.add("name")
        let image = document.createElement('div');
        name.classList.add("image")
        let price = document.createElement('div');
        price.classList.add("total-price")
        let quantity = document.createElement('div');
        quantity.classList.add("quantity")

        name.innerText = `${item.name}`;
        price.innerText = `£${item.price.toFixed(2)}`;

        image.innerHTML = `<img src="${getimage(item.name)}" alt="product image">`
        quantity.innerHTML = `<span class="minu" id="decrease-${item.name}-${item.price}"><</span>
        <span id="quantity-${item.name}-${item.price}">${item.quantity}</span>
        <span class="plus" id="increase-${item.name}-${item.price}">></span>`

        li.appendChild(image);
        li.appendChild(name);
        li.appendChild(price);
        li.appendChild(quantity);
        
        cartlist.appendChild(li);

        totalPrice += item.price;

        document.getElementById(`decrease-${item.name}-${item.price}`).addEventListener('click', () => {
            removefromcart(item.name);
        });
        
        document.getElementById(`increase-${item.name}-${item.price}`).addEventListener('click', () => {
            addtocart(item.name, item.price);
        });
    };

    document.getElementById('total').innerText = totalPrice.toFixed(2);
}