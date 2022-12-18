// $(document).ready(function(){
//   $("#nav-check1").click(function(){
//     $("#all-hide").hide();
//  });
//  $("#nav-check1").change(function(){
//   $("#all-hide").show();
// });


// });
// // $("#nav-check1").toggle(
// //   function(){
// //     $("#all-hide").children().show();
// //   },
// //   function(){
// //     $("#all-hide").children().hide();
// //   }

// // );


function myfun(){
  var x = document.getElementById("#nav-check1");
  if (x.style.display === "none"){
    x.style.display = "block";
  } else{
    x.style.display ="none";
  }
}