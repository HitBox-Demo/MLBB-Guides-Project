window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Smoothly scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  }
    function handleSearch() {
        const searchInput = document.getElementById('searchText').value.trim();

        if (!searchInput) {
            alert('Please enter a search term.');
            return false; // Prevents form submission
        }

        // For demonstration, log the search term or redirect to a new URL
        console.log('Searching for:', searchInput);

        // You can redirect to a search results page, e.g.:
        // window.location.href = `/search?query=${encodeURIComponent(searchInput)}`;

        return false; // Prevents form submission
    }
    document.querySelector('.search-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const searchInput = document.querySelector('.search-input').value.trim();
      if (!searchInput) {
          alert('Please enter a search term.');
      } else {
          console.log('Searching for:', searchInput);
      }
  });
  
          // Adding interactivity for hover effects on cards
          VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 15,
            speed: 400,
        });


  // Show or hide the "Back to Top" button based on scroll position
  window.addEventListener("scroll", function () {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block"; // Show the button
    } else {
      backToTopButton.style.display = "none"; // Hide the button
    }
  });

  document.addEventListener('scroll', function () {
    var nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.querySelectorAll('.navbar-nav .nav-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.navbar-nav .active').classList.remove('active');
        item.classList.add('active');
    });
});

document.querySelectorAll('.faq-section').forEach(faq => {
  faq.addEventListener('click', function () {
      this.classList.toggle('open');
      const answer = this.querySelector('.faq-answer');
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Get all image items that have a tooltip
const imageItems = document.querySelectorAll('.image-item');

// Add event listener to each image item
imageItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const tooltip = item.querySelector('.tooltip');
        const offsetX = 10; // Adjust the X-axis offset from the cursor
        const offsetY = 10; // Adjust the Y-axis offset from the cursor

        // Update tooltip position based on the cursor's location
        tooltip.style.left = `${e.pageX + offsetX}px`;
        tooltip.style.top = `${e.pageY + offsetY}px`;
    });

    // Hide tooltip when the mouse leaves the image
    item.addEventListener('mouseleave', () => {
        const tooltip = item.querySelector('.tooltip');
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
