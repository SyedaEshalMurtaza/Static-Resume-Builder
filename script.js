document.getElementById('profilePic').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.getElementById('pfpPreview');
            imgElement.src = e.target.result;
            imgElement.style.display = 'inline-block'; // Show the image preview
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('generate').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const education = document.getElementById('education').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const skills = document.getElementById('skills').value.trim();

    // Validate input fields
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!email) {
        alert("Please enter your email.");
        return;
    }
    if (!phone) {
        alert("Please enter your phone number.");
        return;
    }
    if (!address) {
        alert("Please enter your address.");
        return;
    }
    if (!education) {
        alert("Please enter your education.");
        return;
    }
    if (!experience) {
        alert("Please enter your work experience.");
        return;
    }
    if (!skills) {
        alert("Please enter your skills.");
        return;
    }

    // Handle Profile Picture
    const profilePicSrc = document.getElementById('pfpPreview').src || 'No profile picture provided';

    // Create the resume output with HTML formatting
    const resume = `
        <div style="text-align: center;">
            <strong>Personal Information:</strong><br>
            <img src="${profilePicSrc}" class="profile-pic" alt="Profile Picture"><br>
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Address:</strong> ${address}<br>
        </div>
        <div>
            <strong>Education:</strong><br>
            ${education}<br>
        </div>
        <div>
            <strong>Work Experience:</strong><br>
            ${experience}<br>
        </div>
        <div>
            <strong>Skills:</strong><br>
            ${skills}<br>
        </div>
    `;

    // Display the resume output
    document.getElementById('output').innerHTML = resume;

    // Optional: Reset the form after generating the resume
    document.getElementById('resumeForm').reset(); // Assuming your form has an ID of 'resumeForm'
    document.getElementById('pfpPreview').style.display = 'none'; // Hide the profile picture preview
});