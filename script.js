/**
 * R SQUARE MOBILES — Interactive Storefront Engine
 */

// Generic Universal Accessories Dataset (No Brand Names)
const PRODUCTS = [
  // --- MOBILE CASES CATEGORY ---
  {
    id: 'case-01',
    name: 'Pro Magnetic Protective Case',
    price: '₹699',
    category: 'cases',
    categoryName: 'Mobile Cases',
    rating: 4.9,
    reviewsCount: 240,
    badge: 'Best Seller',
    isPopular: true,
    available: true,
    statusText: 'In Stock & Ready to Ship',
    imgSrc: 'images/case-magnetic.jpg',
    desc: 'Ultra-durable protective case with built-in magnetic ring for high-speed wireless charging.',
    specs: ['Universal Smartphone Model Fit', 'Strong Magnetic Array', 'Military-Grade Drop Protection', 'Raised Camera Bezel']
  },
  {
    id: 'case-02',
    name: 'Armor Shockproof Phone Case',
    price: '₹799',
    category: 'cases',
    categoryName: 'Mobile Cases',
    rating: 4.9,
    reviewsCount: 185,
    badge: 'Armor Series',
    isPopular: true,
    available: true,
    statusText: 'In Stock',
    imgSrc: 'images/case-armor.jpg',
    desc: 'Rugged dual-layer shockproof case with integrated foldable viewing kickstand.',
    specs: ['Precision Cutouts & Easy Grip', 'Built-in Foldable Kickstand', 'Corner Air-Pocket Protection', 'Heavy-Duty Impact Shield']
  },
  {
    id: 'case-03',
    name: 'Premium Eco-Leather Phone Case',
    price: '₹999',
    category: 'cases',
    categoryName: 'Mobile Cases',
    rating: 4.8,
    reviewsCount: 112,
    badge: 'Leather Edition',
    isPopular: false,
    available: true,
    statusText: 'In Stock',
    imgSrc: 'images/case-leather.jpg',
    desc: 'Premium eco-leather protective case custom tailored with soft inner lining.',
    specs: ['Genuine Grain Eco-Leather', 'Full Body Protection', 'Soft Microfiber Interior', 'Enhanced Anti-Slip Grip']
  },
  {
    id: 'case-04',
    name: 'Matte Clear TPU Phone Case',
    price: '₹499',
    category: 'cases',
    categoryName: 'Mobile Cases',
    rating: 4.7,
    reviewsCount: 94,
    badge: 'Clear Series',
    isPopular: false,
    available: true,
    statusText: 'In Stock',
    imgSrc: 'images/case-clear.jpg',
    desc: 'Anti-yellowing matte frosted translucent case with tactile click response buttons.',
    specs: ['Anti-Fingerprint Matte Coating', 'Tactile Response Buttons', 'Ultra-Slim 1.2mm Profile', 'Scratch Resistant Backplate']
  },

  // --- FAST CHARGERS CATEGORY ---
  {
    id: 'charger-65w',
    name: 'GaN Ultra 65W Triple Port Wall Charger',
    price: '₹2,199',
    category: 'chargers',
    categoryName: 'Fast Chargers',
    rating: 4.9,
    reviewsCount: 310,
    badge: 'Fast Charge',
    isPopular: true,
    available: true,
    statusText: 'Available in Stock',
    imgSrc: 'images/charger-gan.jpg',
    desc: 'Gallium Nitride high-speed charger with dual USB-C PD and USB-A ports for smartphones and tablets.',
    specs: ['Universal USB-C Power Delivery', '65W Max Fast Output', 'Compact GaN Technology', 'Smart Thermal Safety Guard']
  },
  {
    id: 'charger-wireless',
    name: '3-in-1 Foldable Wireless Charging Station',
    price: '₹2,499',
    category: 'chargers',
    categoryName: 'Fast Chargers',
    rating: 4.8,
    reviewsCount: 175,
    badge: 'Multi-Device',
    isPopular: true,
    available: true,
    statusText: 'Available in Stock',
    imgSrc: 'images/charger-wireless.jpg',
    desc: 'Simultaneously fast charges your smartphone, smartwatch, and wireless earbuds on one pad.',
    specs: ['Fast 15W Magnetic Wireless', 'Dedicated Watch & Earbud Mount', 'Compact Foldable Travel Design', 'Ambient LED Charge Indicator']
  },

  // --- POWER BANKS CATEGORY ---
  {
    id: 'powerbank-mag',
    name: 'MagPower 10,000mAh Magnetic Power Bank',
    price: '₹1,899',
    category: 'powerbanks',
    categoryName: 'Power Banks',
    rating: 4.9,
    reviewsCount: 225,
    badge: 'Best Seller',
    isPopular: true,
    available: true,
    statusText: 'In Stock',
    imgSrc: 'images/powerbank.jpg',
    desc: 'Slim wireless power bank with strong magnetic attachment and digital percentage display.',
    specs: ['10,000mAh Lithium-Polymer', '15W Wireless + 20W Cable Output', 'Digital LED Battery Screen', 'Passthrough Charging Support']
  },

  // --- AUDIO & EARPHONES CATEGORY ---
  {
    id: 'earbuds-anc',
    name: 'SonicPro ANC Wireless Earbuds',
    price: '₹2,999',
    category: 'audio',
    categoryName: 'Audio',
    rating: 4.8,
    reviewsCount: 160,
    badge: 'Active ANC',
    isPopular: true,
    available: true,
    statusText: 'In Stock',
    imgSrc: 'images/earbuds.jpg',
    desc: 'Active Noise Cancellation wireless earbuds with HD drivers and 32-hour playback battery case.',
    specs: ['Active Noise Cancellation', 'Bluetooth 5.3 Auto-Pairing', 'IPX5 Sweat & Water Resistant', 'Touch Sensor Controls']
  },
  {
    id: 'headphones-pro',
    name: 'StudioBass Over-Ear Wireless Headphones',
    price: '₹3,499',
    category: 'audio',
    categoryName: 'Audio',
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Hi-Fi Audio',
    isPopular: false,
    available: true,
    statusText: 'In Stock',
    imgSrc: 'images/headphones.jpg',
    desc: 'Premium wireless over-ear headphones with memory foam cushions and 50-hour battery life.',
    specs: ['40mm Dynamic Bass Drivers', '50-Hour Playtime Battery', 'Built-in Quad Mics for Calls', 'Dual Device Multipoint Connect']
  },

  // --- USB CABLES CATEGORY ---
  {
    id: 'cable-usbc',
    name: 'FlexBraid 100W USB-C Cable (2m)',
    price: '₹499',
    category: 'cables',
    categoryName: 'USB Cables',
    rating: 4.9,
    reviewsCount: 280,
    badge: 'Heavy Duty',
    isPopular: false,
    available: true,
    statusText: 'In Stock',
    imgSrc: 'images/cable.jpg',
    desc: 'Heavy-duty braided nylon charging cable supporting 100W Fast Charge and high-speed data transfer.',
    specs: ['100W Power Delivery', '2 Meter Reinforced Strain Relief', 'Smart Chip Built-in', '30,000+ Bend Cycle Tested']
  },

  // --- PHONE STANDS & MOUNTS CATEGORY ---
  {
    id: 'stand-desk',
    name: '360° Rotating Aluminum Desk Phone Stand',
    price: '₹899',
    category: 'accessories',
    categoryName: 'Accessories',
    rating: 4.8,
    reviewsCount: 98,
    badge: 'Ergonomic',
    isPopular: false,
    available: true,
    statusText: 'In Stock',
    imgSrc: 'images/stand.jpg',
    desc: 'Heavy-duty aluminum desk holder with 360-degree rotation wheel and anti-slip silicone pads.',
    specs: ['360° Smooth Rotation', 'Adjustable Height & View Angle', 'Fits All Smartphone Sizes', 'Cable Pass-Through Hole']
  },
  {
    id: 'mount-car',
    name: 'MagDrive Magnetic Car Vent Phone Mount',
    price: '₹799',
    category: 'accessories',
    categoryName: 'Accessories',
    rating: 4.7,
    reviewsCount: 88,
    badge: 'Car Gear',
    isPopular: false,
    available: true,
    statusText: 'In Stock',
    imgSrc: 'images/mount-car.jpg',
    desc: 'Ultra-strong magnetic car air-vent mount with 360-degree ball joint for effortless one-hand navigation.',
    specs: ['Strong Magnetic Grip', 'Twist-Lock Air Vent Clamp', '360° Swivel Ball Joint', 'Universal Phone Mount']
  }
];

