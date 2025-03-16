// Konsolga xabar chiqarish
console.log("Sayt yuklandi!");

// Tugma bosilganda ishlaydigan funksiya
function bosing() {
    alert("Siz tugmani bosdingiz!");
}

// Like tugmasi bosilganda ishlaydigan funksiya
function like() {
    let btn = document.querySelector(".btn2");
    btn.style.backgroundColor = "#2ecc71"; // Tugma yashil rangga o'zgaradi
    btn.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked'; // Matn o'zgaradi
}

// Rasmni almashtirish funksiyasi
function rasmniOzgartir() {
    let rasm = document.getElementById("myImage"); 
    let birinchiRasm = "photo_2025-03-11_15-14-08.jpg";
    let ikkinchiRasm = "photo_2025-03-11_21-33-28.jpg";

    // Hozirgi rasmni tekshirib, almashtirish
    if (rasm.src.includes(birinchiRasm)) {
        rasm.src = ikkinchiRasm;
    } else {
        rasm.src = birinchiRasm;
    }
}
