const nav_button = document.querySelector("#nav-button");

// TODO: Figure this out numbnut. 
nav_button.addEventListener("click", () => {
    const nav = document.querySelector("#page-nav");
    const overlay = document.querySelector(".overlay");
    nav.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
});

