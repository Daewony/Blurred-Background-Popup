const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".container-btn");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
    document.getElementById("email-input").value = "";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        containerEl.classList.remove("active");
        popupContainerEl.classList.add("active");
        document.getElementById("email-input").value = "";
    }
})