// DOM Elements Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProducts(PRODUCTS);
  initCategoryFilters();
  initSearch();
  initFAQAccordion();
  initContactForm();
});

/* ==========================================================================
   NAVBAR TOGGLE
   ========================================================================== */
function initNavbar() {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* ==========================================================================
   PRODUCT CATALOG RENDERING (With INR Prices & IST Local Support)
   ========================================================================== */
function renderProducts(productList) {
  const gridContainer = document.getElementById('productGrid');
  if (!gridContainer) return;

  if (productList.length === 0) {
    gridContainer.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 1rem; opacity:0.5;">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <h3>No accessories found</h3>
        <p>Try searching for a different keyword or select another category.</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = productList.map(item => `
    <article class="product-card" data-id="${item.id}" data-category="${item.category}">
      <div class="card-top">
        <span class="badge-tag ${item.isPopular ? 'popular' : ''}">${item.badge}</span>
        <div class="rating-stars">
          ★ ${item.rating} <span>(${item.reviewsCount})</span>
        </div>
      </div>

      <div class="card-icon-wrap">
        <img class="product-img" src="${item.imgSrc}" alt="${item.name}" loading="lazy"
          onerror="this.replaceWith(createImageFallback('${item.category}'))">
      </div>

      <h3>${item.name}</h3>
      <p>${item.desc}</p>

      <div class="card-bottom" style="display:flex; justify-content:space-between; align-items:center;">
        <span class="product-price" style="font-size:1.2rem; font-weight:800; color:var(--accent-cyan); font-family:var(--font-heading);">${item.price}</span>
        <span class="availability-status">
          <span class="status-dot"></span> Available
        </span>
      </div>
    </article>
  `).join('');
}

// Category-specific icon markup so a placeholder actually looks like the
// kind of product it represents (a case looks like a case, a charger looks
// like a charger, etc) instead of one generic broken-image glyph for
// everything. Swapped out automatically once real photos are added to
// images/ with matching filenames (see PRODUCTS above).
const CATEGORY_ICONS = {
  cases: `
    <svg viewBox="0 0 64 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="56" height="80" rx="14" stroke="currentColor" stroke-width="3"/>
      <rect x="4" y="4" width="56" height="80" rx="14" fill="currentColor" fill-opacity="0.06"/>
      <circle cx="46" cy="16" r="5" stroke="currentColor" stroke-width="2.5" fill="none"/>
      <circle cx="46" cy="16" r="1.6" fill="currentColor"/>
      <rect x="18" y="12" width="12" height="3" rx="1.5" fill="currentColor"/>
    </svg>`,
  chargers: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="44" height="44" rx="12" stroke="currentColor" stroke-width="3"/>
      <rect x="10" y="10" width="44" height="44" rx="12" fill="currentColor" fill-opacity="0.06"/>
      <path d="M35 20 L24 36 H32 L29 46 L42 28 H34 L35 20 Z" fill="currentColor"/>
    </svg>`,
  powerbanks: `
    <svg viewBox="0 0 44 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="4" width="12" height="6" rx="2" fill="currentColor"/>
      <rect x="4" y="10" width="36" height="58" rx="8" stroke="currentColor" stroke-width="3"/>
      <rect x="4" y="10" width="36" height="58" rx="8" fill="currentColor" fill-opacity="0.06"/>
      <path d="M25 24 L15 42 H21 L18 54 L29 36 H23 L25 24 Z" fill="currentColor"/>
    </svg>`,
  audio: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 34V26a18 18 0 0 1 36 0v8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <rect x="8" y="32" width="12" height="20" rx="6" stroke="currentColor" stroke-width="3" fill="currentColor" fill-opacity="0.06"/>
      <rect x="44" y="32" width="12" height="20" rx="6" stroke="currentColor" stroke-width="3" fill="currentColor" fill-opacity="0.06"/>
    </svg>`,
  cables: `
    <svg viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="18" width="12" height="12" rx="2" fill="currentColor"/>
      <rect x="56" y="18" width="12" height="12" rx="2" fill="currentColor"/>
      <path d="M16 24 Q 30 8, 36 24 T 56 24" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    </svg>`,
  accessories: `
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="6" width="16" height="26" rx="3" stroke="currentColor" stroke-width="3" fill="currentColor" fill-opacity="0.06"/>
      <path d="M32 32 L32 46" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path d="M18 58 L32 46 L46 58" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="12" y1="58" x2="52" y2="58" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    </svg>`
};

// Creates a category-relevant placeholder shown in place of a product photo
// that fails to load (e.g. no images/ folder uploaded yet).
function createImageFallback(category) {
  const wrap = document.createElement('div');
  wrap.className = 'product-img-fallback';
  wrap.innerHTML = CATEGORY_ICONS[category] || CATEGORY_ICONS.accessories;
  return wrap;
}

/* ==========================================================================
   CATEGORY & SEARCH FILTERS
   ========================================================================== */
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.tab-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      const searchInput = document.getElementById('searchInput');
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

      filterProductList(category, searchTerm);
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const activeTab = document.querySelector('.tab-btn.active');
    const category = activeTab ? activeTab.getAttribute('data-category') : 'all';

    filterProductList(category, searchTerm);
  });
}

