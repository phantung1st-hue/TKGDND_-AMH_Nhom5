document.addEventListener("DOMContentLoaded", () => {
  const sortSelect = document.getElementById("sort-select");
  const productGrid = document.getElementById("product-grid");
  const cards = Array.from(productGrid.querySelectorAll(".product-card"));

  function sortCards(mode) {
    const sorted = [...cards].sort((a, b) => {
      const priceA = Number(a.dataset.price || 0);
      const priceB = Number(b.dataset.price || 0);
      const ratingA = Number(a.dataset.rating || 0);
      const ratingB = Number(b.dataset.rating || 0);

      if (mode === "price-asc") return priceA - priceB;
      if (mode === "price-desc") return priceB - priceA;
      if (mode === "rating") return ratingB - ratingA;
      return 0;
    });

    sorted.forEach((card) => productGrid.appendChild(card));
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (event) => {
      sortCards(event.target.value);
    });
  }

  const filterInputs = Array.from(document.querySelectorAll(".filters-sidebar input[type='checkbox']"));
  filterInputs.forEach((input) => {
    input.addEventListener("change", () => {
      cards.forEach((card) => {
        const shouldHide = filterInputs.some((box) => box.checked === false && box.closest(".checkbox-row")?.textContent.includes("Thực phẩm"));
        if (shouldHide) {
          card.style.display = "flex";
        }
      });
    });
  });

  sortCards("newest");
});
