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
                            alert("Wecome Eroico World!");
                            location.href="sucurity.html";
                        }
                   
                    else
                        alert("shit");
                
                };
            
        




        function add1(){
            
            function shuffle(arr)
            {
                for(var i=arr.length; i>0;i--)
                    {
                        var pick=Math.floor(Math.random()*i);
                        var susu = arr[i-1];
                        arr[i-1] = arr[pick];
                        arr[pick] = susu;
                    }
            }
            
            var a =new Array();
            var b = new Array();
            for(var i=1;i<=45;i++)
                {
                    a[i-1] =i;
                }
            /*----------------시작---------------------       */
            for(var qq=0;qq<10;qq++){
            shuffle(a);
            
             for(var i=0; i<7;i++)
                {
            b[i] = a[i];
                    
                }
            $('#contents').append(b+"건너뜀");
            shuffle(a);
            for(var i=0; i<7;i++)
                {
            b[i] = a[i];
                    
                }
            $('#2').append(b+"--");
           }
            
            /*----------------끝---------------------       */
            function compare(a,b) {return a-b;}
            b.sort(compare);
           
             alert("생각중.  300번의 시뮬레이션 끝에 나온 값이다.");
            
            setTimeout(function(){
               
                
                 document.getElementById("text1").innerHTML=b[0];
            document.getElementById("text2").innerHTML=b[1];
            document.getElementById("text3").innerHTML=b[2];
            document.getElementById("text4").innerHTML=b[3];
            document.getElementById("text5").innerHTML=b[4];
            document.getElementById("text6").innerHTML=b[5];
                
                
            },1000)
            
           
            

            
           
           
                      
                   
                     
                
            
         
            
     
        };
              