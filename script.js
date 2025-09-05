const books = [
  { id: 1, title: "The Alchemist", price: 20.99 , image: "book1.jpg" },
  { id: 2, title: "Atomic Habits", price: 19.50, image: "book2.jpg" },
  { id: 3, title: "The Power of Now", price: 40.00, image: "book3.jpg" },
  { id: 4, title: "Rich Dad Poor Dad", price: 19.00, image: "book4.jpg" },
  { id: 5, title: "Le livre des jours", price: 30, image: "book5.jpg" },
  { id: 6, title: "L'histoire des quatre califes bien-guidés", price: 40.00, image: "book6.jpg" },
  { id: 7, title: "البحث عن يسوع التاريخي", price: 40.00, image: "book8.jpg" },
  { id: 8, title: "لا خوف اليوم علي الفراشات", price: 40.25, image: "book9.jpg" },
  { id: 9, title:"وجه الفراشة", price: 40.25, image: "book10.jpg" }
];

function displayBooks() {
  const container = document.getElementById("book-list");

  books.forEach(book => {
    const card = document.createElement("div");
    card.className = "box";
    card.innerHTML = `
      <a href="bookstore.html?id=${book.id}" class="book-link">
        <img src="${book.image}" alt="${book.title}" />
        <h3>${book.title}</h3>
      </a>
      <p>${book.price.toFixed(2)}dh</p>
      <button class="btn" onclick="addToCart(${book.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const book = books.find(b => b.id === bookId);

  const existing = cart.find(item => item.id === book.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
  updateCartCount();
});
const track = document.getElementById('carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let scrollAmount = 0;
const scrollPerClick = 220;

nextBtn.addEventListener('click', () => {
  track.scrollBy({ left: scrollPerClick, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({ left: -scrollPerClick, behavior: 'smooth' });
});
