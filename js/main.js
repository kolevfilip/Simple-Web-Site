// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 53.543572, lng: 9.985575 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    this.document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    this.document.querySelector("navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top - 100,
    });
    800;
  }
});

// $("a").click(function (e) {
//   $("html, body").animate(
//     {
//       scrollTop: $($(this).attr("href")).offset().top,
//     },
//     1000
//   );
// });
