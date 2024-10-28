// ABOUTME: Preview interactions for Mandatory Fun theme mockups
// ABOUTME: Handles accordions, quantity selectors, and other UI interactions

document.addEventListener('DOMContentLoaded', () => {
  // Accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all accordions in this group
      const accordion = item.parentElement;
      accordion.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
      });

      // Toggle clicked accordion
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Size selector
  const sizeOptions = document.querySelectorAll('.size-option:not(.disabled)');
  sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
      sizeOptions.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
    });
  });

  // Color selector
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      colorOptions.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
    });
  });

  // Quantity selectors
  document.querySelectorAll('.quantity-selector, .cart-quantity').forEach(selector => {
    const buttons = selector.querySelectorAll('button, .cart-quantity-btn');
    const input = selector.querySelector('input') || selector.querySelector('.cart-quantity-value');

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        let value = parseInt(input.value || input.textContent);
        if (index === 0) {
          // Decrease
          value = Math.max(1, value - 1);
        } else {
          // Increase
          value = Math.min(99, value + 1);
        }
        if (input.tagName === 'INPUT') {
          input.value = value;
        } else {
          input.textContent = value;
        }
      });
    });
  });

  // Gallery thumbnails
  const galleryThumbs = document.querySelectorAll('.gallery-thumb');
  const galleryMain = document.querySelector('.gallery-main img');
  galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      galleryThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      if (galleryMain) {
        const thumbImg = thumb.querySelector('img');
        // Update main image (use larger version)
        const src = thumbImg.src.replace('w=200&h=200', 'w=800&h=1000');
        galleryMain.src = src;
      }
    });
  });

  // Add to cart stamp animation
  const stampButtons = document.querySelectorAll('.btn-stamp');
  stampButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
        // In real implementation, would add to cart here
        console.log('Item requisitioned!');
      }, 150);
    });
  });

  // Filter checkboxes (just visual feedback for preview)
  const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      console.log('Filter changed:', checkbox.checked);
    });
  });

  // Redacted text hint
  const redactedElements = document.querySelectorAll('.redacted');
  redactedElements.forEach(el => {
    el.title = 'Hover to reveal classified information';
  });

  console.log('MANDATORY FUN preview loaded. Your activity has been logged.');
});
