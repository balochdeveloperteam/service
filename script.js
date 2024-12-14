// Toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
}

// Scroll sections and sticky header
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('header nav a');

if (header && navLinks) {
  window.onscroll = () => {
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar links or on scroll
    if (menuIcon && navbar) {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    }
  };
}

// Active menu item based on current page URL
const navItems = document.querySelectorAll("nav ul li a");
if (navItems) {
  for (let i = 0; i < navItems.length; i++) {
    if (navItems[i].href === window.location.href) {
      navItems[i].className = "active";
    }
  }
}

// Course page tab functionality
const tabButtons = document.querySelectorAll('.btn-contain button');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons && tabContents) {
  function openTab(tabIndex) {
    tabContents.forEach((tab, index) => {
      if (index + 1 === tabIndex) {
        tab.classList.add('active-tab-content');
      } else {
        tab.classList.remove('active-tab-content');
      }
    });

    tabButtons.forEach((button, index) => {
      if (index + 1 === tabIndex) {
        button.classList.add('active-tab');
      } else {
        button.classList.remove('active-tab');
      }
    });
  }
}

// Course page accordion functionality
const accordions = document.getElementsByClassName("accordion");

if (accordions) {
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

// Service page moving text
const movingText = document.querySelector('.moving-text-pg-sr');

if (movingText) {
  movingText.addEventListener('mouseover', () => {
    movingText.style.animationPlayState = 'paused';
  });

  movingText.addEventListener('mouseout', () => {
    movingText.style.animationPlayState = 'running';
  });
}

// Service page TikTok tabs functionality
function openServiceTab(evt, tabName) {
  const tabContents = document.getElementsByClassName("tabcontent-tiktok");
  const tabLinks = document.getElementsByClassName("tablink-tiktok");

  if (tabContents) {
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
    }
  }

  if (tabLinks) {
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
  }

  const currentTab = document.getElementById(tabName);
  if (currentTab) {
    currentTab.classList.add("active");
  }
  
  if (evt.currentTarget) {
    evt.currentTarget.classList.add("active");
  }
}

// Service page client logo moving

document.querySelectorAll('.client-logo-lt-right, .client-logo-rt-left').forEach(container => {
  container.addEventListener('mouseover', () => {
      container.style.animationPlayState = 'paused';
  });
  container.addEventListener('mouseout', () => {
      container.style.animationPlayState = 'running';
  });
});

//service page design planning section

(function () {
  const items = document.querySelectorAll('.accordion-planning-sec button');

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    // Set all items to 'false'
    items.forEach((item) => item.setAttribute('aria-expanded', 'false'));

    // Toggle the clicked item
    if (itemToggle === 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach((item) => item.addEventListener('click', toggleAccordion));
})();
