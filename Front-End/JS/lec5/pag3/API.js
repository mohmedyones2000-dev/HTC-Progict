const container = document.getElementById('container');
let allProducts = []
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
        allProducts = data;
        show()
  });

  function show(){
    let content = '';
    allProducts.forEach((product,index) => {
       content += `
        <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col text-center">
          <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-contain mb-4">
          <h3 class="font-bold text-lg mb-2 line-clamp-1">${product.title}</h3>
          <p class="text-gray-600 mb-4 line-clamp-3">${product.description}</p>
          <div class="flex justify-between items-center">
            <span class="text-xl font-bold text-green-500 ml-[0px]">$${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${index})" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer">Add to Cart</button>
          </div>
        </div>
      `;
    });
    container.innerHTML += content;
  }

function addToCart(productId) {
    console.log(allProducts[productId]);
} 