function recup(){
 tab = [1,2,3];
 tab.unshift(3);
 n = tab.length;
 alert(n);
 tab;
 let div = tab.slice(n/2);// selection starts from the given argument until the end of the array
 console.log(tab);
 return div;
}
 recup();
