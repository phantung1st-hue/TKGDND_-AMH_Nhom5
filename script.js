const mobileToggle = document.querySelector('.mobile-toggle');
const topNav = document.querySelector('.topnav');

if (mobileToggle && topNav) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = topNav.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      topNav.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    if (topNav) {
      topNav.classList.remove('open');
      mobileToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const weightPills = document.querySelectorAll('.weight-pill');
weightPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    weightPills.forEach((item) => item.classList.remove('active'));
    pill.classList.add('active');
  });
});

const quantityButtons = document.querySelectorAll('.quantity-control button');
if (quantityButtons.length) {
  const quantityValue = document.querySelector('.quantity-control span');
  let quantity = Number(quantityValue?.textContent || 1);

  quantityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent.includes('+')) {
        quantity += 1;
      } else if (quantity > 1) {
        quantity -= 1;
      }
      if (quantityValue) {
        quantityValue.textContent = String(quantity);
      }
    });
  });
}

const productMainImage = document.querySelector('#productMainImage');
const thumbnailItems = document.querySelectorAll('.thumbnail-item[data-image]');

if (productMainImage && thumbnailItems.length) {
  thumbnailItems.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const imageSrc = thumb.getAttribute('data-image');
      if (!imageSrc) {
        return;
      }

      productMainImage.setAttribute('src', imageSrc);
      thumbnailItems.forEach((item) => item.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

const productTabs = document.querySelectorAll('.product-tab');
const tabPanels = document.querySelectorAll('.tab-panel');

if (productTabs.length && tabPanels.length) {
  productTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetPanel = tab.getAttribute('data-tab');
      if (!targetPanel) {
        return;
      }

      productTabs.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });

      tabPanels.forEach((panel) => {
        panel.classList.remove('active');
        panel.hidden = true;
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const nextPanel = document.querySelector(`.tab-panel[data-panel="${targetPanel}"]`);
      if (nextPanel) {
        nextPanel.classList.add('active');
        nextPanel.hidden = false;
      }
    });
  });
}
