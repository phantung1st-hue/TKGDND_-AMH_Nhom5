document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll(".cart-item"));
  const subtotalEl = document.querySelector("[data-subtotal]");
  const shippingFeeEl = document.querySelector("[data-shipping-fee]");
  const totalEl = document.querySelector("[data-total]");
  const shippingRemainingEl = document.querySelector("[data-shipping-remaining]");
  const progressFill = document.querySelector("[data-progress-fill]");
  const couponForm = document.getElementById("coupon-form");
  const couponInput = document.getElementById("coupon");
  const couponButton = couponForm ? couponForm.querySelector("button") : null;
  const continueLink = document.querySelector(".continue-link");
  const checkoutButton = document.querySelector(".checkout-btn");

  const FREE_SHIPPING_THRESHOLD = 250000;
  const SHIPPING_FEE = 30000;
  let discount = 0;

  function formatCurrency(amount) {
    return `${amount.toLocaleString("vi-VN")} VNĐ`;
  }

  function updateTotals() {
    const subtotal = items.reduce((sum, item) => {
      const price = Number(item.dataset.price || 0);
      const qty = Number(item.querySelector(".qty-value").textContent || 0);
      return sum + price * qty;
    }, 0);

    const shippingFee = SHIPPING_FEE;
    const total = Math.max(0, subtotal + shippingFee - discount);

    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (shippingFeeEl) shippingFeeEl.textContent = formatCurrency(shippingFee);
    if (totalEl) totalEl.textContent = formatCurrency(total);

    if (shippingRemainingEl) {
      const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
      shippingRemainingEl.textContent = formatCurrency(remaining);
    }

    if (progressFill) {
      const progressWidth = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
      progressFill.style.width = `${progressWidth}%`;
    }
  }

  function attachItemEvents(item) {
    const qtyValue = item.querySelector(".qty-value");
    const itemTotal = item.querySelector(".item-total");
    const price = Number(item.dataset.price || 0);

    item.querySelectorAll(".qty-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        let qty = Number(qtyValue.textContent || 0);

        if (action === "increase") {
          qty += 1;
        } else if (action === "decrease" && qty > 1) {
          qty -= 1;
        }

        qtyValue.textContent = qty;
        itemTotal.textContent = formatCurrency(price * qty);
        updateTotals();
      });
    });

    const removeButton = item.querySelector(".remove-btn");
    if (removeButton) {
      removeButton.addEventListener("click", () => {
        item.remove();
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
        updateTotals();
      });
    }
  }

  items.forEach(attachItemEvents);

  if (couponForm && couponInput && couponButton) {
    couponForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputValue = couponInput.value.trim().toUpperCase();
      discount = inputValue === "GREEN10" ? 10000 : 0;
      couponButton.textContent = inputValue === "GREEN10" ? "Đã áp dụng" : "Áp dụng";
      updateTotals();
    });
  }

  if (continueLink) {
    continueLink.setAttribute("href", "san-pham.html");
  }

  if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
      window.location.href = "thanh-toan.html";
    });
  }

  items.forEach((item) => {
    const qtyValue = item.querySelector(".qty-value");
    const itemTotal = item.querySelector(".item-total");
    const price = Number(item.dataset.price || 0);
    const qty = Number(qtyValue.textContent || 0);
    itemTotal.textContent = formatCurrency(price * qty);
  });

  updateTotals();
});
