document.addEventListener('DOMContentLoaded',() => {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.sidenav.init(elems);

  var elems = document.querySelectorAll('.sidenav');
    var instances = M.sidenav.init(elems,{
      indicators: false,
      height:500,
      duration:500,
      Interval: 3000

    });


});

$(document).ready(function(){
  $('.slider').slider({
    height: 500
  });
});