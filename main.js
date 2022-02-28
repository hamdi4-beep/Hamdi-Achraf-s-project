//Get the button
var mybutton = document.getElementById("myBtn");
const pageProgressBar = document.querySelector(".progress-bar")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

const scrollContainer = () => {
  return document.documentElement || document.body;
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
  document.documentElement.scrollIntoView({
    behavior: "smooth",
  });
}

// adding the progress bar logic
document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;
  pageProgressBar.style.width = `${scrolledPercentage}%`;
});