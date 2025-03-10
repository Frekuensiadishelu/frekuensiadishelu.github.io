const navbarToggler = document.querySelector(".navbar-toggler")
    navbarToggler.addEventListener("click", navbarChange)
    function navbarChange() {
      document.querySelector(".navbar-toggler-custom-icon").classList.toggle("change");
    }
    // document.addEventListener("DOMContentLoaded", () => {
    //   // Select the <nav> element
    //   const nav = document.querySelector("nav");

    //   if (!nav) {
    //     console.error("Nav element not found!");
    //     return;
    //   }

    //   // Function to change nav background color based on scroll position
    //   const handleScroll = () => {
    //     if (window.scrollY > 0) {
    //       nav.style.backgroundColor = "rgba(20, 20, 20, 1)"; // Dark color
    //     } else {
    //       nav.style.backgroundColor = "rgba(20, 20, 20, 0)"; // Transparent
    //     }
    //   };

    //   // Attach the scroll event listener
    //   window.addEventListener("scroll", handleScroll);
// });