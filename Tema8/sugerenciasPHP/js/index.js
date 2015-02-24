function showHint(str) {
    if (str.length == 0) { 
        textoDIV(document.getElementById("sugerencias"), "");
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                textoDIV(document.getElementById("sugerencias"),xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", "nombres.php?q=" + str, true);
        xmlhttp.send();
    }
}