function filterProductList(category, searchTerm) {
  let filtered = PRODUCTS;

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (searchTerm) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchTerm) || 
      p.desc.toLowerCase().includes(searchTerm) ||
      p.categoryName.toLowerCase().includes(searchTerm) ||
      p.specs.some(s => s.toLowerCase().includes(searchTerm))
    );
  }

  renderProducts(filtered);
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

/* ==========================================================================
   CONTACT FORM & EXCEL SPREADSHEET STORAGE CONNECTIVITY
   ========================================================================== */
async function renderLiveSubmissionsTable() {
  const container = document.getElementById('liveSubmissionsContainer');
  if (!container) return;

  const records = await window.getContactSubmissions();

  if (!records || records.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem 1rem; color:var(--text-muted);">
        <p style="font-size:1rem; margin-bottom:0.25rem;">No submissions found in Excel spreadsheet yet.</p>
        <p style="font-size:0.85rem;">Fill out the form above to add an entry dynamically to <code>contact_submissions.xlsx</code>!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
      <span style="font-size:0.875rem; color:var(--text-muted);">Total Rows Stored in Excel File: <strong style="color:var(--accent-cyan);">${records.length}</strong></span>
      <a href="/api/download-excel" target="_blank" download="contact_submissions.xlsx" class="btn btn-primary btn-sm" style="text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem;">
        📥 Download File (.xlsx)
      </a>
    </div>
    <table style="width:100%; border-collapse:collapse; font-size:0.85rem; color:var(--text-bright); text-align:left; min-width:650px;">
      <thead>
        <tr style="border-bottom:1px solid rgba(0,242,254,0.3); background:rgba(0,242,254,0.05); color:var(--accent-cyan);">
          <th style="padding:0.75rem;">ID</th>
          <th style="padding:0.75rem;">Full Name</th>
          <th style="padding:0.75rem;">Email Address</th>
          <th style="padding:0.75rem;">Mobile Number</th>
          <th style="padding:0.75rem;">Device Model</th>
          <th style="padding:0.75rem;">Message</th>
          <th style="padding:0.75rem;">Date & Time</th>
        </tr>
      </thead>
      <tbody>
        ${records.map(r => `
          <tr style="border-bottom:1px solid var(--border-subtle);">
            <td style="padding:0.75rem; font-weight:bold; color:var(--accent-cyan);">#${r.id}</td>
            <td style="padding:0.75rem; font-weight:600;">${escapeHtml(r.name)}</td>
            <td style="padding:0.75rem; color:var(--text-muted);">${escapeHtml(r.email)}</td>
            <td style="padding:0.75rem;">${escapeHtml(r.phone)}</td>
            <td style="padding:0.75rem;">${escapeHtml(r.device || 'N/A')}</td>
            <td style="padding:0.75rem; max-width:220px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(r.message)}</td>
            <td style="padding:0.75rem; font-size:0.75rem; color:var(--text-dim);">${escapeHtml(r.created_at || r.formattedTime || '')}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function initContactForm() {
  const contactForm = document.getElementById('contactForm');

  // Load existing records on page load
  renderLiveSubmissionsTable();

  const refreshBtn = document.getElementById('refreshSubmissionsBtn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      renderLiveSubmissionsTable();
      showToast('Refreshed submissions from Excel file');
    });
  }

  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value?.trim() || 'Customer';
    const email = document.getElementById('contactEmail')?.value?.trim() || '';
    const phone = document.getElementById('contactPhone')?.value?.trim() || '';
    const device = document.getElementById('contactDevice')?.value?.trim() || '';
    const message = document.getElementById('contactMessage')?.value?.trim() || '';

    const payload = { name, email, phone, device, message };

    try {
      // Send to Python Excel Server
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        showToast(`Thank you, ${name}! Your entry was dynamically appended to contact_submissions.xlsx.`);
        contactForm.reset();
        await renderLiveSubmissionsTable();
        return;
      }
    } catch (err) {
      console.warn('Backend server not reachable, saving to local browser memory fallback:', err);
    }

    // Fallback: Save to localStorage if server isn't running directly
    try {
      const submission = {
        id: 'sub_' + Date.now(),
        ...payload,
        created_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST'
      };
      const existing = JSON.parse(localStorage.getItem('rsquare_contact_submissions') || '[]');
      existing.push(submission);
      localStorage.setItem('rsquare_contact_submissions', JSON.stringify(existing));
    } catch (e) {}

    showToast(`Thank you, ${name}! Your inquiry has been saved.`);
    contactForm.reset();
    await renderLiveSubmissionsTable();
  });
}

// Global helper function to view saved contact submissions from Excel File or Local Storage
window.getContactSubmissions = async function() {
  try {
    const res = await fetch('/api/submissions');
    if (res.ok) {
      const excelSubmissions = await res.json();
      console.log('=== EXCEL SPREADSHEET SUBMISSIONS ===');
      console.table(excelSubmissions);
      return excelSubmissions;
    }
  } catch (err) {}

  const localSubmissions = JSON.parse(localStorage.getItem('rsquare_contact_submissions') || '[]');
  console.log('=== LOCALSTORAGE SUBMISSIONS (Fallback) ===');
  console.table(localSubmissions);
  return localSubmissions;
};

window.clearContactSubmissions = function() {
  localStorage.removeItem('rsquare_contact_submissions');
  console.log('All contact submissions cleared.');
};

// Modal UI for viewing Excel Spreadsheet submissions
document.addEventListener('DOMContentLoaded', () => {
  const viewBtn = document.getElementById('viewSubmissionsBtn');
  const modal = document.getElementById('submissionsModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const content = document.getElementById('modalSubmissionsContent');

  if (viewBtn && modal) {
    viewBtn.addEventListener('click', async () => {
      modal.showModal();
      content.innerHTML = '<p style="color:var(--text-muted);">Fetching records from Excel spreadsheet...</p>';
      
      const records = await window.getContactSubmissions();
      
      if (!records || records.length === 0) {
        content.innerHTML = `
          <div style="text-align:center; padding:2rem 1rem; color:var(--text-muted);">
            <p style="font-size:1.1rem; margin-bottom:0.5rem;">No Excel spreadsheet records found yet.</p>
            <p style="font-size:0.85rem;">Submit the contact form above to add an entry!</p>
          </div>
        `;
        return;
      }

      content.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <span style="font-size:0.9rem; color:var(--text-muted);">Showing <strong>${records.length}</strong> entries stored in Excel spreadsheet.</span>
          <a href="/api/download-excel" target="_blank" download="contact_submissions.xlsx" class="btn btn-primary btn-sm" style="text-decoration:none;">
            📥 Download Excel File (.xlsx)
          </a>
        </div>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem; color:var(--text-bright); text-align:left;">
          <thead>
            <tr style="border-bottom:1px solid rgba(0,242,254,0.3); background:rgba(0,242,254,0.05); color:var(--accent-cyan);">
              <th style="padding:0.75rem;">ID</th>
              <th style="padding:0.75rem;">Full Name</th>
              <th style="padding:0.75rem;">Email Address</th>
              <th style="padding:0.75rem;">Mobile Number</th>
              <th style="padding:0.75rem;">Device Model</th>
              <th style="padding:0.75rem;">Message</th>
              <th style="padding:0.75rem;">Submission Date</th>
            </tr>
          </thead>
          <tbody>
            ${records.map(r => `
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <td style="padding:0.75rem; font-weight:bold; color:var(--accent-cyan);">#${r.id}</td>
                <td style="padding:0.75rem; font-weight:600;">${escapeHtml(r.name)}</td>
                <td style="padding:0.75rem; color:var(--text-muted);">${escapeHtml(r.email)}</td>
                <td style="padding:0.75rem;">${escapeHtml(r.phone)}</td>
                <td style="padding:0.75rem;">${escapeHtml(r.device || 'N/A')}</td>
                <td style="padding:0.75rem; max-width:200px;">${escapeHtml(r.message)}</td>
                <td style="padding:0.75rem; font-size:0.75rem; color:var(--text-dim);">${escapeHtml(r.created_at || r.formattedTime || '')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    });

    closeBtn?.addEventListener('click', () => modal.close());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.close();
    });
  }
});

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--accent-cyan)" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
