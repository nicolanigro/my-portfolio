// ===============================
// Wait until page loads
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // PROJECT TOGGLE FUNCTIONALITY
    // ===============================
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const details = button.nextElementSibling;

            // Toggle visibility
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                button.textContent = "Show Details";
            }

        });
    });

    // ===============================
    // FORM VALIDATION
    // ===============================
    const form = document.getElementById("contactForm");
    const errorMsg = document.getElementById("formError");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check empty fields
        if (name === "" || email === "" || message === "") {
            errorMsg.textContent = "All fields are required.";
            return;
        }

        // Basic email check
        if (!email.includes("@")) {
            errorMsg.textContent = "Please enter a valid email.";
            return;
        }

        // Success
        errorMsg.textContent = "";
        alert("Form submitted successfully!");
        form.reset();
    });

});
