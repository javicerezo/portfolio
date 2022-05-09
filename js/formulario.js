(function () {
    // VARIABLES
    const formulario = document.querySelector('#formulario')
    const btnEnviar = document.querySelector('#btn-enviar');
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const asunto = document.querySelector('#asunto');
    const Ubimensaje = document.querySelector('#mensaje');
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // EVENTOS 
    IniciarApp();
    nombre.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    btnEnviar.addEventListener('click', enviarEmail);

    // FUNCIONES
    function validarFormulario(e) {
        if (e.target.value.length > 0) {
            // borra el mensaje de error si rellenamos ese campo vacío
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
            e.target.classList.add('borde__exito');
            e.target.classList.remove('borde__alerta');
        } else {
            e.target.classList.remove('borde__exito');
            e.target.classList.add('borde__alerta');
            mostrarError('Todos los campos son obligatorios');
            IniciarApp();
        }

        //validamos el email en busca de una arroba y un domimio
        if (e.target.type === 'email') {
            //expresion regular de Email Regex
            if (er.test(e.target.value)) {
                const error = document.querySelector('p.error');
                if (error) {
                    error.remove();
                }
                e.target.classList.add('borde__exito');
                e.target.classList.remove('borde__alerta');
            } else {
                e.target.classList.remove('borde__exito');
                e.target.classList.add('borde__alerta');
                mostrarError('Email no válido');
                IniciarApp();
            }
        }

        // habilitamos boton enviar si todo 'ok'
        if (er.test(email.value) && asunto.value && nombre.value !== '') {
            btnEnviar.classList.remove('opacity_50')
            btnEnviar.disabled = false
        }
    }

    function mostrarError(mensaje) {
        const mensajeError = document.createElement('p');
        mensajeError.textContent = mensaje;
        mensajeError.classList.add('alerta', 'error');

        const errores = document.querySelectorAll('.error');
        if (errores.length === 0) {
            Ubimensaje.appendChild(mensajeError);
        }
    }
    function enviarEmail(e) {
        e.preventDefault();

        //mostrar el spinner
        const spinner = document.querySelector('#spinner');
        spinner.classList.remove('display_none');

        // pasados 3 seg ocultamos los mensajes
        setTimeout(() => {
            spinner.classList.add('display_none');

            //mensaje exito
            const mensajeExito = document.createElement('p');
            mensajeExito.textContent = 'El mensaje se envió correctamente';
            mensajeExito.classList.add('exito');
            Ubimensaje.appendChild(mensajeExito);

            setTimeout(() => {
                mensajeExito.remove();
                resetearFormulario();
                // devolvemos los input a color original
                nombre.classList.remove('borde__exito');
                email.classList.remove('borde__exito');
                asunto.classList.remove('borde__exito');
            }, 5000)
        }, 3000)

        
    }
    function resetearFormulario() {
        formulario.reset();
        IniciarApp();
    }
    function IniciarApp() {
        btnEnviar.disabled = true;
        btnEnviar.classList.add('opacity_50');

    }
}())
