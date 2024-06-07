//http://students.yss.su/PSTGU/1_kurs_2023/kadilnikov_dmitry/baza_dannix/baza_dannyx_CORS.php
export function dataField() {
  // обращаюсь через проксти к сайту с новомучениками
  fetch('https://yss-bridge.nmbook.ru/PSTGU/1_kurs_2023/kadilnikov_dmitry/baza_dannix/baza_dannyx_CORS.php')
    .then(function (response) {
      // преобразую считанную информацию в текст
      return response.text();
    })
    .then(function (text) {
      console.log(text); // вывод считанной информации в консоль
      // запуск функции отображения HTML
      //document.getElementById("myMessage").innerHTML='<object type="text/html" data="home_page.html" width="100%" title="This object has text"></object>';
      document.getElementById("myMessage").innerHTML=text;
      return text;
    });
} 