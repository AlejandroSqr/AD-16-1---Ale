var formMap = {};

var formElems = document.querySelectorAll('#myForm [name]');
for(var i = 0; i < formElems.length; i++){
    var elem = formElems[i];
    formMap[elem.name] = elem.value;
}
console.log(formMap)
