// Değerlendirme Formu 9
// Scroll fonks.
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    const navHeight = nav.clientHeight;

    if (window.scrollY > navHeight) {
        nav.classList.add('nav-scroll');
    } else {
        nav.classList.remove('nav-scroll');
    }
});

// Hamburger menu click
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    hamburgerMenu.classList.toggle('open');
    if (navMenu.classList.contains('show')) {
        navMenu.style.height = '0';
        navMenu.classList.remove('show');
    } else {
        navMenu.style.height = `${navMenu.scrollHeight}px`;
        navMenu.classList.add('show');
    }
});

// Değerlendirme Formu 11
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.classes-btns .btn-group .classes-btn');
    const sections = document.querySelectorAll('.classes > .container > .classes-section > div');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetClass = button.id;

            // Öncelikle tüm bölümleri gizle ve classes-chosen sınıfını kaldır
            sections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('classes-chosen');
            });

            // Tıklanan butona ait bölümü göster ve classes-chosen sınıfını ekle
            const targetSection = document.querySelector(`.${targetClass}`);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('classes-chosen');
            }

            buttons.forEach(btn => {
                btn.classList.remove('active-btn'); // Diğer butonlardan sınıfı kaldır
            });
            button.classList.add('active-btn');
        });
    });
});

// Değerlendirme Formu 8
// DOM elemanlarını seç
const heightInput = document.querySelector('.height > input');
const weightInput = document.querySelector('.weight > input');
const bmiResult = document.querySelector('.bmi-result h2');
const bmiPointer = document.querySelector('.bmi-pointer');

// BMI hesaplama fonksiyonu
function calculateBMI() {
    const height = parseFloat(heightInput.value); // cm olarak
    const weight = parseFloat(weightInput.value);

    // Geçerli değerler kontrolü
    if (!height || !weight || height <= 0 || weight <= 0) {
        bmiResult.textContent = 'Lütfen geçerli bir yükseklik ve ağırlık girin.';
        bmiPointer.style.right = '8.5'; // Pointer'ı sıfırla
        return;
    }

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1); // BMI formülü
    bmiResult.textContent = `Your BMI: ${bmi}`;

    // Pointer konumunu güncelle
    updatePointer(bmi);
}

// Pointer konumunu güncelleyen fonksiyon
function updatePointer(bmi) {
    let pointerRight;

    // BMI değerine göre pointer konumunu ayarla
    if (bmi > 35) {
        pointerRight = '16%';
    } else if (bmi >= 30 && bmi <= 34.9) {
        pointerRight = '32%';
    } else if (bmi >= 25 && bmi <= 29.9) {
        pointerRight = '48%';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        pointerRight = '65%';
    } else {
        pointerRight = '81%';
    }

    // Pointer'ın konumunu ayarla
    bmiPointer.style.right = pointerRight;
}

// Girdi değişikliklerini dinle
heightInput.addEventListener('input', calculateBMI);
weightInput.addEventListener('input', calculateBMI);
