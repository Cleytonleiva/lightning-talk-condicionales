let sentimiento= prompt('como te sientes hoy? feliz, frustrada o confundida');

let happy= document.getElementById('feliz');
let frustrated= document.getElementById('frustrada');
let confused= document.getElementById('confundida')

if (sentimiento ==='feliz') {
    happy.style.display = 'initial';
    frustrated.style.display= 'none';
    confused.style.display='none';
}
else if (sentimiento ==='frustrada') {
    happy.style.display = 'none';
    frustrated.style.display= 'initial';
    confused.style.display='none';   
}
else if (sentimiento ==='confundida'){
    happy.style.display = 'none';
    frustrated.style.display= 'none';
    confused.style.display='initial'; 
}
else {
    window.location.reload();
}
