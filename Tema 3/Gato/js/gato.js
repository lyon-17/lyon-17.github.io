/*
 * Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el
 * usuario. Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un
 * peso. Cada vez que crees un objeto gato aparecerá una ventana nueva con una
 * imagen que cambiará en función de su estado (comiendo, durmiendo y jugando,
 * que es su estado habitual). El usuario podrá averiguar la edad del gato
 * partiendo de un evento.
 *
 */

var bCreate;
var cat;
var catCount = 0;
var catWindow;
var Gato;
var posLeft = 0;
var posTop = 0;

window.onload = function () {

    Gato = function (race, win) {
        this.name = this.getName();
        this.age = new Date();
        this.age.setFullYear(this.age.getFullYear() - Math.round(Math.random() * 7));
        this.race = race;
        this.state = 'playing';
        this.weight = 5 + Math.round(Math.random() * 4);
        this.win = win;
    };

    Gato.prototype.getAge = function () {
        var today;
        today = new Date();
        return (today.getFullYear() - this.age.getFullYear());
    };

   Gato.prototype.getName = function () {
      var name = document.getElementById('name').value;
      if(name==="")
            return "Micaela";
        return name;
    };

    Gato.prototype.eat = function () {
        this.update('eating', 0.5);
    };

    Gato.prototype.sleep = function () {
        this.update('sleeping');
    };

    Gato.prototype.play = function () {
        this.update('playing', -0.5);
    };

    Gato.prototype.update = function (newState, newWeight) {
        var age, imagen, msg, reason, weight;

        if (this.state !== 'dead') {
            this.age.setFullYear(this.age.getFullYear() - 1);
            if (this.weight > 12 || this.weight < 3 || this.getAge() > 19) {
                this.state = 'dead';
            }
            if (this.state === 'dead') {
                imagen = this.win.document.getElementById('catImage');
                imagen.style.background = 'url(\'./images/cat_dead.jpg\')';
                imagen.style.backgroundSize = "100% 100%";
                msg = this.win.document.getElementById('catMsg');
                msg.innerHTML = 'Tu gato se ha muerto D:';
            } else {
                this.state = newState;
                if (!isNaN(newWeight)) {
                    this.weight += newWeight;
                }
                imagen = this.win.document.getElementById('catImage');
                imagen.style.background = 'url(\'./images/' + this.race + '_' + this.state + '.jpg\')';
                imagen.style.backgroundSize = "100% 100%";
            }
            weight = this.win.document.getElementById('weight');
            weight.innerHTML = this.weight;
            age = this.win.document.getElementById('age');
            age.innerHTML = this.getAge();
        }
    };

    // Fin prototype gato

    function crearGato() {
        var bEat, bSleep, bPlay, cat, catWindow, race;

        if (catCount > 0) {
            posLeft += 420;
            if (catCount % 3 === 0) {
                posLeft = 0;
                posTop += 380;
            }
        }
        catCount = catCount + 1;

        catWindow = window.open('', '', 'top=' + posTop + ',left=' + posLeft + ',width=400,height=350');

        catWindow.document.open();

        race = document.getElementById('race').selectedIndex;
        race = document.getElementsByTagName('option')[race].value;
        cat = new Gato(race, catWindow);

        catWindow.document.write('<!DOCTYPE html><html><head>' +
                '<meta charset="utf-8" /><title>Gato</title>' +
                '<link rel="stylesheet" href="css/style.css"></head>' +
                '<div id="content">' +
                '<h2>' + cat.name + '</h2>' +
                '<div id="catImage" style="background-image: url(\'./images/' + cat.race + '_' + cat.state + '.jpg\');"></div>' +
                '<p>Edad: <span id="age">' + cat.getAge() + '</span> años<p>' +
                '<p>Peso: <span id="weight">' + cat.weight + '</span> kg<p>' +
                '<button id="bEat">Comer</button>' +
                '<button id="bSleep">Dormir</button>' +
                '<button id="bPlay">Jugar</button>' +
                '<div id="catMsg"></div>' +
                '</div><script type="text/javascript" src="js/cat.js"></script>' +
                '</body></html>');


        bEat = catWindow.document.getElementById('bEat');
        bEat.onclick = function () {
            cat.eat();
        };

        bSleep = catWindow.document.getElementById('bSleep');
        bSleep.onclick = function () {
            cat.sleep();
        };

        bPlay = catWindow.document.getElementById('bPlay');
        bPlay.onclick = function () {
            cat.play();
        };

        catWindow.cat = cat;

        catWindow.document.close();


    }

   crear = document.getElementById('crear');
    crear.onclick = function () {
        crearGato();
    };



};