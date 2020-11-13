

//function for initialising AOS library
function animation() {
    AOS.init({
        duration: 3000, // durarion on animation
        easing: 'ease', // default easing for AOS animations
        offset: 0, // offset (in px) from the original trigger point
})
}

$(function() {
    AOS.init({
  duration: 3000,
})
});