// Simulating Donor Count Update and Progress Bar Fill
let donorCount = 0;  // Starting point
const targetDonors = 5000;  // Total target donors

const donorCountElement = document.getElementById('donor-count');
const progressBar = document.querySelector('.filled-bar');

function updateDonorCount() {
    if (donorCount < targetDonors) {
        donorCount += 10;  // Increment count (adjust speed by changing increment)
        donorCountElement.innerText = donorCount;
        
        // Calculate percentage progress
        let percentage = (donorCount / targetDonors) * 100;
        
        // Update progress bar width smoothly
        progressBar.style.width = percentage + '%';
        
        // Call the function again with a short delay to simulate the fast update
        setTimeout(updateDonorCount, 50); // Update every 50ms for smooth animation
    }
}

// Initialize the donor count update function
updateDonorCount();














// JavaScript to handle popup for emergency alerts
const subscribeButton = document.getElementById("subscribeButton");
const registerPopup = document.getElementById("registerPopup");
const closeRegister = document.getElementById("closeRegister");

// Show the popup when the Subscribe button is clicked
subscribeButton.addEventListener("click", function() {
    registerPopup.style.display = "block";  // Display the popup
});

// Close the popup when the close button is clicked
closeRegister.addEventListener("click", function() {
    registerPopup.style.display = "none";  // Hide the popup
});

// Close the popup if the user clicks anywhere outside the popup content
window.addEventListener("click", function(event) {
    if (event.target == registerPopup) {
        registerPopup.style.display = "none";  // Hide the popup
    }
});





























// Show the Donate Blood Form Modal when clicking the Donate Blood button
function showDonateForm() {
  document.getElementById('donate-form-container').style.display = 'flex';
}

// Close the Donate Blood Form Modal
function closeDonateForm() {
  document.getElementById('donate-form-container').style.display = 'none';
}

// Handle Donation Form Submission
document.getElementById('donate-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent actual form submission

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;
  const bloodType = document.getElementById('blood-type').value;

  // Basic Validation (Check if all fields are filled)
  if (name && email && phone && age && bloodType) {
    alert(`Thank you for donating blood, ${name}!\nYour details:\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}\nBlood Type: ${bloodType}`);
    // Reset form fields
    document.getElementById('donate-form').reset();
    closeDonateForm();  // Close the form after submission
  } else {
    alert('Please fill in all fields.');
  }
});

















// Show the Donate Blood Form Modal when clicking the Donate Blood button
function showDonateForm() {
    document.getElementById('donate-form-container').style.display = 'flex';
  }
  
  // Close the Donate Blood Form Modal
  function closeDonateForm() {
    document.getElementById('donate-form-container').style.display = 'none';
  }
  
  // Handle Donation Form Submission
  document.getElementById('donate-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent actual form submission
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const bloodType = document.getElementById('blood-type').value;
  
    // Basic Validation (Check if all fields are filled)
    if (name && email && phone && age && bloodType) {
      alert(`Thank you for donating blood, ${name}!\nYour details:\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}\nBlood Type: ${bloodType}`);
      // Reset form fields
      document.getElementById('donate-form').reset();
      closeDonateForm();  // Close the form after submission
    } else {
      alert('Please fill in all fields.');
    }
  });
  




















  function showDonateForm() {
    document.getElementById('donate-form-container').style.display = 'flex';
  }
  
  function showSearchForm() {
    document.getElementById('search-form-container').style.display = 'flex';
  }
  
  function showRequestForm() {
    document.getElementById('request-form-container').style.display = 'flex';
  }
  
  function showExchangeForm() {
    document.getElementById('exchange-form-container').style.display = 'flex';
  }
  
  function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
  }
  










  document.getElementById("search-button").addEventListener("click", function() {
    const form = document.getElementById("search-form");
    const bloodType = document.getElementById("blood-type").value;

    // Prevent default form submission
    fetch("{{ url_for('search_donors') }}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blood_type: bloodType }),
    })
    .then(response => response.json())
    .then(data => {
      // Update the search results
      const resultsContainer = document.createElement("div");
      resultsContainer.innerHTML = "<h3>Search Results</h3>";
      if (data.donors && data.donors.length > 0) {
        let resultsTable = "<table border='1'><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Blood Type</th><th>Address</th></tr></thead><tbody>";
        data.donors.forEach(donor => {
          resultsTable += `<tr><td>${donor[0]}</td><td>${donor[1]}</td><td>${donor[2]}</td><td>${donor[3]}</td><td>${donor[4]}</td></tr>`;
        });
        resultsTable += "</tbody></table>";
        resultsContainer.innerHTML += resultsTable;
      } else {
        resultsContainer.innerHTML += "<p>No donors found.</p>";
      }
      document.querySelector(".form").appendChild(resultsContainer);
    })
    .catch(error => console.error("Error:", error));
  });

  // Close button function to hide the form when necessary
  function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
  }



  










  
















  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/67860e9aaf5bfec1dbeb3661/1ihhqi3r8';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
