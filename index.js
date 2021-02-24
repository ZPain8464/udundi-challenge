function hideMainContent() {
  document.getElementById("content-main").className = "hide";
  showReadMore();
}

function showReadMore() {
  document.getElementById("read-more-box").className = "show";
  document.getElementById("read-more-box").classList.add("animate");
}

function closeContentBox() {
  document.getElementById("read-more-box").className = "hide";
  showMainContent();
}

function showMainContent() {
  const element = document.getElementById("content-main");
  if (element.style.display === "") {
    element.className = "content-main";
  }
}
