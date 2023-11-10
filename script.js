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

  // // Initially hide the preloader
  // $('#preloader').hide();

  // // Listen for the button click
  // $('#load-page').click(function(){
  //   // Show the preloader
  //   $('#preloader').show();
  //   $('#load-page').hide();

  //   // Set a timeout to simulate the loading process
  //   setTimeout(function(){
  //     // When the simulated loading is complete, hide the preloader
  //     $('#preloader').hide();

  //     // Load the new HTML file
  //     window.location.href = 'FinalProject.html';
  //   }, 3000);
  // });
});
