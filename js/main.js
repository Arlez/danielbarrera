$(function(){
    var map = L.map('mapid').setView([-33.440753, -70.65136], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});
$(function(){

window.sr = ScrollReveal();
sr.reveal('.navbar',{
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.header-content-left',{
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.header-content-right',{
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal('.header-btn',{
    duration: 2000,
    origin: 'bottom',
    delay: 1000
});
sr.reveal('#testimonial',{
    duration: 2000,
    origin: 'left',
    distance: '500px'
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
});


$(function(){
    function frases_alea(){

        frases = new Array();
        
        frases[0] = "<a href='http://www.eurolloyd.es/seguros/seguros-de-coche/calcula-el-precio.html' onclick='openBack(this.href);return false;'>Consulta y beneficiate de nuestras nuevas tarifas para el seguro de tu coche</a>";
        frases[1] = "En Eurolloyd aplicamos los descuentos de tu seguro actual en nuestros precios";
        frases[2] = "Si quieres seguridad para t&iacute; y los tuyos, <a href='http://www.eurolloyd.es/seguros/seguros-de-accidentes/precios-y-coberturas.html' onclick='openBack(this.href);return false;'>consulta nuestro seguro de accidentes para el motorista.</a>";
        frases[3] = "Si te interesa nuestro precio, contrata tu seguro directamente desde nuestra p·gina web";
        
        aleatorio=Math.floor(Math.random()*4);
        
        return frases[aleatorio];
        
        }
        onload=function(){
            document.getElementById('algo').innerHTML = frases_alea();
            setInterval(function(){
                document.getElementById('algo').innerHTML=frases_alea()
            ;},5000)
        }
});