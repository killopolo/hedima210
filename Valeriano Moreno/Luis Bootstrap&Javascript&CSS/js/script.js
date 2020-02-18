/*
            //Empieza la función para la reproducción de las películas
            function reproduceVideo(codigoVideo){
              var reproductor = document.getElementById("ifReproductor");
              
        
              reproductor.src = "https://www.youtube.com/embed/" + codigoVideo;
              
        
            }
         */

        function escribirCookie(cname, cvalue, exdays) {

            //declaramos una variable de tipo fecha, sobre la cual
            //construiremos una fecha determinada, resultante de
            //sumarle a la fecha del corriente (de hoy) el número de días
            //que leemos en el parámetro "exdays", traduciendo el número de días
            //a milisegundos
            var d = new Date();

            //A la fecha actual, le sumamos los milisegundos que tiene el número de días dado
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

            //Ya tenemos construida una variable "d", de tipo fecha
            //que contiene como valor una fecha del futuro.
            //Al escribir la cookie, uno de los valores que se especifican (el segundo)
            //es esa fecha de expiración
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";


            return true;

        }

        function ocultarCapaCookie() {
            //INvocamos a la función "escribirCookie", que es la encargada
            //de efectivamente escribir la cookie.
            //Si esa función hace bien su trabajo retornará un valor "true",
            //que se guardará en la variable "escribioCookie"
            var escribioCookie = escribirCookie('aceptacion1', 'positiva', 2);

            //Si el valor retornado y guardadoa en "escribioCookie" es efectivamente "true",
            //entonces es que la cookie se ha escrito bien, y por lo tanto se ha de ocultar
            //el faldón que pide autorización al usuario, para no mostrarse más a este
            //usuario

            if (escribioCookie == true) {
                document.getElementById("dvAceptarCookie").style.display = "none";
            }
        }


        function leerCookie(nombreCookie) {
            var name = nombreCookie + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');

            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function comprobarCookie() {

            //Intentamos encontrar en el disco del usuario una cookie llamada "aceptacion"
            //El resultado lo cargamos en la variable "aceptado"
            var hayCookie = leerCookie("aceptacion1");

            //Si la variable "aceptado" ha resultado cargada (es decir, se ha encontrado la cookie)
            //entonces eso significa que el usuario ya aceptó anteriormente,
            //y por lo tanto hay que ocultarle el faldón  

            console.log(hayCookie);

            if (hayCookie == "") { //No se halló cookie, mostremos el faldón
                document.getElementById("dvAceptarCookie").style.display = "block";
            }
            else {//Sí se halló cookie, ocultemos el faldón
                ocultarCapaCookie();

            }
            //Si no se ha encontrado la cookie, y esa variable "aceptado" está vacía
            //entonces hay que mostrarle el faldón.
            //Como el estado por defecto de la capa es visible, no
            //tenemos que hacer nada, la dejamos en default 

        }

        /*function ampliarInfoVideo() {
            document.getElementById("dvInfoVideo").style.height = "auto";
            document.getElementById("dvAmpliacion").style.height = "auto";
            document.getElementById("dvAmpliacion").style.display = "block";

        }*/

        function mostrarOcultar(id){
            var elemento = document.getElementById(id);
            if(!elemento) {
            return true;
            }
            if (elemento.style.display == "block") {
            elemento.style.display = "none"
            } else {
            elemento.style.display = "block"
            };
            return true;
            };


        function borrarCookie(nombreUsuario) {
            escribirCookie(nombreUsuario, "", null, null, null, 1);
        }


        