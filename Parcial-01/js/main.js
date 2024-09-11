// slider carrusel - beneficios
let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.beneficios-img .beneficio-item');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const slideWidth = slides[0].offsetWidth;
    document.querySelector('.beneficios-img').style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Modal Beneficios

function openModal(titulo, texto) {
    document.getElementById("modalTitulo").innerText = titulo;
    document.getElementById("modalTexto").innerText = texto;
    document.getElementById("beneficioModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("beneficioModal").style.display = "none";
  }
  

// Sección de compra

document.querySelectorAll('.incrementar').forEach(button => {
    button.addEventListener('click', function() {
        var cantidadInput = this.previousElementSibling;
        if (parseInt(cantidadInput.value) < 10) {
            cantidadInput.value = parseInt(cantidadInput.value) + 1;
        }
    });
});

document.querySelectorAll('.decrementar').forEach(button => {
    button.addEventListener('click', function() {
        var cantidadInput = this.nextElementSibling;
        if (parseInt(cantidadInput.value) > 0) {
            cantidadInput.value = parseInt(cantidadInput.value) - 1;
        }
    });
});

function actualizarCarrito() {
    const cantidades = document.querySelectorAll('.cantidad');
    const productosAdquiridos = document.getElementById('productosAdquiridos');
    const totalCarrito = document.getElementById('precioFinal');
    
    let totalCantidad = 0;
    let totalPrecio = 0;
    
    productosAdquiridos.innerHTML = '';
    
    cantidades.forEach(input => {
        const producto = input.closest('.img');
        const nombre = producto.querySelector('.watchNumber').textContent;
        const precio = parseFloat(producto.querySelector('.precio').textContent.replace('$', ''));
        const cantidad = parseInt(input.value) || 0;
        const imagen = producto.querySelector('img').src; 

        if (cantidad > 0) {
            totalCantidad += cantidad;
            totalPrecio += cantidad * precio;
            
            const li = document.createElement('li');
            li.classList.add('producto-item');
            
            const img = document.createElement('img');
            img.src = imagen;
            img.alt = nombre;
            img.style.width = '6em';
            img.style.height = 'auto';
            li.appendChild(img);
            
            const texto = document.createElement('span');
            texto.textContent = `${nombre} x${cantidad} - $${(precio * cantidad).toFixed(2)}`;
            li.appendChild(texto);
            
            productosAdquiridos.appendChild(li);
        }
    });
    
    document.getElementById('carritoContador').textContent = totalCantidad;
    totalCarrito.textContent = totalPrecio.toFixed(2);
}

const botonAgregarCarrito = document.getElementById('AgregarProducto');
botonAgregarCarrito.addEventListener('click', actualizarCarrito);

const carritoIcon = document.getElementById('carritoIcon');
const menuLateral = document.getElementById('menuLateral');
const cerrarMenu = document.getElementById('cerrarMenu');

function abrirMenuLateral() {
    menuLateral.classList.add('open');
}

function cerrarMenuLateral() {
    menuLateral.classList.remove('open');
}

carritoIcon.addEventListener('click', abrirMenuLateral);

cerrarMenu.addEventListener('click', cerrarMenuLateral);

const comprarButton = document.getElementById('botonCompra');
comprarButton.addEventListener('click', () => {
    window.location.href = 'Registro.html';
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registro-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        alert('¡Compra realizada con éxito!');
        
        window.location.href = 'index.html';
    });
});
