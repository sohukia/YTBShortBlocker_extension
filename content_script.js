window.addEventListener('load', _e => {
  let del = [
      () => {
          document.querySelector('[title="Shorts"]').parentElement.style.display = 'none'
      },
      () => {
          document.querySelector('[is-shorts=""]').parentElement.parentElement.style.display = 'none'
      },
      () => {
          document.querySelector('[aria-label="Shorts"]').style.display = 'none';
      }
  ]
  counter = 0
  let it = setInterval(() => {
      let indexesToDelete = [];
      for (let i = 0; i < del.length; i++) {
          const fn = del[i];
          try {
              fn();
              indexesToDelete.push(i);
          } catch (error) { }
      }

      for (let i = indexesToDelete.length - 1; i <= 0; i--) {
          const el = indexesToDelete[i];
          del.pop(el);
      }

      if(del.length === 0) {
          clearInterval(it);
      }
  }, 500);
});
