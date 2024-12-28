/* Font Heading atau Nama */
/* h1, h2, h3, .great-vibes {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #b03a2e;
} */

/* Font untuk H1 */
h1 {
  font-family: 'Great Vibes', cursive; /* Font dekoratif */
  font-size: 3rem; /* Ukuran besar */
  color: #b03a2e; /* Warna aksen elegan */
  text-align: center; /* Perataan teks di tengah */
  margin-bottom: 2%;
}

/* Font untuk H2 */
h2 {
  font-family: 'Playfair Display', serif; /* Font elegan */
  font-size: 2.5rem; /* Ukuran sedang */
  color: #333; /* Warna teks utama */
  font-weight: bold;
  margin-bottom: 5%;
}

/* Font untuk H3 */
h3 {
  font-family: 'Lora', serif; /* Anggun dan klasik */
    font-size: 1.2rem;
    color: #252525;
    line-height: 1.8; 
}
.kaligrafi {
  font-family: 'Dancing Script', cursive; /* Dekoratif */
  font-size: 2rem;
  color: #b03a2e; /* Warna aksen */
  text-align: center;
  font-weight: 500;
}
/* Section 1 Background Image */
#section1 {
    background-image: url('Background1.png'); /* Replace with your image path */
    background-size: cover; /* Ensures the image covers the entire section */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
  }
  
  /* Image Frame Styling */
  .text-frame{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Frame width */
    height: 3%; /* Frame height */
    background-color: #b5d9ec; 
    /* border: 5px solid #4a5561; */
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Frame shadow */
    margin-top: 5%;
  }
  .text-frame2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Frame width */
    height: 3%; /* Frame height */
    background-color: #ccdee7; 
    /* border: 5px solid #4a5561; */
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Frame shadow */
  }
  .image-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px; /* Frame width */
    height: 250px; /* Frame height */
    /* background-color: #68acca;  */
    /* border: 5px solid #4a5561; */
    border-radius: 50%; /* Makes the frame circular */
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Frame shadow */
  }
  .main-picture {
    width: 90%;
    height: auto;
    border-radius: 50%;
  }
  
  /* Bouncing Button */
  .bounce-button {
    animation: bounce 2s infinite;
  }
  
  /* Disable Scrolling */
  body.no-scroll {
    overflow: hidden;
  }

  /* shortcut icon */
  /* Shortcut Bar */
.shortcuts {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 600px;
    padding: 15px 30px;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 1000;
}

.shortcut {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-size: 0.9em;
    cursor: pointer;
    animation: shortcutBounce 1.5s infinite alternate;
    
}

.shortcut i {
    font-size: 1.8em;
}

.shortcut:hover {
    color: #ffde59;
    transform: scale(1.2);
    transition: transform 0.3s ease;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
}

@keyframes shortcutBounce {
from {
    transform: translateY(0);
}
to {
    transform: translateY(-10px);
}
}

@keyframes fadeIn {
  from {
      opacity: 0;
      transform: translateY(30px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
}

.fade-in {
  opacity: 0; /* Elemen mulai tidak terlihat */
  animation: fadeIn 1.5s ease-out forwards; /* Efek muncul */
}

/* Tambahkan jeda pada animasi untuk elemen berbeda */
.fade-in:nth-child(1) {
  animation-delay: 0.3s;
}
.fade-in:nth-child(2) {
  animation-delay: 0.6s;
}
.fade-in:nth-child(3) {
  animation-delay: 0.9s;
}

/* GIF Styling */
.gif-container {
  position: absolute;
  z-index: 1;   /* Pastikan berada di belakang elemen lainnya */
}
.leaves-gif1 {
  width: 40%; /* Sesuaikan ukuran */
  height: auto;
  opacity: 0.8; /* Efek transparansi */
  animation: float 3s ease-in-out infinite; /* Tambahkan animasi */
}
.leaves-gif2 {
  width: 50%; /* Sesuaikan ukuran */
  height: auto;
  opacity: 0.8; /* Efek transparansi */
  animation: float 3s ease-in-out infinite; /* Tambahkan animasi */
}
/* Posisi Daun Kiri */
.left-leaf {
  top: -10vw; /* Jarak dari bawah */
  left: 0vw;   /* Jarak dari kiri */
  transform: scaleY(-1) ;
}
/* Posisi Daun Kanan */
.right-leaf {
  top: -10%; /* Jarak dari bawah */
  right: 0%;  /* Jarak dari kanan */
  transform: scaleY(-1) scaleX(-1);
}
.flower-gif {
  width: 100%; /* Ukuran GIF */
  height: auto;
  opacity: 0.9; /* Transparansi ringan */
  animation: float 5s ease-in-out infinite; /* Efek melayang */
}

/* Posisi Bunga di Tengah Atas */
.top-center {
  top: -10%; /* Jarak dari atas halaman */
  /* left: 50%;  */
  transform: translateX(-50%); /* Sesuaikan agar benar-benar di tengah */
}


/* Animasi untuk GIF */
@keyframes float {
  0%, 100% {
      transform: translateY(0);
  }
  50% {
      transform: translateY(-10px);
  }
}
