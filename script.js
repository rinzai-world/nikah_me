// Get references to relevant elements
const shortcuts = document.querySelector('.shortcuts');
const section1 = document.getElementById('section1');

// Function to check visibility of Section 1
function toggleShortcuts() {
  const section1Rect = section1.getBoundingClientRect();
  
  // If Section 1 is in view, hide shortcuts
  if (section1Rect.top >= 0 && section1Rect.bottom <= window.innerHeight) {
    shortcuts.style.display = 'none'; // Hide shortcuts
  } else {
    shortcuts.style.display = 'flex'; // Show shortcuts
  }
}

// Add event listener for scrolling and loading
window.addEventListener('scroll', toggleShortcuts);
window.addEventListener('load', toggleShortcuts);
document.body.classList.add('no-scroll');

// Get the Open Invitation button
const openInvitationButton = document.getElementById('open-invitation');
let invitationOpened = false; // Status undangan

function goToSection1() {
    const section1 = document.getElementById('section1');
    if (section1) {
        section1.scrollIntoView({ behavior: 'auto' }); // Pindah langsung ke Section 1
    }
}

// Handle page load
window.addEventListener('load', () => {
    // document.getElementById('section1').scrollIntoView({ behavior: 'auto' });
    document.body.classList.add('no-scroll');
    setTimeout(goToSection1, 0);
});

// Handle the "Open Invitation" button click
openInvitationButton.addEventListener('click', () => {
  document.body.classList.remove('no-scroll');
  document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
  invitationOpened=true;
});

// Daftar gambar untuk slideshow
const images = [
    "muslim.jpeg",
    "rifqi22.jpg",
    "paisa2.jpg",
    
];

let currentImageIndex = 0; // Index gambar saat ini
const imageElement = document.getElementById("imageFrame"); // Elemen gambar

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Perbarui index gambar
    imageElement.style.opacity = 0; // Tambahkan efek fade out

    setTimeout(() => {
        imageElement.src = images[currentImageIndex]; // Ganti gambar
        imageElement.style.opacity = 1; // Tambahkan efek fade in
    }, 500); // Sinkronkan dengan durasi fade out
}

// Ganti gambar setiap 3 detik
setInterval(changeImage, 3000);

