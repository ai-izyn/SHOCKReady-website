document.addEventListener("DOMContentLoaded", function() {
 
  const btn = document.getElementById("button");
  const menu = document.getElementById("dropMenu");


  // Safety check: only run if both elements exist on the current page
  if (btn && menu) {
   
    btn.addEventListener("click", function(event) {
      menu.classList.toggle("show");
      event.stopPropagation();
    });


    window.addEventListener("click", function() {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    });


  }
});
