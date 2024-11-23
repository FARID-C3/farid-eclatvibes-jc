
const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("resenList");

reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const reviewText = document.getElementById("resenText").value.trim();
    const rating = document.getElementById("rating").value;
    const gender = document.getElementById("reviewGender").value;

    if (reviewText === "") {
        alert("Por favor, escribe una opinión.");
        return;
    }

    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
        <p><strong>Opinión:</strong> ${reviewText}</p>
        <p><strong>Calificación:</strong> ${"⭐".repeat(rating)}</p>
        <p><strong>Género:</strong> ${gender === "male" ? "Hombre" : "Mujer"}</p>
        <hr>
    `;

    reviewList.appendChild(reviewItem);


    reviewForm.reset();
});



function showProductModal() {
    document.getElementById("productModal").style.display = "block";
}

function showProductsButton() {
    document.getElementById("viewProducts").style.display = "block"; 
}
document.getElementById("closeModal")?.addEventListener("click", () => {
    document.getElementById("productModal").style.display = "none";
});
window.onclick = (event) => {
    const modal = document.getElementById("productModal");
    const womenModal = document.getElementById("womenProductModal");
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === womenModal) {
        womenModal.style.display = "none";
    }
};
document.getElementById("viewProducts")?.addEventListener("click", () => {
    showProductModal();
});

document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const reviewText = document.getElementById("reviewText").value;
    const rating = document.getElementById("rating").value;
    const gender = document.getElementById("reviewGender").value;

    if (reviewText) {
        const reviewList = document.getElementById("reviewList");

        }})