export function load_home() {
    document.getElementById("myMessage").innerHTML='<object type="text/html" data="home_page.html" width="100%" title="This object has text"></object>';
}
//https://github.com/denisovv2001/vkr2023/blob/main/db_za_hrista/src/panels/home_page.html
export function dataField() {
   fetch('http://students.yss.su/PSTGU/1_kurs_2023/kadilnikov_dmitry/baza_dannix/baza_dannyx_CORS.php')
     .then(function (response) {
       return response.text();
     })
     .then(function (text) {
       console.log(text);
       load_home();
       return text;
     });
   //document.getElementById("myMessage").innerHTML = toWebBrowser; 
} 