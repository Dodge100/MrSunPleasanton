var { 
  OverlayScrollbars, 
  ScrollbarsHidingPlugin, 
  SizeObserverPlugin, 
  ClickScrollPlugin  
} = OverlayScrollbarsGlobal;

let mainStuff = document.getElementById("main-content");

window.onload = () => {
  mainStuff.style.animation = "fadeIn 0.5s";
  mainStuff.style.opacity = 1;
}

OverlayScrollbars(document.body, {
  scrollbars: {
    theme: 'os-theme-dark'
  }
})

function toggledesc(element) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
