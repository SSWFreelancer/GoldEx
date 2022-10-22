$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
     $('.header__top, .header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });

   $('.menu__item').click(function (event) {
      $('.header__top, .header__burger, .menu').removeClass('active');
      $('body').removeClass('lock');
   }); 


      var tab1 = $('tbody tr:first-child td:nth-child(2)').offset().left;
      var tab2 = $('tbody tr:first-child td:nth-child(3)').offset().left;
      var tab3 = $('tbody tr:first-child td:nth-child(4)').offset().left;
      var tab4 = $('tbody tr:first-child td:nth-child(5)').offset().left;
       $('.stages__counts p:nth-child(1)').click(function(event){
            $('.stages__counts p').not(this).removeClass('active');
            $(this).addClass('active');
           $('.stages__table').scrollLeft(tab1);       
       });
       $('.stages__counts p:nth-child(2)').click(function(event){
            $('.stages__counts p').not(this).removeClass('active');
            $(this).addClass('active');
           $('.stages__table').scrollLeft(tab2);       
       });
       $('.stages__counts p:nth-child(3)').click(function(event){
            $('.stages__counts p').not(this).removeClass('active');
            $(this).addClass('active');
           $('.stages__table').scrollLeft(tab3);          
       });
       $('.stages__counts p:nth-child(4)').click(function(event){
            $('.stages__counts p').not(this).removeClass('active');
            $(this).addClass('active');
           $('.stages__table').scrollLeft(tab4);         
       });    
      // $('.stages__table').scroll(function () {
      //      if(tab1.left < $('.stages__table').scrollLeft()){
      //       $('.stages__counts p').removeClass('active');
      //       $('.stages__counts p:nth-child(1)').addClass('active');               
      //      }
      //      if(tab2.left <  $('.stages__table').scrollLeft()){
      //       $('.stages__counts p').removeClass('active');
      //       $('.stages__counts p:nth-child(2)').addClass('active');               
      //      }
      //      if(tab3.left <  $('.stages__table').scrollLeft()){
      //       $('.stages__counts p').removeClass('active');
      //       $('.stages__counts p:nth-child(3)').addClass('active');               
      //      }
      //      if(tab4.left <  $('.stages__table').scrollLeft()){
      //       $('.stages__counts p').removeClass('active');
      //       $('.stages__counts p:nth-child(4)').addClass('active');               
      //      }

      // });




 
});    
   (function (){
      $(window).scroll(function (event) {
       var scroll = $(window).scrollTop();
           if(scroll>10){
               $('.header').addClass('scroll');
           }else{
               $('.header').removeClass('scroll');
           }
       });      
   })();  

$(window).resize(function (event) {
   if($(window).width()<586){
      var tab1 = $('tbody tr:first-child td:nth-child(2)').offset();
      var tab2 = $('tbody tr:first-child td:nth-child(3)').offset();
      var tab3 = $('tbody tr:first-child td:nth-child(4)').offset();
      var tab4 = $('tbody tr:first-child td:nth-child(5)').offset();
       $('.stages__counts p:nth-child(1)').click(function(event){
            $('.stages__counts p').not(this).removeClass('active');
            $(this).addClass('active');
           $('.stages__table').animate({scrollLeft:tab1.left},400);          
       });
       $('.stages__counts p:nth-child(2)').click(function(event){
            $('.stages__counts p').not(this).removeClass('active');
            $(this).addClass('active');
           $('.stages__table').animate({scrollLeft:tab2.left},400);          
       });
       $('.stages__counts p:nth-child(3)').click(function(event){
            $('.stages__counts p').not(this).removeClass('active');
            $(this).addClass('active');
           $('.stages__table').animate({scrollLeft:tab3.left},400);          
       });
       $('.stages__counts p:nth-child(4)').click(function(event){
            $('.stages__counts p').not(this).removeClass('active');
            $(this).addClass('active');
           $('.stages__table').animate({scrollLeft:tab4.left},400);          
       });      
   }
 }); 


