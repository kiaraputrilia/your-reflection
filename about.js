// Get a reference to the .mask element.
const mask = document.querySelector('.mask');
const {mapRange} = gsap.utils;

// Add an event to catch mouse movements.
document.addEventListener('pointermove', (pos) => {
  
    // Calculate mouse position in %.
    let x = mapRange(
      0, window.innerWidth,
      0, 100, 
      pos.clientX
    );
    let y = mapRange(
      0, window.innerHeight,
      0, 100,
      pos.clientY
    );
  
    // Update the custom property values.
    gsap.set(mask,{
      '--mouse-x': x + '%'
    })
    gsap.set(mask,{
      '--mouse-y': y + '%'
    })
  
});

document.addEventListener('mousedown', () => {
  gsap.set(mask,{
    'display': 'none'
  })
});

document.addEventListener('mouseup', () => {
  gsap.set(mask,{
    'display': 'block'
  })
});
