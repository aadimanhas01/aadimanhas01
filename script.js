document.getElementById('dateYesButton').addEventListener('click', function() {
    const confirmation = confirm('Would you like to go on a date with Aadi?');
    if (confirmation) {
      document.body.style.backgroundColor = '#ff69b4'; // Change background color to pink
  
      showLoveFill();
      scrollToHearts();
  
      showEmojiAnimation('😍'); // Show a smiling face with love eyes
      setTimeout(() => {
        hideEmojiAnimation();
      }, 2000);
  
      alert('Great! Aadi will be in touch with you soon.');
      // You can add further actions here, like sending a message or redirecting to another page.
    } else {
      document.body.style.backgroundColor = '#ffffff'; // Change background color to white
      showEmojiAnimation('💔', 150); // Show a larger and darker broken heart emoji
      setTimeout(() => {
        hideEmojiAnimation();
      }, 5000);
      alert('No problem! Thank you for considering.');
    }
  });
  
  document.getElementById('dateNoButton').addEventListener('click', function() {
    document.body.style.backgroundColor = '#ffffff'; // Change background color to white
    showEmojiAnimation('💔', 150); // Show a larger and darker broken heart emoji
    setTimeout(() => {
      hideEmojiAnimation();
    }, 5000);
    alert('No problem! Thank you for considering.');
  });
  
  function showLoveFill() {
    const loveFill = document.getElementById('loveFill');
    const loveItems = ['💖', '❤️', '💕', '💞', '💗', '💓']; // Customize with more love icons if needed
  
    for (let i = 0; i < 100; i++) {
      const love = document.createElement('div');
      love.classList.add('love-item');
      love.innerHTML = loveItems[Math.floor(Math.random() * loveItems.length)];
      love.style.left = Math.random() * window.innerWidth + 'px';
      love.style.top = Math.random() * window.innerHeight + 'px';
      loveFill.appendChild(love);
    }
  }
  
  function scrollToHearts() {
    const loveFill = document.getElementById('loveFill');
    loveFill.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  function showEmojiAnimation(emoji, fontSize = 100) {
    const emojiAnimation = document.getElementById('emojiAnimation');
    emojiAnimation.innerHTML = emoji;
    emojiAnimation.style.fontSize = fontSize + 'px';
    emojiAnimation.style.opacity = '1';
  }
  
  function hideEmojiAnimation() {
    const emojiAnimation = document.getElementById('emojiAnimation');
    emojiAnimation.style.opacity = '0';
  }
  