/**
 * BACK TO TOP BUTTON
 *-----------------------------------------------------------------------------------
 * todo 1. Define variables
 * todo 2. Calculate the document height and set the offset to 1/4 of that value
 * todo 3. Add event listeners for scroll and click
 *-----------------------------------------------------------------------------------
 */

let btt = document.getElementById("btt-btn"),
  body = document.body,
  docElem = document.documentElement,
  offset = 100,
  scrollPos,
  docHeight,
  isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

// todo 2.
docHeight = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  docElem.scrollHeight,
  docElem.offsetHeight,
  docElem.clientHeight
);

if (docHeight != "undefined") offset = docHeight / 4;

// todo 3. scroll
window.addEventListener("scroll", (event) => {
  scrollPos = body.scrollTop || docElem.scrollTop;

  btt.className = scrollPos > offset ? "" : "invisible";
});

// todo 3. click
// btt.addEventListener("click", (event) => {
//   event.preventDefault();
//   isFirefox === 1 ? (docElem.scrollTop = 0) : (body.scrollTop = 0);
// });

btt.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
