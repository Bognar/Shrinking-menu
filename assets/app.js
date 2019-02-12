// When the user scrolls down 80px from top start shrinking
window.onscroll = () => {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("img").style.width = "100px";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("img").style.width = "150px";
    document.getElementById("navbar").style.backgroundColor = "#f1f1f1";
  }
}