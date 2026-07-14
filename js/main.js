(function () {
  const isPostPage = document.querySelector('.post-page') !== null;

  // ========== Navbar + scroll hint transition ==========
  const navbar = document.getElementById('navbar');
  const hero = document.querySelector('.hero');
  const scrollHint = document.getElementById('scrollHint');

  if (hero) {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      const heroH = hero.offsetHeight;

      // Navbar: transparent at top, gradually fades in, fully solid when hero scrolled past
      const progress = Math.min(scroll / heroH, 1);
      const bgAlpha = progress * 0.45;  // max 0.45 at full scroll
      const blurPx = progress * 14;     // max 14px blur
      const borderAlpha = progress * 0.10;

      if (navbar) {
        navbar.style.background = 'rgba(30,30,35,' + bgAlpha + ')';
        navbar.style.backdropFilter = 'blur(' + blurPx + 'px)';
        navbar.style.webkitBackdropFilter = 'blur(' + blurPx + 'px)';
        navbar.style.borderBottomColor = 'rgba(255,255,255,' + borderAlpha + ')';
      }

      // Scroll hint fades out
      if (scrollHint) {
        scrollHint.style.opacity = scroll > 80 ? '0' : '1';
      }
    }, { passive: true });
  }

  // ========== Search modal ==========
  const searchToggle = document.getElementById('searchToggle');
  const searchModal = document.getElementById('searchModal');
  const searchBackdrop = document.getElementById('searchBackdrop');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');

  if (searchToggle && searchModal) {
    searchToggle.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal.classList.add('open');
      setTimeout(() => searchInput.focus(), 100);
    });
    searchBackdrop.addEventListener('click', () => searchModal.classList.remove('open'));
    searchClose.addEventListener('click', () => searchModal.classList.remove('open'));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') searchModal.classList.remove('open');
    });
  }

  // ========== Homepage: post grid ==========
  const postGrid = document.getElementById('postGrid');
  if (postGrid) {
    let currentFilter = 'all';
    let filteredPosts = [...posts];

    function renderPosts() {
      postGrid.innerHTML = '';
      const noResults = document.getElementById('noResults');

      if (filteredPosts.length === 0) {
        postGrid.style.display = 'none';
        noResults.style.display = 'block';
      } else {
        postGrid.style.display = '';
        noResults.style.display = 'none';
      }

      filteredPosts.forEach((post, i) => {
        const card = document.createElement('a');
        card.className = 'post-card' + (i % 3 === 0 ? ' featured' : '');
        card.href = 'posts/' + post.id + '.html';
        card.style.animationDelay = (i * 0.06) + 's';
        card.innerHTML =
          '<img class="post-card-thumb" src="' + post.thumb + '" alt="' + post.title + '" loading="lazy">' +
          '<div class="post-card-body">' +
            '<h3 class="post-card-title">' + post.title + '</h3>' +
            '<div class="post-card-meta"><span>' + post.date + '</span></div>' +
          '</div>';
        postGrid.appendChild(card);
      });
    }

    document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link[data-filter]').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        currentFilter = link.dataset.filter;
        applyFilters();
        renderPosts();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        applyFilters();
        renderPosts();
      });
    }

    function applyFilters() {
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
      filteredPosts = posts.filter(post => {
        const matchCat = currentFilter === 'all' || post.category === currentFilter;
        const matchSearch = !query || post.title.toLowerCase().includes(query);
        return matchCat && matchSearch;
      });
    }

    renderPosts();
  }

  // ========== Post page: gallery + lightbox ==========
  const postGallery = document.querySelector('.post-gallery');
  if (postGallery && isPostPage) {
    const images = JSON.parse(postGallery.dataset.images || '[]');
    let lightbox, lightboxImg, currentIndex, currentImages;

    function createLightbox() {
      lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML =
        '<button class="lightbox-close">✕</button>' +
        '<button class="lightbox-nav lightbox-prev">‹</button>' +
        '<button class="lightbox-nav lightbox-next">›</button>';
      document.body.appendChild(lightbox);
      lightboxImg = document.createElement('img');
      lightbox.appendChild(lightboxImg);

      lightbox.querySelector('.lightbox-close').addEventListener('click', (e) => {
        e.stopPropagation(); closeLightbox();
      });
      lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
        e.stopPropagation(); prevImage();
      });
      lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
        e.stopPropagation(); nextImage();
      });
      lightbox.addEventListener('click', closeLightbox);
      lightboxImg.addEventListener('click', (e) => e.stopPropagation());
      document.addEventListener('keydown', handleKey);
    }

    function openLightbox(src, imgs) {
      if (!lightbox) createLightbox();
      currentImages = imgs;
      currentIndex = imgs.indexOf(src);
      lightboxImg.src = src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      lightbox.querySelector('.lightbox-prev').style.display = imgs.length > 1 ? '' : 'none';
      lightbox.querySelector('.lightbox-next').style.display = imgs.length > 1 ? '' : 'none';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      lightboxImg.src = currentImages[currentIndex];
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % currentImages.length;
      lightboxImg.src = currentImages[currentIndex];
    }

    function handleKey(e) {
      if (!lightbox || !lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }

    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.loading = 'lazy';
      img.addEventListener('click', () => openLightbox(src, images));
      postGallery.appendChild(img);
    });
  }
})();
