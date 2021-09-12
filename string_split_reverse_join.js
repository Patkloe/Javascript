function recup(){
 let val = false;
 let test = "teet";
 let det = test.split(""); // convert the string as an arry, condition in the argumet
 let rev = det.reverse();  // reverse the array built
 let inverse = rev.join("");// join the array upon the condition based to the argument
 if(test === inverse)
   val = true;
 return val;
}
 recup();
