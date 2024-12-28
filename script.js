// Disable scrolling by default
document.body.classList.add('no-scroll');

// Flag to track whether "Open Invitation" has been clicked
let invitationOpened = false;

// Get the Open Invitation button
const openInvitationButton = document.getElementById('open-invitation');

// Add event listener to the button
openInvitationButton.addEventListener('click', () => {
  // Enable scrolling
  document.body.classList.remove('no-scroll');
  invitationOpened = true; // Update the flag
  // Scroll to the next section
  document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
});

// Function to navigate to specific sections
function goToPage(sectionIndex) {
  const sections = [
    document.getElementById('section1'),
    document.getElementById('section2'),
    document.getElementById('section3'),
    document.getElementById('section4'),
    document.getElementById('section5')
  ];

  if (!invitationOpened) {
    // Prevent navigation if invitation not opened
    alert("Buka Tombol Undangan Dulu");
    return;
  }

  if (sections[sectionIndex]) {
    sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
  }
}

const map = L.map('map').setView([-6.200000, 106.816666], 15); // Replace with your coordinates

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
const marker = L.marker([-3.8406871,119.5205547]).addTo(map) // Replace with your coordinates
    .bindPopup('<b>Tempat Akad</b><br>Masjid Pallameang') // Add a popup
    .openPopup();


const urlParams = new URLSearchParams(window.location.search);
// Extract the 'to' parameter
const name = urlParams.get('to');
// Update the content based on the parameter
// Select the element to update
const personalizedMessage = document.getElementById('personalizedMessage');
if (name) {
  personalizedMessage.textContent = `${decodeURIComponent(name)}`;
} else {
  personalizedMessage.textContent = "Rifqi Site";
}

// slideshow section2
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}
