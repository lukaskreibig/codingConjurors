let innerWrapper = document.querySelector('.inner-wrapper');
let outerWrapper = document.querySelector('.outer-wrapper')

//onscroll start function
outerWrapper.onscroll = () => { progressBar(); };

progressBar = () => {

  // position of Users scrolling
  let winScroll = outerWrapper.scrollTop;
  // complete scroll width of inner Wrapper - clientHeight from outer Wrapper = scrolled to 100%
  let width = innerWrapper.scrollWidth - outerWrapper.clientHeight;
  // position of user / width * 100 = percentage where user is
  let scrolled = (winScroll / width) * 100;
  // width of progress bar equals width of percentage where user is
  document.getElementById("progress-bar").style.width = scrolled + "%";
}