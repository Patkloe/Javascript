let x ={1:'a',2:'b',3:1};
 //alert(x);
 let keys = Object.keys(x);  // recupere keys de l'objet, va renvoyer un tableau des keys de cet objet
 //alert(keys);
 let ind = keys.indexOf('3');  // recupere index du tableau des keys de l'objet, keys qui sont quelque soit les cas consideres comme string, tous les keys sont toujours de facon primaire des string
 //alert(ind);
 let vals = Object.values(x); // recupere valeurs de chaque key de l'objet, renvois tableau des valeurs
 //alert(vals);
 let indval = vals.indexOf(1); // recupere index de la variable precise du tableau des valeurs retournees
 alert(indval);
