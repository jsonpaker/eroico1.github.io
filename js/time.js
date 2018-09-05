var NT_date=new Date();
               var nt_year = NT_date.getYear()+1900;
               var nt_month= NT_date.getMonth()+1;
               var nt_day = NT_date.getDate();
               var nt_hour = NT_date.getHours();
               var nt_min = NT_date.getMinutes();
               var nt_sec = NT_date.getSeconds();
            
               var time_str= nt_month+"/"+nt_day+"/"+nt_year+" "+nt_hour+":"+nt_min+" KR";
               $("#now_time").html(time_str);
               setTimeout("window.location.reload()",30000);