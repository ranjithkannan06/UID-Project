document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const productCards = document.querySelectorAll(".product-card");
  const modal = document.getElementById("productModal");
  const closeModal = document.querySelector(".close-modal");
  const modalBody = document.querySelector(".modal-body");

  // Toggle Mobile Navigation
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("active");
  });

  // Open Modal on Product Click
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      const productId = card.getAttribute("data-product-id");
      const productName = card.querySelector(".product-name").textContent;
      const price = card.querySelector(".price").textContent;
      const imageSrc = card.querySelector(".product-image").src;
      const altText = card.querySelector(".product-image").alt;

      modal.querySelector(".modal-image").src = imageSrc;
      modal.querySelector(".modal-image").alt = altText;
      modal.querySelector(".modal-title").textContent = productName;
      modal.querySelector(".modal-price").textContent = price;
      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  // Close Modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  });

  // Close Modal on Outside Click
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "auto";
    }
  });

  // Handle Modal Options (Placeholder for functionality)
  document.querySelectorAll(".modal-option").forEach((button) => {
    button.addEventListener("click", (e) => {
      const action = e.target.getAttribute("data-action");
      const productName = modal.querySelector(".modal-title").textContent;
      alert(`Action: ${action} for ${productName}`);
      // Add your logic here (e.g., cart functionality, redirect to details page)
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "auto";
    });
  });

  // Add scroll event for header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      document.querySelector(".header").classList.add("scrolled");
    } else {
      document.querySelector(".header").classList.remove("scrolled");
    }
  });
});