// Function to navigate to specific sections
function goToPage(sectionIndex) {
  const sections = [
      document.getElementById('section1'),
      document.getElementById('section2'),
      document.getElementById('section3'),
      document.getElementById('section4'),
      document.getElementById('section5'),
      document.getElementById('section6')
  ];

  if (!invitationOpened) {
      // Prevent navigation if invitation not opened
      alert("Silakan tekan tombol untuk membuka undangan terlebih dahulu!");
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
    .bindPopup('<b>Tempat Acara</b><br>Masjid An-Nur Pallameang') // Add a popup
    .openPopup();


// Disable zoom controls on the map
map.zoomControl.remove();
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();


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



// slideshow section3
let slideIndex = 0;
let slideTimer; // Variabel untuk menyimpan timer

// Fungsi untuk menampilkan slide
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  // Hide all slides dan reset active dots
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Increment slideIndex
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  // Show the current slide dan aktifkan dot yang sesuai
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  // Reset timer untuk slide berikutnya
  slideTimer = setTimeout(showSlides, 3000);
}

// Fungsi untuk berpindah ke slide tertentu (ketika dot diklik)
function currentSlide(index) {
  clearTimeout(slideTimer); // Hentikan timer
  slideIndex = index - 1; // Atur slideIndex ke slide yang dipilih
  showSlides(); // Tampilkan slide yang dipilih
}

// Memulai slideshow saat halaman dimuat
showSlides();

// Data acara
const events = [
    {
        title: "Akad Pernikahan",
        dateText: "Rabu, 23 Januari 2025 (11.00 WITA)",
        date: new Date("2025-01-22T11:00:00").getTime() // Akad Pernikahan
    },
    {
        title: "Resepsi Pernikahan",
        dateText: "Kamis, 24 Januari 2025 (09.00 WITA)",
        date: new Date("2025-01-23T09:00:00").getTime() // Resepsi Pernikahan
    }
];

let currentEventIndex = 0; // Acara yang sedang aktif
const eventDateElement = document.getElementById("event-date");
const countdownTitle = document.getElementById("countdown-title");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Fungsi untuk memperbarui countdown
function updateCountdown() {
    const now = new Date().getTime();
    const event = events[currentEventIndex];
    const distance = event.date - now;

    if (distance >= 0) {
        // Hitung waktu tersisa
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Perbarui elemen countdown
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    } else {
        // Pindah ke acara berikutnya jika waktu habis
        switchEvent();
    }
}

// Fungsi untuk mengganti acara dengan animasi smooth
function switchEvent() {
    // Ambil elemen yang akan diperbarui
    const elementsToAnimate = [eventDateElement, countdownTitle];

    // Tambahkan kelas keluar (fade-out)
    elementsToAnimate.forEach(el => el.classList.add("smooth-transition-out", "inactive"));

    // Tunggu animasi fade-out selesai sebelum mengganti konten
    setTimeout(() => {
        currentEventIndex = (currentEventIndex + 1) % events.length; // Ganti acara

        // Perbarui teks
        const event = events[currentEventIndex];
        eventDateElement.textContent = event.dateText;
        countdownTitle.textContent = event.title;

        // Tambahkan kelas masuk (fade-in)
        elementsToAnimate.forEach(el => {
            el.classList.remove("smooth-transition-out", "inactive");
            el.classList.add("smooth-transition-in", "active");
        });

        // Hapus kelas masuk setelah animasi selesai
        setTimeout(() => {
            elementsToAnimate.forEach(el => el.classList.remove("smooth-transition-in"));
        }, 1000);
    }, 1000); // Waktu fade-out
}

// Perbarui countdown setiap detik
setInterval(updateCountdown, 1000);

// Ganti acara setiap 3 detik
setInterval(switchEvent, 4000);

// Jalankan countdown pertama kali
updateCountdown();


// Tombol Kirim Hadiah dan elemen Kartu Bank
const giftButton = document.getElementById('gift-button');
const bankCard = document.getElementById('bank-card');

// Event Listener untuk Tombol Kirim Hadiah
giftButton.addEventListener('click', () => {
    if (bankCard.style.display === "none" || !bankCard.classList.contains("show")) {
        bankCard.style.display = "block";
        bankCard.classList.add("show"); // Tambahkan animasi transisi
    } else {
        bankCard.style.display = "none";
        bankCard.classList.remove("show"); // Hilangkan animasi
    }
});

//RSVP
// Masukkan konfigurasi Firebase Anda di sini
const firebaseConfig = {
    apiKey: "AIzaSyBk4T201itx5tKE9vz3obpTb_CQb4e57ps",
    authDomain: "codev-286a4.firebaseapp.com",
    databaseURL: "https://codev-286a4.firebaseio.com",
    projectId: "codev-286a4",
    storageBucket: "codev-286a4.firebasestorage.app",
    messagingSenderId: "40054754716",
    appId: "1:40054754716:web:6b5521fe1ee902cfb68c59"
  };


// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById("rsvpForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah reload halaman
  
    // Ambil data dari input form
    const name = document.getElementById("name").value.trim();
    const guests = document.getElementById("guests").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Validasi input form
    if (!name || !message) {
      alert("Nama dan pesan wajib diisi.");
      return;
    }
  
    // Buat data objek dengan timestamp
    const rsvpData = {
      name: name,
      guests: parseInt(guests) || 1, // Default 1 jika kosong
      message: message,
      timestamp: Date.now(), // Timestamp saat ini (dalam milidetik)
    };
  
    // Simpan data ke Firebase
    firebase.database().ref("rsvp").push(rsvpData).then(() => {
      // Beri feedback kepada pengguna
      document.getElementById("responseMessage").textContent =
        "Pesan Anda telah terkirim!";
      document.getElementById("responseMessage").style.color = "green";
  
      // Reset form setelah berhasil submit
      document.getElementById("rsvpForm").reset();
    }).catch((error) => {
      console.error("Gagal menyimpan data:", error);
      alert("Terjadi kesalahan saat mengirim pesan.");
    });
  });

function addMessageToContainer(name, message, timestamp) {
    const messagesContainer = document.getElementById("rsvpMessagesContainer");
  
    // Buat elemen pesan baru
    const messageCard = document.createElement("div");
    messageCard.classList.add("rsvp-message-card");
  
    messageCard.innerHTML = `
      <h4>${name} <span style="font-size: 0.8rem; color: #888;">
      (${new Date(timestamp).toLocaleString()})</span></h4>
      <p>${message}</p>
    `;
  
    // Sisipkan pesan di awal kontainer
    messagesContainer.prepend(messageCard);
  }

  function loadMessages() {
    const messagesContainer = document.getElementById("rsvpMessagesContainer");
  
    // Ambil data dari Firebase dengan urutan terbaru
    firebase.database().ref("rsvp")
      .orderByChild("timestamp")
      .limitToLast(100) // Ambil maksimum 100 pesan terbaru
      .on("child_added", (snapshot) => {
        const data = snapshot.val();
        addMessageToContainer(data.name, data.message, data.timestamp);
      });
  }
  
  // Panggil fungsi saat halaman dimuat
  loadMessages();

