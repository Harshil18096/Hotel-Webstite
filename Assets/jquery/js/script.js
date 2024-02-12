 $(document).ready(function () {
    jQuery("#chk1").click(function () {
  
         if (jQuery("#chk1").is(":checked")) {
            jQuery("#btn1").attr("class", "btn_active");
        }
         else {
            jQuery("#btn1").attr("class", "btn_send");
         }

      });
    });

   // $(document).ready(function () {
   //    jQuery("#chk1").click(function () {
    
   //        if (jQuery("#chk1").is(":checked")) {
   //           jQuery("#btn1").attr("class", "btn active");
   //        }
   //        else {
   //           jQuery("#btn1").attr("class", "btn disabled");
  
   //        }
   //     });
   //   });
  
   //        $(document).ready(function(){
   //            $("#btn1").click(function(){
   //            alert("successfully donate");
   //        });
   //    });
