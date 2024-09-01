document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Collect food choices
    const foodChoices = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(food => {
        foodChoices.push(food.value);
    });

    // Ensure at least two food choices are selected
    if (foodChoices.length < 2) {
        alert("Please select at least two food choices.");
        return;
    }

    // Append values to the table
    const table = document.getElementById('tableBody');
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodChoices.join(", ")}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Clear the form fields
    document.getElementById('userForm').reset();
});
