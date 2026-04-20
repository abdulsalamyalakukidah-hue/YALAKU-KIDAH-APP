// Intersection Observer Animation Code

const options = {
  root: null, // use the viewport as the container
  rootMargin: '0px',
  threshold: 0.1 // trigger when 10% of the target is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animation logic here
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Stop observing after animated
    }
  });
}, options);

// Target elements to observe
const targets = document.querySelectorAll('.animate-on-scroll');
targets.forEach(target => observer.observe(target));
