function recup(){
 tab = [1,2,3];
 tab.unshift(3);
 n = tab.length;
 alert(n);
 tab;
 let div = tab.slice(0,n/2);// select element from the first argument, but not the element of the last argument
 console.log(tab);
 return div;
}
 recup();
