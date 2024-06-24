// Fecha objetivo: 24 de agosto
const targetDate = new Date('June 24, 2024 02:35:00').getTime();

// Actualizar el conteo cada segundo
const countdown = setInterval(() => {
    // Obtener la fecha y hora actual
    const now = new Date().getTime();
    const Actualizar = new Date('June 24, 2024 02:12:00').getTime();
    const semana = new Date('August 17, 2024 02:12:00').getTime();
    const dias = new Date('August 20, 2024 02:12:00').getTime();
    const hoy = new Date('August 20, 2024 02:12:00').getTime();
    
    // Calcular la diferencia entre la fecha objetivo y la actual
    const distance = targetDate - now;
    
    // Calcular el tiempo para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Mostrar los resultados en los elementos correspondientes
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    
    // Si la cuenta regresiva ha terminado, redirigir a otra página
    if (distance < 0) {
        clearInterval(countdown);
        window.location.href = 'felicidades.html';
    }
}, 1000);
