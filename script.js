document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const school = document.getElementById("school").value;

    // You can add more actions here like saving the data or generating the resume dynamically
    console.log({
        username,
        email,
        phone,
        degree,
        school
    });

    // For now, just show an alert
    alert("Resume generated! Check the console for the data.");
