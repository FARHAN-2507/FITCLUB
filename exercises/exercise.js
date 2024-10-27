
const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach(item => {
  item.addEventListener('click', () => {
    const videos = item.querySelector('.videos');
    videos.style.display = (videos.style.display === 'block') ? 'none' : 'block';
  });
});
span.classList.toggle("active");