<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Каталог — iSakha</title>

<meta name="description" content="Каталог iPhone в Якутске. Оригинал, гарантия, доставка по городу.">
<meta name="author" content="iSakha">

<meta property="og:type" content="website">
<meta property="og:title" content="Каталог — iSakha">
<meta property="og:description" content="Оригинальные iPhone в Якутске.">
<meta property="og:image" content="https://isakha.ru/preview.jpg">
<meta property="og:url" content="https://isakha.ru/catalog.html">

<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 30'%3E%3Cpath fill='%236b2530' d='M17.05 15.6c-.03-3.2 2.6-4.73 2.72-4.8-1.48-2.17-3.79-2.47-4.6-2.5-1.96-.2-3.82 1.15-4.82 1.15-1 0-2.53-1.12-4.16-1.09-2.14.03-4.11 1.25-5.21 3.16-2.22 3.85-.57 9.55 1.6 12.68 1.06 1.53 2.32 3.25 3.97 3.19 1.6-.07 2.2-1.03 4.13-1.03 1.93 0 2.47 1.03 4.16.99 1.72-.03 2.8-1.56 3.85-3.1 1.21-1.78 1.71-3.5 1.74-3.59-.04-.02-3.34-1.28-3.38-5.06zM14.03 6.4c.88-1.07 1.47-2.55 1.31-4.03-1.27.05-2.8.84-3.71 1.91-.81.94-1.53 2.45-1.34 3.9 1.42.11 2.86-.72 3.74-1.78z'/%3E%3C/svg%3E">

