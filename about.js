//DOM load event
window.addEventListener("DOMContentLoaded", () => {

  const spotlight = document.querySelector('.spotlight');

  let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.99) 200px)';

  window.addEventListener('mousemove', e => updateSpotlight(e));

  window.addEventListener('mousedown', e => {

    spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.97) 150px)';

    updateSpotlight(e);

  });

  window.addEventListener('mouseup', e => {

    spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

    updateSpotlight(e);

  });

  function updateSpotlight(e) {

    spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

  }
});



// // Get a reference to the .mask element.
// const mask = document.querySelector('.mask');
// const {mapRange} = gsap.utils;

// // Add an event to catch mouse movements.
// document.addEventListener('pointermove', (pos) => {
  
//     // Calculate mouse position in %.
//     let x = mapRange(
//       0, window.innerWidth,
//       0, 100, 
//       pos.clientX
//     );
//     let y = mapRange(
//       0, window.innerHeight,
//       0, 100,
//       pos.clientY
//     );
  
//     // Update the custom property values.
//     gsap.set(mask,{
//       '--mouse-x': x + '%'
//     })
//     gsap.set(mask,{
//       '--mouse-y': y + '%'
//     })
  
// });

// document.addEventListener('mousedown', () => {
//   gsap.set(mask,{
//     'display': 'none'
//   })
// });

// document.addEventListener('mouseup', () => {
//   gsap.set(mask,{
//     'display': 'block'
//   })
// });


// // // Get a reference to the .mask element.
// // const mask = document.querySelector('.mask');
// // const { mapRange } = gsap.utils;

// // // Add an event to catch mouse movements.
// // document.addEventListener('mousemove', (pos) => {

// //     // Calculate mouse position in %.
// //     let x = mapRange(
// //         0, window.innerWidth,
// //         0, 100,
// //         pos.clientX
// //     );
// //     let y = mapRange(
// //         0, window.innerHeight,
// //         0, 100,
// //         pos.clientY
// //     );

// //     // Update the custom property values.
// //     gsap.set(mask, {
// //         '--mouse-x': x + '%',
// //         '--mouse-y': y + '%'
// //     })

// // });

// // document.addEventListener('mousedown', () => {
// //     gsap.set(mask, {
// //         'display': 'none'
// //     })
// // });

// // document.addEventListener('mouseup', () => {
// //     gsap.set(mask, {
// //         'display': 'block'
// //     })
// // });

