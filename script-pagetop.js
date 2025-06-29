const stickyElement = document.querySelector('.pagetop_a');
function onScroll() {
  if (window.pageYOffset > 300) {
    stickyElement.classList.add('visible'); //スクロール開始時に表示
  } else {
    stickyElement.classList.remove('visible'); //画面の一番上にいると非表示
  }
}
window.addEventListener('scroll', onScroll);
