export function print_num() {
  alert(2);
  var iterator = prompt(('enter num', '1 or 2'));
  var toDisplay = "";
  var toWebBrowser = "";
  for(var i=1; i<=iterator; i++){
    toDisplay+=i;
    toWebBrowser += '<br>';
    toWebBrowser += i;
  }
  /*for(var j=10; j>=1; j--){
    toDisplay += '\n';
    toDisplay+=j; 
    toWebBrowser += j;
  }*/

  console.log(toDisplay); // печать в консоли браузера
  console.log(toWebBrowser);
  alert(toDisplay); // вывод на экран окна с сообщением
  return toWebBrowser;
}
