function MostrarEnlaces() {
    // Links relacionados a la etiqueta <a> donde estan todos los enlaces
    const links = document.querySelectorAll("a");
    const total = links.length;
    // El Numero 0 representa el primer link del selector "<a>"
    const first = links[0].href;
    const last = links[links.length - 1].href;

    alert("No.Enlaces: " + total )
    alert("Primer Enlace: " + first);
    // Se considera Ultimo enlace el Icono, tiene un hipervinculo
    alert("Ultimo Enlace: " + last);
}


/* Codigo Alternativo Test
var myNodelist = document.querySelectorAll("a");
var URLList = [];
for (var i = 0; i < myNodelist.length; i++) {
    if (myNodelist[i].href) {
        URLList.push(myNodelist[i].href);
    }
}
alert(URLList + "");
*/
