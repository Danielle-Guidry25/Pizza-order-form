document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("pizzaOrderForm");
    const orderTableBody = document.getElementById("order-table").querySelector("tbody");

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the page from reloading

        // Grab values from each input
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const pizzaSize = document.getElementById("pizza-size").value;

        // Get selected toppings
        const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked'))
            .map(topping => topping.value)
            .join(", ");

        const specialInstructions = document.getElementById("special-instructions").value.trim();

        // Validate inputs
        if (!name || !email || !pizzaSize) {
            alert("Please fill out all required fields.");
            return;
        }

        // Create a new row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${pizzaSize}</td>
            <td>${toppings || "None"}</td>
            <td>${specialInstructions || "None"}</td>
            <td>${new Date().toLocaleString()}</td>
        `;

        // Append the new row to the table
        orderTableBody.appendChild(newRow);

        // Clear the form after adding the row
        orderForm.reset();
    });
});

// JSON configuration moved to a separate file or commented out properly
/*
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}",
            "sourceMaps": true
        }
    ]
}
*/