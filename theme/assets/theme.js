// ABOUTME: Main JavaScript file for Mandatory Fun theme
// ABOUTME: Handles interactive elements and form submissions

(function() {
  'use strict';

  // Wait for DOM ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initMobileNav();
    initRedactedText();
    console.log('MANDATORY FUN theme loaded. Your session has been logged.');
  }

  // Mobile navigation toggle
  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav-main');

    if (toggle && nav) {
      toggle.addEventListener('click', function() {
        var expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('is-open');
      });
    }
  }

  // Redacted text accessibility
  function initRedactedText() {
    var redacted = document.querySelectorAll('.redacted');
    redacted.forEach(function(el) {
      if (!el.title) {
        el.title = 'Hover to reveal classified information';
      }
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');

      // Allow keyboard reveal
      el.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.style.backgroundColor = 'transparent';
          this.style.color = 'inherit';
        }
      });

      el.addEventListener('keyup', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          this.style.backgroundColor = '';
          this.style.color = '';
        }
      });
    });
  }

})();
