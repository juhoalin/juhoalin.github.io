

const buttonRight = document.getElementById('arrowRight');
const buttonLeft = document.getElementById('arrowLeft');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');

const projectBtnLeft = document.getElementById('projectArrowLeft');
const projectBtnRight = document.getElementById('projectArrowRight');

const scrollArrow = document.getElementById('scrollArrow');

buttonRight.onclick = function () {
  document.getElementById('container2').scrollIntoView({behavior: "smooth", block: "nearest"});
};

buttonLeft.onclick = function () {
  document.getElementById('container1').scrollIntoView({behavior: "smooth" , block: "nearest"});
};

projectBtnRight.onclick = function() {
  document.getElementById('project2').scrollIntoView({behavior: "smooth", block: "nearest"})
}

projectBtnLeft.onclick = function() {
  document.getElementById('project1').scrollIntoView({behavior: "smooth", block: "nearest"})
}

scrollArrow.onclick = function() {
  document.getElementById("secondPage").scrollIntoView({behavior: "smooth", block: "nearest"});
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

var popup = document.getElementById("popup");
var popuptext = document.getElementById("popuptext");
var copy = document.getElementById("copy");

function showEmail() {
    popuptext.firstChild.nodeValue = "juhoalin@icloud.com"
    popup.classList.toggle("show");
    popuptext.classList.toggle("show");
    copy.classList.toggle("show");
}

function showNumber() {
  popuptext.firstChild.nodeValue = "+358400235971";
  popup.classList.toggle("show");
  popuptext.classList.toggle("show");
  copy.classList.toggle("show");
}

document.getElementById("copy").onclick = function() {
      popup.classList.toggle("show");
      popuptext.classList.toggle("show");
      copy.classList.toggle("show");
}


document.getElementById("copy").addEventListener("click", copy_password);

function copy_password() {
    var copyText = document.getElementById("popuptext");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    alert("Copied to clipboard!");
}

document.getElementById("projectsButton").onclick = function() {
    document.getElementById("fourthPage").scrollIntoView({behavior: "smooth", block: "nearest"});
}

document.getElementById("journeyButton").onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById("nameButton").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById("scrollUp").onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
