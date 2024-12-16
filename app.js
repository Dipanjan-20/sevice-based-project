// Toggle the sliding drawer
function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    if (drawer.style.right === "0px") {
      drawer.style.right = "-100%";
    } else {
      drawer.style.right = "0px";
    }
  }
  
  // Example: Dynamically set user details (replace these values after signup)
  window.onload = () => {
    const userName = "Jane Smith"; // Replace with data from signup
    const userEmail = "jane.smith@example.com"; // Replace with data from signup
    const profilePicUrl = ""; // Replace with user's uploaded profile pic URL
  
    document.getElementById("user-name").textContent = userName;
    document.getElementById("user-email").textContent = userEmail;
  
    const profilePic = document.getElementById("profile-pic");
    profilePic.src = profilePicUrl || "default-dp.png"; // Default image if no profile pic
  };
  
   document.getElementById('signup-form').addEventListener('submit', async function (event) {
      event.preventDefault(); // Prevent default behavior

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
          // Redirect to home page
          window.location.href = 'index.html';
        } else {
          const errorData = await response.json();
          alert(errorData.error || 'Error signing up. Try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    });
