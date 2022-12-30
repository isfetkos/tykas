window.onload = function() {
    document.querySelector(".container").classList.add("fade-in");
  }
  const toggleMenu = document.querySelector('.toggle-menu');
  const navList = document.querySelector('.nav-list');
  const container = document.querySelector('.container');
  
  // Add an event listener to the toggle button
  toggleMenu.addEventListener('click', function() {
    // Toggle the display property of the nav list
    if (navList.style.display === 'flex') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'flex';
      toggleMenu.innerHTML = 'x'; // Set the innerHTML to the "x" symbol
      container.style.flexDirection = "column";
    }
  });
  // Add an event listener to the window
window.addEventListener('resize', function() {
  // Check the width of the window
  if (window.innerWidth > 1000) {
    // If the width is greater than 780 pixels, show the nav list
    navList.style.display = 'flex';
  } else {
    // If the width is less than or equal to 480 pixels, hide the nav list
    navList.style.display = 'none';
  }
});

