const booksData = [
    { image: "https://m.media-amazon.com/images/I/51D8tEOmerL._SY445_SX342_QL70_FMwebp_.jpg", title: "Make Your Bad", author: "H. William", genre: "Tarixiy", year: 1978 },
    { image: "https://m.media-amazon.com/images/I/51UmNg33hCL._SY445_SX342_FMwebp_.jpg", title: "Let Them", author: "Mel Robbins", genre: "Roman", year: 1928 },
    { image: "https://m.media-amazon.com/images/I/41fh3WWECQL._SY445_SX342_FMwebp_.jpg", title: "Whistler", author: "Ann Patchett", genre: "Sarguzasht", year: 1968 },
    { image: "https://m.media-amazon.com/images/I/51b4CfdTSDL._SY445_SX342_QL70_FMwebp_.jpg", title: "Atomic Habits", author: "James Clear", genre: "Roman", year: 1925 },
    { image: "https://m.media-amazon.com/images/I/31hkIrPKf6L._SY445_SX342_FMwebp_.jpg", title: "You Think", author: "Joseph Nguyen", genre: "Sarguzasht", year: 1968 },
];

const booksGrid = document.querySelector(".books-grid");

const loading = document.querySelector(".loading");

booksData.map(item => {

  const book = document.createElement("div");
  book.classList.add("book-card");
  book.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="card-body">
        <span class="card-genre">${item.genre}</span>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-author">Muallif: ${item.author}</p>
      </div>
      <div class="card-footer">
         <span class="card-year">${item.year}-yil</span>
         <button class="read-btn">O'qish</button>
      </div>
   `;

    loading.classList.add("loading2")
    setTimeout(() => {
        loading.classList.remove("loading2")
        booksGrid.appendChild(book)
    } , 2000)

});