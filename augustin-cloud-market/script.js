document.addEventListener("DOMContentLoaded", () => {
  // Add to bag demo
  const addToBagBtn = document.querySelector(".add-to-bag-btn");
  if (addToBagBtn) {
    addToBagBtn.addEventListener("click", () => {
      alert("Item added to bag (demo). In a real shop, this would update the cart.");
    });
  }

  // Newsletter form
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterEmail = document.getElementById("newsletter-email");
  const newsletterMessage = document.getElementById("newsletter-message");

  if (newsletterForm && newsletterEmail && newsletterMessage) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (!email) {
        newsletterMessage.textContent = "Please enter a valid email address.";
        newsletterMessage.style.color = "#bb0000";
        return;
      }
      newsletterMessage.textContent = "Thank you. You are now subscribed to the Augustin Cloud Market newsletter.";
      newsletterMessage.style.color = "#007700";
      newsletterEmail.value = "";
    });
  }

  // Clicking product card scrolls to detail
  const productCards = document.querySelectorAll(".product-card");
  const detailSection = document.getElementById("product-beach-bag");

  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
