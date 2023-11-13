$(document).ready(function(){
  // carousel init
  $('.carousel').carousel({
    padding: 100
  });

  // function for carousel autoplay
  setInterval(function(){
    $('.carousel').carousel('next');
  }, 3000);
  
  // Sidenav init
  $('.sidenav').sidenav();

  // Materialboxed init
  $('.materialboxed').materialbox();

  // Modal init
  $('.modal').modal();

  // Floating Action
  $('.fixed-action-btn').floatingActionButton({
    hoverEnabled: false,
    direction: 'left'
  });

  // Slider init
  $('.slider').slider({
    indicators: true
  });

  // Collapsible init
  $('.collapsible').collapsible();

  // Scrollspy init
  $('.scrollspy').scrollSpy();
});
