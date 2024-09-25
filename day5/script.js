// 뉴스레터 구독 버튼 
document.getElementById('subscribe').addEventListener('click', function() {
  var email = document.getElementById('email').value;
  if (email) {
      alert("Thank you for subscribing with: " + email);
  } else {
      alert("Please enter a valid email address.");
  }
});

// 캐러셀
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  if (index >= totalSlides) {
      currentSlide = 0;
  } else if (index < 0) {
      currentSlide = totalSlides - 1;
  } else {
      currentSlide = index;
  }
  slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// 초기 슬라이드 표시
showSlide(currentSlide);
