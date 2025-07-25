const now = new Date();

const future = new Date(now.getTime() + (20 * 60 * 60 + 14 * 60 + 47) * 1000)


console.log(future);
function updateCountdown() {
  const now = new Date(); // Hozirgi vaqtni olamiz
   // Qolgan millisekundni hisoblaymiz

   const totalMs = future - now

  if (totalMs <= 0) {
    // Agar vaqt tugagan bo‘lsa — hamma qiymatlarni 00 qilib qo‘yamiz
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    clearInterval(timerInterval); // Taymerni to‘xtatamiz
    return;
  }

  const hours = Math.floor(totalMs / (1000 * 60 * 60)); // Qolgan soatlar
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60); // Qolgan daqiqalar
  const seconds = Math.floor((totalMs / 1000) % 60); // Qolgan soniyalar

  // DOM elementlarini yangilaymiz
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Har 1 soniyada `updateCountdown` funksiyasini chaqiramiz
const timerInterval = setInterval(updateCountdown, 1000);

// Dastlabki bir marta funksiyani ishga tushiramiz
updateCountdown();
