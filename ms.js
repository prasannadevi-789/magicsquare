

$(document).ready(function(){
    





for(i=1;i<=16;i++){

  $("#in"+i).css("font-size", "120%")
 
 $("#in"+i).css("text-align", "center")
 
 $("#in"+i).css("width", "8%");
  
$("#in"+i).css("height", "8%");
 
 $("#in"+i).hide();
}
for(i=1;i<=2;i++){
 
 $(".btn_"+i).hide();
 
 
}

}
)



$(document).ready(function(){
 
 $(".low").click(function(){
   
 for(i=1;i<10;i++){
      
$("#in"+i).show()
    
  $("#in"+i).attr("maxlength", "1")
   
 }
   
 for(i=10;i<=16;i++){
  
    $("#in"+i).hide()
    }


    $(".btn_1").show()

    $(".btn_2").hide()
    
 
 })

})






function ready_1()
{
  
var ready = 15;
  


var x1 = parseInt(document.getElementById("in1").value);

var x2 = parseInt(document.getElementById("in2").value);

var x3 = parseInt(document.getElementById("in3").value);

var x4 = parseInt(document.getElementById("in4").value);

var x5 = parseInt(document.getElementById("in5").value);

var x6 = parseInt(document.getElementById("in6").value);

var x7 = parseInt(document.getElementById("in7").value);

var x8 = parseInt(document.getElementById("in8").value);

var x9 = parseInt(document.getElementById("in9").value);


x1 = x1 || 0

x2 = x2 || 0

x3 = x3 || 0

x4 = x4 || 0

x5 = x5 || 0

x6 = x6 || 0

x7 = x7 || 0

x8 = x8 || 0

x9 = x9 || 0

 
if(x1!="" && x2!="" && x3!="" && x4!="" && x5!="" && x6!="" && x7!="" && x8!="" && x9!=""){
  if(x1!=x2 && x1!=x3 && x1!=x4 && x1!=x5 && x1!=x6 && x1!=x7 && x1!=x8 && x1!=x9 && x2!=x3 && x2!=x4 && x2!=x5 && x2!=x6 && x2!=x7 && x2!=x8 && x2!=x9 && x3!=x4 && x3!=x5 && x3!=x6 && x3!=x7 && x3!=x8 && x3!=x9 && x4!=x5 && x4!=x6 && x4!=x7 && x4!=x8 && x4!=x9 && x5!=x6 && x5!=x7 && x5!=x8 && x5!=x9 && x6!=x7 && x6!=x8 && x6!=x9 && x7!=x8 && x7!=x9 && x8!=x9  ){
   
 if(x1+x2+x3==ready && x4+x5+x6==ready && x7+x8+x9==ready && x1+x4+x7==ready && x2+x5+x8==ready && x3+x6+x9==ready && x1+x5+x9==ready && x3+x5+x7==ready){
      document.write("yes!!! it's a Magic suqare !");
   
 }
    
else
{
      
document.write("sorry, try again!");
   

}
   
 }
  
else
{
   
 document.write("You cannot use the same number twice !");
  
}

 }
 
else
{
     
document.write("You cannot leave empty box!")
 
}


}


