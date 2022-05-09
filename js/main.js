(function () {

    // VARIABLES
    const botonesHeader = document.querySelector('ul');
    const btn_porfolio = document.querySelector('.boton');
    const btn_flechaArriba = document.querySelector('.footer__flecha-arriba a');
    const btn_dark = document.querySelector('#darkmode');
    const ubiSobreMi = document.querySelector('#sobreMi').getBoundingClientRect();
    const ubiPorfolio = document.querySelector('#portfolio').getBoundingClientRect();
    const ubiContacto = document.querySelector('#contacto').getBoundingClientRect();
    const contacto = document.querySelector('.datos-contacto h3');
    const letrasContacto = contacto.textContent.split("");
    contacto.innerText = ''; //hago contacto que sea vacío
    letrasContacto.forEach( (letra) => {
        contacto.innerHTML = contacto.innerHTML + `
            <div>
                <span>${letra}</span>
                <span class="segunda-linea">${letra}</span>
            </div>
        `; //recorro cada letra de contacto y la duplico
    })

    const modalesListado = document.querySelector('#modales__listado');
    const porfolioListado = document.querySelector('.trabajos-porfolio');
    const marcosListado = document.querySelector('.portada');
    const menu = document.querySelector('.contenedor__menu');
    const footer = document.querySelector('footer');

    animacionLetras(contacto);

    // EVENTOS
    //botones
    botonesHeader.addEventListener('click', (e) => {
        e.preventDefault();
        const i = e.target.getAttribute('value');
        switch (i) {
            case '0':
                scrolleaNav(ubiSobreMi.top);
                break;
            case '1':
                scrolleaNav(ubiPorfolio.top);
                break;
            case '2':
                scrolleaNav(ubiContacto.top);
                break;
            default:
                break;
        }
    })
    btn_porfolio.addEventListener('click', (e) => {
        e.preventDefault();
        scrolleaNav(ubiPorfolio.top);
    })
    btn_flechaArriba.addEventListener('click', (e) => {
        e.preventDefault();
        scrolleaNav(0);
    })
    btn_dark.addEventListener('click', () => {
        document.body.classList.toggle('darkmode');
        btn_dark.classList.toggle('active');
    })
    marcosListado.children[2].addEventListener('click', e => {
        e.preventDefault();
        const i = e.target.getAttribute('value');
        switch (i) {
            case '0':
                scrolleaNav(0);
                break;
            case '1':
                scrolleaNav(ubiSobreMi.top);
                break;
            case '2':
                scrolleaNav(ubiPorfolio.top);
                break;
            case '3':
                scrolleaNav(ubiContacto.top);
                break;
            default:
                break;
        }
    })
    marcosListado.children[3].addEventListener('click', e => {
        e.preventDefault();
        const i = e.target.getAttribute('value');
        switch (i) {
            case '0':
                scrolleaNav(ubiSobreMi.top);
                break;
            case '1':
                scrolleaNav(0);
                break;
            default:
                break;
        }
    })
    // evento scroll
    window.addEventListener('scroll', (e) => {
        e.preventDefault();
        // cambio color del menu
        const referencia = document.querySelector('#sobreMi').getBoundingClientRect();
        if (referencia.top < '50' && referencia.top > '-350') {
            for (let i = 0; i <= 2; i++) {
                if (i == 0) {
                    botonesHeader.children[i].children[0].classList.add('color_activo');
                } else {
                    botonesHeader.children[i].children[0].classList.remove('color_activo');
                }
            }
        } else if (referencia.top < '-349' && referencia.top > '-1000') {
            for (let i = 0; i <= 2; i++) {
                if (i == 1) {
                    botonesHeader.children[i].children[0].classList.add('color_activo');
                } else {
                    botonesHeader.children[i].children[0].classList.remove('color_activo');
                }
            }
        } else if (referencia.top < '-1001') {
            for (let i = 0; i <= 2; i++) {
                if (i == 2) {
                    botonesHeader.children[i].children[0].classList.add('color_activo');
                } else {
                    botonesHeader.children[i].children[0].classList.remove('color_activo');
                }
            }
        }
        else {
            for (let i = 0; i <= 2; i++) {
                botonesHeader.children[i].children[0].classList.remove('color_activo');
            }
        }
        // Cambio iconos barra lateral
        if (referencia.top < '50' && referencia.top > '-350') {
            for (let i = 0; i <= 3; i++) {
                if (i == 1) {
                    marcosListado.children[2].children[i].children[0].classList.add('fa-regular');
                    marcosListado.children[2].children[i].children[0].classList.remove('fa-solid');
                } else {
                    marcosListado.children[2].children[i].children[0].classList.add('fa-solid');
                    marcosListado.children[2].children[i].children[0].classList.remove('fa-regular');
                }
            }
        } else if (referencia.top < '-349' && referencia.top > '-1000') {
            for (let i = 0; i <= 3; i++) {
                if (i == 2) {
                    marcosListado.children[2].children[i].children[0].classList.add('fa-regular');
                    marcosListado.children[2].children[i].children[0].classList.remove('fa-solid');
                } else {
                    marcosListado.children[2].children[i].children[0].classList.add('fa-solid');
                    marcosListado.children[2].children[i].children[0].classList.remove('fa-regular');
                }
            }
        } else if (referencia.top < '-1001') {
            for (let i = 0; i <= 3; i++) {
                if (i == 3) {
                    marcosListado.children[2].children[i].children[0].classList.add('fa-regular');
                    marcosListado.children[2].children[i].children[0].classList.remove('fa-solid');
                } else {
                    marcosListado.children[2].children[i].children[0].classList.add('fa-solid');
                    marcosListado.children[2].children[i].children[0].classList.remove('fa-regular');
                }
            }
        }
        else {
            for (let i = 0; i <= 3; i++) {
                if (i == 0) {
                    marcosListado.children[2].children[i].children[0].classList.add('fa-regular');
                    marcosListado.children[2].children[i].children[0].classList.remove('fa-solid');
                } else {
                    marcosListado.children[2].children[i].children[0].classList.add('fa-solid');
                    marcosListado.children[2].children[i].children[0].classList.remove('fa-regular');
                }
            }
        }
        //
        if (window.scrollY == '0') {
            marcosListado.children[1].classList.add('sup_a');
            marcosListado.children[2].classList.add('der_a');
            marcosListado.children[3].classList.add('inf_a');
            marcosListado.children[4].classList.add('izq_a');
            marcosListado.children[1].classList.remove('sup_b');
            marcosListado.children[2].classList.remove('der_b');
            marcosListado.children[3].classList.remove('inf_b');
            marcosListado.children[4].classList.remove('izq_b');

            menu.classList.add('posicion_a');
            menu.classList.remove('posicion_b');

            marcosListado.children[3].children[0].classList.remove('display_none');
            marcosListado.children[3].children[1].classList.add('display_none');
        } else {
            marcosListado.children[1].classList.add('sup_b');
            marcosListado.children[2].classList.add('der_b');
            marcosListado.children[3].classList.add('inf_b');
            marcosListado.children[4].classList.add('izq_b');
            marcosListado.children[1].classList.remove('sup_a');
            marcosListado.children[2].classList.remove('der_a');
            marcosListado.children[3].classList.remove('inf_a');
            marcosListado.children[4].classList.remove('izq_a');

            menu.classList.add('posicion_b');
            menu.classList.remove('posicion_a');

            marcosListado.children[3].children[0].classList.add('display_none');
            marcosListado.children[3].children[1].classList.remove('display_none');
        }
        //desplazamientos del footer
        const ubiFooter = document.querySelector('footer').getBoundingClientRect();
        if (ubiFooter.top < '552') {
            for (let i = 0; i <= 2; i++) {
                footer.children[i].classList.add('opacity_1')
            }
        }
        else {
            for (let i = 0; i <= 2; i++) {
                footer.children[i].classList.remove('opacity_1')
            }
        }
    })

    //Botones portfolio para modales
    porfolioListado.addEventListener('click', (e) => {
        let i = parseInt(e.target.getAttribute('value'));
        abrirModal(i);
        // boton izq
        modalesListado.children[i].children[0].children[0].children[0].children[0].addEventListener('click', e => {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log('ahora no hace nada')
            // cerrarModal(i);
            // i--;
            // abrirModal(i);
        })
        // boton der
        modalesListado.children[i].children[0].children[0].children[0].children[1].addEventListener('click', e => {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log('ahora no hace nada')
            // cerrarModal(i);
            // i++;
            // abrirModal(i);
        })
        // boton cerrar modal
        modalesListado.children[i].children[0].children[0].children[1].addEventListener('click', e => {
            e.preventDefault();
            e.stopImmediatePropagation();
            cerrarModal(i);
        })
        // boton ver trabajo
        modalesListado.children[i].children[0].children[3].children[1].addEventListener('click', e => {
            e.preventDefault();
            // e.stopPropagation();
            console.log('boton ir a trabajo')
        })
    })


    // FUNCIONES
    function scrolleaNav(ubicacionscroll) {
        window.scrollTo({
            top: ubicacionscroll,
            behavior: 'smooth',
        });
    }
    function abrirModal(i) {
        console.log(i)
        console.log('abriendo modal')
        if (i > 5) {
            i = 0;
        }
        if (i < 0) {
            i = 5
        }
        modalesListado.children[i].classList.add('modal--show');
    }
    function cerrarModal(i) {
        modalesListado.children[i].classList.remove('modal--show');
    }
    function animacionLetras (titulo) {
        setInterval( () => {
            let cuenta = 0;
            const intervalo = setInterval(() => {
                if (cuenta < titulo.children.length) {
                    titulo.children[cuenta].classList.add('animacion')
                    cuenta++;
                } else {
                    clearInterval(intervalo);
                }
            }, 100);
        }, 3000);
        setInterval( () => {
            let cuenta = 0;
            const intervalo = setInterval(() => {
                if (cuenta < titulo.children.length) {
                    titulo.children[cuenta].classList.remove('animacion')
                    cuenta++;
                } else {
                    clearInterval(intervalo);
                }
            }, 100);
        }, 3150);
    }
}())