<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: #08080a;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif;
    color: #fff;
    overflow-x: hidden;
    min-height: 100vh;
  }

  header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 18px 40px;
    background: rgba(8, 8, 10, 0.7);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    transition: padding 0.3s;
  }

  .header-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .logo {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .logo svg { width: 22px; height: 26px; fill: #7a2a38; }

  .nav { display: flex; gap: 28px; }

  .nav a {
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.15s;
  }

  .nav a:hover { color: #fff; }
  .nav a.active { color: #fff; }

  .cart-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    color: rgba(255,255,255,0.85);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.15s;
  }

  .cart-link:hover {
    background: rgba(255,255,255,0.08);
    color: #fff;
    border-color: rgba(255,255,255,0.2);
  }

  .cart-link svg { width: 16px; height: 16px; fill: currentColor; }

  .cart-link .count {
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 10px;
    background: #4ade80;
    color: #0a0a0c;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-link .count.hidden { display: none; }

  .page-hero {
    padding: 140px 40px 60px;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }

  .page-hero::before {
    content: "";
    position: absolute;
    top: 0; right: 10%;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(122, 42, 56, 0.35), transparent 65%);
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
  }

  .breadcrumbs {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 13px;
    color: rgba(255,255,255,0.4);
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .breadcrumbs a {
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    transition: color 0.15s;
  }

  .breadcrumbs a:hover { color: #fff; }

  .page-title {
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 700;
    letter-spacing: -2px;
    line-height: 1.05;
    margin-bottom: 12px;
    position: relative;
    z-index: 1;
    background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .page-subtitle {
    font-size: 16px;
    color: rgba(255,255,255,0.5);
    position: relative;
    z-index: 1;
  }

  .catalog {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px 120px;
  }

  .catalog-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .product-card {
    background: #101014;
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 24px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    position: relative;
  }

  .product-card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .product-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(212, 107, 124, 0.4);
    box-shadow: 0 30px 80px rgba(122, 42, 56, 0.3);
  }

  .product-image {
    height: 320px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-image.burgundy { background: radial-gradient(circle at 50% 45%, #5a1a26 0%, #1a0a10 65%, #101014 100%); }
  .product-image.silver { background: radial-gradient(circle at 50% 45%, #3a3a42 0%, #18181e 65%, #101014 100%); }
  .product-image.glacier { background: radial-gradient(circle at 50% 45%, #1e3148 0%, #0c141e 65%, #08080a 100%); }
  .product-image.black { background: radial-gradient(circle at 50% 45%, #1e1e24 0%, #0a0a0c 65%, #08080a 100%); }

  .product-photo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 24px;
    position: relative;
    z-index: 1;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
  }

  .product-card:hover .product-photo {
    transform: scale(1.08) rotate(-2deg);
  }

  .product-image::after {
    content: "";
    position: absolute;
    top: 0; left: -50%;
    width: 50%; height: 100%;
    background: linear-gradient(115deg, transparent, rgba(255,255,255,0.08), transparent);
    transform: skewX(-20deg);
    transition: left 0.7s;
    pointer-events: none;
    z-index: 2;
  }

  .product-card:hover .product-image::after { left: 150%; }

  .product-color-badge {
    position: absolute;
    top: 16px; left: 16px;
    z-index: 3;
    padding: 6px 12px;
    font-size: 10px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 12px;
    background: rgba(0,0,0,0.5);
    color: #fff;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
  }

  .product-color-badge.burgundy { color: #f5d5d8; }
  .product-color-badge.silver { color: #d8d8dc; }
  .product-color-badge.glacier { color: #e0ecf8; }
  .product-color-badge.black { color: #b8b8bc; }

  .product-info { padding: 24px 26px 26px; }

  .product-name {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
    letter-spacing: -0.3px;
  }

  .product-spec {
    font-size: 13px;
    color: rgba(255,255,255,0.45);
    margin-bottom: 18px;
  }

  .product-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product-price {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.6px;
  }

  .product-cta {
    padding: 10px 18px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    font-size: 13px;
    font-weight: 500;
    color: rgba(255,255,255,0.85);
    transition: all 0.2s;
  }

  .product-card:hover .product-cta {
    background: linear-gradient(135deg, #7a2a38, #4a1520);
    color: #fff;
    border-color: transparent;
    box-shadow: 0 8px 24px rgba(122, 42, 56, 0.5);
  }

  .loading {
    grid-column: 1 / -1;
    text-align: center;
    padding: 80px 20px;
    color: rgba(255,255,255,0.4);
    font-size: 15px;
  }

  footer {
    border-top: 1px solid rgba(255,255,255,0.05);
    padding: 48px 40px;
  }

  .footer-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .footer-logo {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .footer-logo svg { width: 18px; height: 22px; fill: #7a2a38; }

  .footer-links { display: flex; gap: 28px; }

  .footer-links a {
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 13px;
    transition: color 0.15s;
  }

  .footer-links a:hover { color: #fff; }

  .footer-copy { font-size: 12px; color: rgba(255,255,255,0.35); }

  @media (max-width: 1100px) { .catalog-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 900px) { .catalog-grid { grid-template-columns: repeat(2, 1fr); } }

  @media (max-width: 700px) {
    header { padding: 14px 20px; }
    .nav { display: none; }
    .page-hero { padding: 110px 20px 40px; }
    .catalog { padding: 0 20px 80px; }
    .catalog-grid { grid-template-columns: 1fr; gap: 16px; }
    .product-image { height: 280px; }
    .product-photo { padding: 16px; }
    .footer-inner { flex-direction: column; text-align: center; }
  }
</style>
</head>
<body>

  <header>
    <div class="header-inner">
      <a href="index.html" class="logo">
        <svg viewBox="0 0 24 30"><path d="M17.05 15.6c-.03-3.2 2.6-4.73 2.72-4.8-1.48-2.17-3.79-2.47-4.6-2.5-1.96-.2-3.82 1.15-4.82 1.15-1 0-2.53-1.12-4.16-1.09-2.14.03-4.11 1.25-5.21 3.16-2.22 3.85-.57 9.55 1.6 12.68 1.06 1.53 2.32 3.25 3.97 3.19 1.6-.07 2.2-1.03 4.13-1.03 1.93 0 2.47 1.03 4.16.99 1.72-.03 2.8-1.56 3.85-3.1 1.21-1.78 1.71-3.5 1.74-3.59-.04-.02-3.34-1.28-3.38-5.06zM14.03 6.4c.88-1.07 1.47-2.55 1.31-4.03-1.27.05-2.8.84-3.71 1.91-.81.94-1.53 2.45-1.34 3.9 1.42.11 2.86-.72 3.74-1.78z"/></svg>
        iSakha
      </a>

      <nav class="nav">
        <a href="catalog.html" class="active">Каталог</a>
        <a href="index.html#about">О нас</a>
        <a href="index.html#contacts">Контакты</a>
      </nav>

      <a href="cart.html" class="cart-link">
        <svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
        Корзина
        <span class="count hidden" id="cartCount">0</span>
      </a>
    </div>
  </header>

  <section class="page-hero">
    <div class="breadcrumbs">
      <a href="index.html">Главная</a>
      <span>·</span>
      <span style="color: rgba(255,255,255,0.7);">Каталог</span>
    </div>
    <h1 class="page-title">Каталог iPhone</h1>
    <p class="page-subtitle">Оригинальные устройства с гарантией и доставкой по Якутску</p>
  </section>

  <section class="catalog">
    <div class="catalog-grid" id="catalogGrid">
      <div class="loading">Загрузка товаров...</div>
    </div>
  </section>

  <footer>
    <div class="footer-inner">
      <a href="index.html" class="footer-logo">
        <svg viewBox="0 0 24 30"><path d="M17.05 15.6c-.03-3.2 2.6-4.73 2.72-4.8-1.48-2.17-3.79-2.47-4.6-2.5-1.96-.2-3.82 1.15-4.82 1.15-1 0-2.53-1.12-4.16-1.09-2.14.03-4.11 1.25-5.21 3.16-2.22 3.85-.57 9.55 1.6 12.68 1.06 1.53 2.32 3.25 3.97 3.19 1.6-.07 2.2-1.03 4.13-1.03 1.93 0 2.47 1.03 4.16.99 1.72-.03 2.8-1.56 3.85-3.1 1.21-1.78 1.71-3.5 1.74-3.59-.04-.02-3.34-1.28-3.38-5.06zM14.03 6.4c.88-1.07 1.47-2.55 1.31-4.03-1.27.05-2.8.84-3.71 1.91-.81.94-1.53 2.45-1.34 3.9 1.42.11 2.86-.72 3.74-1.78z"/></svg>
        iSakha
      </a>

      <div class="footer-links">
        <a href="catalog.html">Каталог</a>
        <a href="cart.html">Корзина</a>
        <a href="index.html#about">О нас</a>
        <a href="index.html#contacts">Контакты</a>
      </div>

      <div class="footer-copy">© 2026 iSakha. Якутск.</div>
    </div>
  </footer>

  <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-database-compat.js"></script>
  <script src="firebase-config.js"></script>

  <script>
    // ===== СЧЁТЧИК КОРЗИНЫ =====
    function updateCartCount() {
      try {
        const cart = JSON.parse(localStorage.getItem('isakha_cart') || '[]');
        const el = document.getElementById('cartCount');
        if (el) {
          if (cart.length > 0) {
            el.textContent = cart.length;
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        }
      } catch (e) {}
    }

    // ===== ЗАГРУЗКА ТОВАРОВ ИЗ FIREBASE =====
    const grid = document.getElementById('catalogGrid');

    db.ref('products').on('value', (snap) => {
      const products = snap.val() || {};
      const items = Object.entries(products).map(([id, p]) => ({ id, ...p }));

      if (items.length === 0) {
        grid.innerHTML = '<div class="loading">Товаров пока нет</div>';
        return;
      }

      grid.innerHTML = items.map(p => {
        const photo = p.photo || '';
        const color = p.color || 'burgundy';
        const colorName = p.colorName || color;
        const price = (p.price || 0).toLocaleString('ru-RU') + ' ₽';

        return `
          <a href="product.html?id=${p.id}" class="product-card">
            <div class="product-image ${color}">
              <div class="product-color-badge ${color}">${colorName}</div>
              <img src="${photo}" alt="${p.name}" class="product-photo" loading="lazy">
            </div>
            <div class="product-info">
              <div class="product-name">${p.name}</div>
              <div class="product-spec">${colorName} · ${p.storage || ''}</div>
              <div class="product-bottom">
                <div class="product-price">${price}</div>
                <div class="product-cta">Подробнее</div>
              </div>
            </div>
          </a>
        `;
      }).join('');

      // Анимация появления
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.product-card').forEach(el => observer.observe(el));
    });

    // ===== СЖАТИЕ ШАПКИ =====
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.style.padding = '12px 40px';
      } else {
        header.style.padding = '18px 40px';
      }
    });

    updateCartCount();
  </script>
</body>
</html>