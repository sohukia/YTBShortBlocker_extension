window.addEventListener('load', event => {
  console.log(event);
  
  short_menu_icon = document.querySelector('[aria-label="Shorts"]');



  setTimeout(() => {
    short_menu_icon.remove();
    console.log("Removed icon");
  }, 5000);
});
