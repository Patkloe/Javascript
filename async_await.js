async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  alert(await myPromise);
}

myDisplay();
 //https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Async_await
