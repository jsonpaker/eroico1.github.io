 $(window).load(function(){
        $('.header').display="";
        $('.header').fadeIn('slow',function(){ });
      $('#women').display="";
        $('#women').fadeIn('slow',function(){ });
      $('#men').display="";
        $('#men').fadeIn('slow',function(){ });
    
     
    });
 
                function keypass(){
               var junho = "960726";
                   var junho1 = $('#junho').val();
                    if( junho==junho1)
                        {
                            location.href="sucurity.html";
                        }
                   
                    else
                        alert("실패");
                
                };
            
              