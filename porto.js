// Scroll smooth ke section About
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function showTab(tabId) {
  // Sembunyikan semua tab
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  // Nonaktifkan semua tombol
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });

  // Tampilkan tab yang dipilih
  document.getElementById(tabId).classList.add('active');

  // Aktifkan tombol yang sesuai
  event.target.classList.add('active');
}
