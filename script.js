// script.js

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    root.innerHTML = `
        <h1 class="text-green">Welcome to Analoge Doge</h1>
        <div class="container">
            <p>This is a sample website for deployment on Vercel.</p>
            <button id="clickMe">Click Me</button>
        </div>
    `;

    const button = document.getElementById("clickMe");
    button.addEventListener("click", () => {
        alert("Button clicked!");
    });
});