// Reference to the RSVP messages container
const rsvpMessagesContainer = document.getElementById('rsvpMessagesContainer');

// Data akun bank
const bankAccounts = {
    rifqi: {
      accountNumber: "9067841890",
      accountHolder: "Rifqi Nabila Zufar",
      bankLogo: "bsi-PNG.png", // Logo Bank Rifqi
    },
    paisa: {
      accountNumber: "1030011166804",
      accountHolder: "Paisa",
      bankLogo: "mandiri.png", // Logo Bank Paisa
    },
  };
  
  function updateBankAccount() {
    // Ambil parameter 'from' dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const fromParam = decodeURIComponent(urlParams.get("from"));
  
    // Pilih akun berdasarkan parameter
    const selectedAccount = bankAccounts[fromParam.toLowerCase()] || bankAccounts["rifqi"];
  
    // Perbarui elemen di DOM
    const bankCard = document.getElementById("bank-card");
    const bankLogo = bankCard.querySelector(".bank-logo img");
    const accountNumberElement = bankCard.querySelector(".account-number");
    const accountHolderElement = bankCard.querySelector(".account-holder");
    const copyButton = bankCard.querySelector(".copy-button");
  
    // Set data akun
    if (selectedAccount) {
      bankLogo.src = selectedAccount.bankLogo;
      accountNumberElement.textContent = selectedAccount.accountNumber;
      accountHolderElement.textContent = `An. ${selectedAccount.accountHolder}`;
      copyButton.setAttribute("data-account-number", selectedAccount.accountNumber);
    }
  }
  
  // Fungsi untuk menyalin nomor rekening ke clipboard
  function copyToClipboard(buttonElement) {
    // Ambil nomor rekening dari tombol
    const accountNumber = buttonElement.getAttribute("data-account-number");
  
    // Buat elemen input sementara
    const tempInput = document.createElement("input");
    tempInput.value = accountNumber;
    document.body.appendChild(tempInput);
  
    // Pilih dan salin teks
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Untuk perangkat mobile
    document.execCommand("copy");
  
    // Hapus elemen input sementara
    document.body.removeChild(tempInput);
  
    // Berikan feedback visual pada tombol
    buttonElement.style.backgroundColor = "#28a745"; // Warna hijau
    buttonElement.textContent = "Tersalin!";
    setTimeout(() => {
      buttonElement.style.backgroundColor = "#b03a2e"; // Kembali ke warna semula
      buttonElement.textContent = "Salin No. Rekening";
    }, 2000); // Reset setelah 2 detik
  }
  
  // Panggil fungsi saat halaman dimuat
  updateBankAccount();

  const backgroundMusic = document.getElementById('backgroundMusic');
  let isMusicPlayed = false; // Status apakah musik sudah dimainkan
  
  // Fungsi untuk mulai memainkan musik
  function playMusic() {
    if (!isMusicPlayed) {
      backgroundMusic.play().then(() => {
        isMusicPlayed = true; // Tandai musik sudah dimainkan
        console.log("Musik mulai diputar");
      }).catch((error) => {
        console.error("Gagal memutar musik:", error);
      });
    }
  }
  
  // Event listener pada dokumen untuk interaksi pertama
  document.addEventListener('click', playMusic);

  let isMuted = false;

function toggleMusic() {
  isMuted = !isMuted;

  if (isMuted) {
    backgroundMusic.muted = true;
    document.getElementById('muteShortcut').innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    backgroundMusic.muted = false;
    document.getElementById('muteShortcut').innerHTML = '<i class="fas fa-volume-up"></i>';
  }
}

// Pilih semua section (1–7)
const sections = document.querySelectorAll("section");

// Fungsi untuk menambahkan/menghapus animasi berdasarkan visibilitas
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    const target = entry.target;

    if (entry.isIntersecting) {
      target.classList.add("visible"); // Tambahkan kelas animasi saat terlihat
    } else {
      target.classList.remove("visible"); // Hapus animasi saat tidak terlihat
    }
  });
};

// Atur observer options
const observerOptions = {
  root: null, // Menggunakan viewport sebagai root
  threshold: 0.2, // Jalankan callback saat 20% elemen terlihat
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
  section.classList.add("animated"); // Tambahkan kelas dasar animasi
  observer.observe(section);
});
