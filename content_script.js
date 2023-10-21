window.addEventListener('DOMDocumentLoaded', event => {
  console.log(event);
  
  short = document.querySelector('[aria-label="Shorts"]');

  console.log(short);
  setTimeout(()=>short.remove(), 5000);
});


// body.addEventListener('load', event => {
//   console.log(event);
// });