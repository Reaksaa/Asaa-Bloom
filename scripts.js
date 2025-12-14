function addToCart(item) {
    alert(item + " added to cart 🌸");
  }

  function scrollToShop() {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
  }

  function toggleFav(btn) {
    if (btn.style.color == 'red') {
      btn.style.color = '#999';
    } else {
      btn.style.color = 'red';
    }
  }


