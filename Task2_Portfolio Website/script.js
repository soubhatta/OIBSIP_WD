const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}








  // Get the about_title element
  var aboutTitle = document.querySelector('.about_title');

  // Add event listener for mouseover (hover)
  aboutTitle.addEventListener('mouseover', function() {
    // Add the 'bold' class when hovering
    aboutTitle.classList.add('bold');
  });

  // Add event listener for mouseout (hover out)
  aboutTitle.addEventListener('mouseout', function() {
    // Remove the 'bold' class when hover is out
    aboutTitle.classList.remove('bold');
  });

  

  