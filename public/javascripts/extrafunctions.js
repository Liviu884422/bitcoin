Dom('#chartButton').bind('click',function() {
  displayChart();
});

Dom('#tableButton').bind('click',function() {
  displayTable();
})

function displayTable() {
  $("#table").slideToggle(900);
  $("#h2").slideToggle(900);
};

function displayChart() {
  $("#canvas-wrapper").slideToggle(900);
  $("#h1").slideToggle(900);
};


$('.header h1').hover(function(){
    $('.header h1').addClass('active');
    },
    function(){
    $('.header h1').removeClass('active');
        
    });

$('.header-container').dblclick(function(){
  $('.header-container').effect('bounce',{times:5},1400);
});
