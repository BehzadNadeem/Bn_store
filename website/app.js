import { auth,db,storage ,onAuthStateChanged,signOut,getDoc,doc} from "./utiles/script.js";

let isUserLoggedIn = false;
// console.log('auth=>',auth);
// console.log('storage=>',storage);
// console.log('db=>',db);

onAuthStateChanged(auth, (user) => {
    if (user) {
        // login hai 
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      login_btn.style.display="none";
      user_image.style.display="inline-block";
      user_image.style.width="45px";
      user_image.style.height="42px";
     
      
      getUserImage(uid)
      isUserLoggedIn = true;
      // ...
    } else {
        // login nahi hai 
      // User is signed out
    //   window.location.href='./auth/login/login.html' ;
      login_btn.style.display="inline-block";
      user_image.style.display="inline-block"; 
      isUserLoggedIn = false;
    }
  });


  const login_btn=document.getElementById('login_btn');
  const Logout_btn=document.getElementById('Logout_btn');
  const user_image=document.getElementById('user_image');


  login_btn.addEventListener('click' , function(){
    window.location.href='/auth/login/login.html'
  })



  Logout_btn.addEventListener("click", () => {
    signOut(auth);

  });

  function getUserImage(uid){
    const userRef=doc(db , "users" , uid);
    getDoc(userRef).then((data)=>{
        console.log('data=>',data);
        console.log('data=>',data.data());
        console.log('data=>',data.id);
        user_image.src=data.data().img;
    });
   
  }
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: ' Comfort Wireless Noise Cancelling Headphones', price: 103.88, img: 'https://plus.unsplash.com/premium_photo-1679864782395-cc5697bf614f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D' },
        { id: 2, name: 'Hanes Mens T-ShirtCotton Crewneck Tee. ', price: 20.00, img: 'https://m.media-amazon.com/images/I/71zRMNf2uvL._AC_UL320_.jpg' },
        { id: 3, name: 'Mizuno Mens Exceed Tour 5 Sneaker', price: 99.05, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnQlMjBpbWFnZSUyMGZvciUyMHNob2VzfGVufDB8fDB8fHww' },
        { id: 4, name: 'SAMSUNG Galaxy Watch 7  Bluetooth AI Smartwatch ', price: 99.00, img: 'https://m.media-amazon.com/images/I/71NrPRCvFRL._AC_UL320_.jpg' },
        { id: 5, name: 'Skytech Gaming Chronos Mini Gaming PC Desktop', price: 544.49, img: 'https://m.media-amazon.com/images/I/81xlW-WgHKL._AC_SY450_.jpg' },
        { id: 6, name: 'Michael Kors Jet Set Travel Signature PVC Medium Logo', price: 35.00, img: 'https://m.media-amazon.com/images/I/81DsDTbnP6L._AC_UL320_.jpg' },
        { id: 7, name: 'Globe Electric 67135 72 Torchiere Floor Lamp', price: 35.00, img: 'https://media.istockphoto.com/id/534400418/photo/desk-lamp.webp?b=1&s=170667a&w=0&k=20&c=Kkf2qQwlXa0KbMQIt3PO_-ZcqcBAQJncCmCznvSUGAM=' },
        { id: 8, name: 'wet n wild Color Icon Blush, Effortless Glow & Seamless', price: 45.00, img: 'https://m.media-amazon.com/images/I/81FSUbGs2dL._AC_UL320_.jpg' },
        { id: 9, name: 'Car Steering Wheel Cover,  Safety, Soft, Breathable', price: 50.00, img: 'https://m.media-amazon.com/images/I/61idZNIVOVL._AC_UL320_.jpg' },
        { id: 10, name: 'Gaming Chair  Bluetooth Speakers and Led Lights ', price: 168.05, img: 'https://m.media-amazon.com/images/I/81bsYDdcfsL._AC_UL320_.jpg' },
        { id: 11, name: 'GUESS "Basic" G Logo Heart Link Bracelet', price: 60.00, img: 'https://m.media-amazon.com/images/I/81ekP7iAUgS._AC_UL320_.jpg' },
        { id: 12, name: 'Kmise Spring Wreath Fall Decor Wreath for Front Door', price: 30.00, img: 'https://m.media-amazon.com/images/I/81mIKyEwVDL._AC_UL320_.jpg' }
    ];

    const productContainer = document.getElementById('product-list');
    const cartSection = document.getElementById('cart-section');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartIcon = document.getElementById('icon');
    let cart = [];
    

    function displayProducts() {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-3 ';
            productCard.innerHTML = `
                <div class="card">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <button class=" add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            productContainer.appendChild(productCard);
        });
        //btn btn-primary 
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
                <button class="btn btn-danger btn-sm remove-from-cart" data-id="${item.id}">Remove</button>
            `;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = total.toFixed(2);
        cartIcon.innerHTML = `${cart.length} <i class="fa-solid fa-cart-shopping"></i>`;
        cartSection.style.display = cart.length ? 'block' : 'none';
    }

    function addToCart(productId) {

         if (!isUserLoggedIn) {
            alert('You are not logged in.');
            return;
        }
        
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }

    function removeFromCart(productId) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCart();
    }

    productContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
    });

    displayProducts();
});
