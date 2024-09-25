document.addEventListener('DOMContentLoaded', function () {
  var ratingFill = document.getElementById('rating-fill');
  var rating = 3.6;
  var fillPercentage = (rating / 5) * 100;
  ratingFill.style.width = fillPercentage + '%';


  var carousel = document.querySelector('.carousel');
  var images = document.querySelectorAll('.carousel-image');
  var currentIndex = 0;
  var totalImages = images.length;

  document.querySelector('.next').addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
  });

  document.querySelector('.prev').addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
  });

  function updateCarousel() {
      var offset = -currentIndex * 600; 
      carousel.style.transform = 'translateX(' + offset + 'px)';
  }

  var reviewList = document.getElementById('review-list');
  var submitButton = document.getElementById('submit-review');

  submitButton.addEventListener('click', function() {
      var reviewText = document.getElementById('review-text').value;
      
      if (reviewText.trim() !== "") {
          var newReview = document.createElement('div');
          newReview.classList.add('review');
          newReview.innerHTML = `<p><strong>사용자:</strong> ${reviewText}</p>`;
          reviewList.appendChild(newReview);
          document.getElementById('review-text').value = "";
      }
  });


  var stars = document.querySelectorAll('.star');
  var selectedRatingElement = document.getElementById('selected-rating');
  var currentRatingElement = document.getElementById('current-rating');

  stars.forEach(function(star) {
      star.addEventListener('click', function() {
          var ratingValue = this.getAttribute('data-value');

          stars.forEach(function(s) {
              if (s.getAttribute('data-value') <= ratingValue) {
                  s.classList.add('selected');
              } else {
                  s.classList.remove('selected');
              }
          });
          selectedRatingElement.textContent = ratingValue;
          currentRatingElement.textContent = `평점 ${ratingValue} ★`;
      });
  });
});
