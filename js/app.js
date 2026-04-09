    (function () {
      'use strict';

      const toggle = document.querySelector('.nav-toggle');
      const nav    = document.querySelector('.site-nav');
      if (!toggle || !nav) return;

      toggle.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('is-open');

        // Met à jour aria-expanded
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        // Met à jour l'aria-label du bouton
        toggle.setAttribute(
          'aria-label',
          isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'
        );
      });

      // Ferme le menu si on clique en dehors (UX + a11y)
      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Ouvrir le menu de navigation');
        }
      });

      // Ferme le menu sur Échap
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Ouvrir le menu de navigation');
          toggle.focus(); // retour du focus vers le bouton
        }
      });

      // Ajuste l'état du nav au redimensionnement
      window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Ouvrir le menu de navigation');
        }
      });
    })();