const WHATSAPP_NUMBER = "27710331241";
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const categories = [...new Set(products.map(p => p.category))].sort();
categories.forEach(category => {
  const option = document.createElement("option");
  option.value = category; option.textContent = category;
  categoryFilter.appendChild(option);
});
function whatsappLink(product) {
  const message = `Hello, I am interested in ordering ${product.name} (Product ${String(product.id).padStart(3,"0")}). Please provide more information about the price, availability, and delivery.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function renderProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = products.filter(p =>
    (category === "all" || p.category === category) &&
    `${p.name} ${p.category} ${p.description} ${p.id}`.toLowerCase().includes(term)
  );
  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name} - product ${String(p.id).padStart(3,"0")}" loading="lazy" onerror="this.onerror=null;this.src='images/product-001.jpg'">
        <span class="product-number">ITEM ${String(p.id).padStart(3,"0")}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-price">${p.price ? `R ${p.price}` : "Price on request"}</div>
        ${p.colours ? `<p><strong>Colours / variations:</strong> ${p.colours}</p>` : ""}
        <a class="product-order" href="${whatsappLink(p)}" target="_blank" rel="noopener">ORDER ON WHATSAPP ↗</a>
      </div>
    </article>`).join("");
  resultCount.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"}`;
  emptyState.hidden = filtered.length !== 0;
}
searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded","false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
