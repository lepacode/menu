var menuData = {
    categorias: ['Promociones', 'Sandwiches', 'Hamburguesas', 'Pizzas', 'Picadas', 'Postres', 'Bebidas sin Alcohol', 'Bebidas con Alcohol'],
    productos: {
        Promociones: [
            {
                nombre: 'Combo Sándwich Esp. + Bebida p/2',
                descripcion: 'Cualquier sándwich del menú + una gaseosa 500cc a elección. El mejor precio para tu almuerzo.',
                precio: '18.000',
                imagen: 'assets/menu/promociones/promo1.webp',
                esPromo: true
            },
            {
                nombre: 'Combo Hamburguesa + bebida p/2',
                descripcion: 'Hamburguesa a elección acompañada de papas con cheddar y panceta. Ideal para compartir.',
                precio: '18.500',
                imagen: 'assets/menu/promociones/promo2.webp',
                esPromo: true
            },
            {
                nombre: 'Combo Picada + Cerveza + Bebida p/2',
                descripcion: 'Picada para dos personas + 2 cervezas de 475cc a elección. Perfecto para la previa.',
                precio: '32.000',
                imagen: 'assets/menu/promociones/promo3.webp',
                esPromo: true
            }
        ],
        Sandwiches: [
            {
                nombre: 'Sándwich Súper',
                descripcion: 'Triple capa de lomito, jamón, queso, huevo, lechuga, tomate y chimichurri en pan tostado.',
                precio: '13.000',
                imagen: 'assets/menu/sandwiches/sandwich-super.webp'
            },
            {
                nombre: 'Sándwich de Lomito',
                descripcion: 'Lomito de ternera a la plancha, jugoso, con lechuga, tomate, jamón, queso y huevo en pan francés.',
                precio: '15.000',
                imagen: 'assets/menu/sandwiches/sandwich-lomito.webp'
            },
            {
                nombre: 'Sándwich Especial',
                descripcion: 'Milanesa de carne o pollo con lechuga, tomate, huevo frito, jamón y queso en pan de lomito.',
                precio: '11.000',
                imagen: 'assets/menu/sandwiches/sandwich-especial.webp'
            },
            {
                nombre: 'Sándwich Común',
                descripcion: 'Jamón cocido, queso muzzarella, lechuga, tomate y mayonesa en pan de miga.',
                precio: '8.500',
                imagen: 'assets/menu/sandwiches/sandwich-comun.webp'
            }
        ],
        Hamburguesas: [
            {
                nombre: 'Hamburguesa Completa',
                descripcion: 'Medallón de carne vacuna, lechuga, tomate, cheddar y mayonesa en pan de papa.',
                precio: '9.500',
                imagen: 'assets/menu/hamburguesas/hambuguesa-completa.webp'
            },
            {
                nombre: 'Hamburguesa Especial con Bacon',
                descripcion: 'Medallón jugoso con doble cheddar, panceta crocante, cebolla caramelizada y barbacoa.',
                precio: '13.500',
                imagen: 'assets/menu/hamburguesas/hamburguesa-especial-con-bacon.webp'
            },
            {
                nombre: 'Hamburguesa Especial',
                descripcion: 'Carne vacuna a la parrilla con lechuga, tomate, huevo frito, jamón, queso y papas fritas.',
                precio: '11.500',
                imagen: 'assets/menu/hamburguesas/hambuguesa-especial.webp'
            },
            {
                nombre: 'Hamburguesa Común',
                descripcion: 'Medallón de carne, lechuga, tomate y mayonesa casera en pan suave.',
                precio: '7.500',
                imagen: 'assets/menu/hamburguesas/hambuguesa-comun.webp'
            }
        ],
        Pizzas: [
            {
                nombre: 'Pizza Calabresa',
                descripcion: 'Muzzarella, longaniza calabresa, morrones, aceitunas y orégano sobre masa artesanal.',
                precio: '34.000',
                imagen: 'assets/menu/pizzas/calabresa.webp'
            },
            {
                nombre: 'Pizza Margherita',
                descripcion: 'Salsa de tomate San Marzano, muzzarella fresca, albahaca y aceite de oliva.',
                precio: '29.000',
                imagen: 'assets/menu/pizzas/marguerita.webp'
            },
            {
                nombre: 'Pizza Portuguesa',
                descripcion: 'Muzzarella con jamón cocido, tomate, huevo duro, cebolla, morrones, aceitunas y orégano.',
                precio: '35.000',
                imagen: 'assets/menu/pizzas/portuguesa.webp'
            },
            {
                nombre: 'Pizza Cuatro Quesos',
                descripcion: 'Muzzarella, provolone, parmesano y roquefort fundidos sobre salsa de tomate.',
                precio: '38.000',
                imagen: 'assets/menu/pizzas/quatro-queijos.webp'
            }
        ],
        Picadas: [
            {
                nombre: 'Picada para Dos',
                descripcion: 'Fiambres, quesitos, aceitunas, pickles, pan casero y grisines. Ideal para compartir.',
                precio: '24.000',
                imagen: 'assets/menu/picadas/picada-para-dos.webp'
            },
            {
                nombre: 'Picada para Cuatro',
                descripcion: 'Bandeja con fiambres premium, quesos artesanales, aceitunas, cherrys, panes y dips.',
                precio: '40.000',
                imagen: 'assets/menu/picadas/picada-para-cuatro.webp'
            },
            {
                nombre: 'Papas con Cheddar y Panceta',
                descripcion: 'Papas crocantes bañadas en cheddar fundido y cubiertas con panceta crujiente.',
                precio: '10.500',
                imagen: 'assets/menu/picadas/papas-con-cheddar-panceta.webp'
            },
            {
                nombre: 'Papas con Cheddar, Panceta, Verdeo y Huevos',
                descripcion: 'Papas golden con cheddar cremoso, panceta crocante, verdeo y huevo a la plancha.',
                precio: '13.000',
                imagen: 'assets/menu/picadas/papas-con-cheddar-panceta-verdeo-huevos.webp'
            }
        ],
        Postres: [
            {
                nombre: 'Porción de Torta Helada',
                descripcion: 'Vainillas empapadas en café, con crema helada de americana y chocolate. Un clásico.',
                precio: '8.500',
                imagen: 'assets/menu/postres/porcion-de-torta-helada.webp'
            },
            {
                nombre: 'Copa de Helado 3 Sabores',
                descripcion: 'Tres bochas de helado artesanal: chocolate, vainilla, frutilla, dulce de leche o limón. Con crema y barquillo.',
                precio: '7.500',
                imagen: 'assets/menu/postres/copa-de-helado-3-sabores.webp'
            },
            {
                nombre: 'Cayote con Nueces',
                descripcion: 'Cayote en almíbar cortado en cubos, con nueces picadas y crema batida.',
                precio: '6.500',
                imagen: 'assets/menu/postres/postre-cayote-con-nueces.webp'
            },
            {
                nombre: 'Flan Casero',
                descripcion: 'Flan tradicional argentino, cremoso, bañado en dulce de leche o caramelo. Con crema batida.',
                precio: '6.000',
                imagen: 'assets/menu/postres/postre-flan.webp'
            }
        ],
        'Bebidas sin Alcohol': [
            {
                nombre: 'Sprite 500cc',
                descripcion: 'Gaseosa sabor lima-limón, burbujeante y fría. La acompañante perfecta.',
                precio: '3.500',
                imagen: 'assets/menu/sin-alcohol/gaseosa-sprite-500cc.webp'
            },
            {
                nombre: 'Seven Up 500cc',
                descripcion: 'Refresco cítrico de lima-limón con burbujas finas, servido helado.',
                precio: '3.500',
                imagen: 'assets/menu/sin-alcohol/gaseosa-seven-up-500cc.webp'
            },
            {
                nombre: 'Pepsi 500cc',
                descripcion: 'Refresco de cola, intenso y burbujeante, servido bien helado.',
                precio: '3.500',
                imagen: 'assets/menu/sin-alcohol/gaseosa-pepsi-500cc.webp'
            },
            {
                nombre: 'Mirinda Naranja 500cc',
                descripcion: 'Gaseosa sabor naranja, dulce y refrescante. Ideal para acompañar.',
                precio: '3.500',
                imagen: 'assets/menu/sin-alcohol/gaseosa-mirinda-naranja-500cc.webp'
            },
            {
                nombre: 'Agua sin Gas',
                descripcion: 'Agua mineral pura de manantial, natural. Servida bien fría.',
                precio: '2.500',
                imagen: 'assets/menu/sin-alcohol/agua-sin-gas.webp'
            },
            {
                nombre: 'Agua con Gas',
                descripcion: 'Agua mineral carbonatada de burbuja fina y refrescante. Ideal para acompañar.',
                precio: '2.800',
                imagen: 'assets/menu/sin-alcohol/agua-con-gas.webp'
            }
        ],
        'Bebidas con Alcohol': [
            {
                nombre: 'Stella Artois 475cc',
                descripcion: 'Cerveza belga premium de fermentación lager, color dorado con amargor suave. Servida bien fría.',
                precio: '6.500',
                imagen: 'assets/menu/cervezas/cerveza-stella-artois-475cc.webp'
            },
            {
                nombre: 'Quilmes 475cc',
                descripcion: 'La cerveza argentina. Lager rubia de cuerpo ligero y sabor equilibrado, ideal para cualquier ocasión.',
                precio: '4.800',
                imagen: 'assets/menu/cervezas/cerveza-quilmes-475cc.webp'
            },
            {
                nombre: 'Norte 475cc',
                descripcion: 'Cerveza rubia de estilo lager, fresca y suave, elaborada en el norte argentino.',
                precio: '4.200',
                imagen: 'assets/menu/cervezas/cerveza-norte-475cc.webp'
            },
            {
                nombre: 'Heineken 475cc',
                descripcion: 'Cerveza premium internacional, con su característico sabor equilibrado y final amargo.',
                precio: '6.000',
                imagen: 'assets/menu/cervezas/cerveza-heineken-475cc.webp'
            },
            {
                nombre: 'Budweiser 475cc',
                descripcion: 'Americana lager de cuerpo medio, notas a malta dulce y final refrescante.',
                precio: '5.200',
                imagen: 'assets/menu/cervezas/cerveza-budweiser-475cc.webp'
            },
            {
                nombre: 'Brahma 475cc',
                descripcion: 'Cerveza lager dorada, sabor suave y refrescante con un toque de lúpulo.',
                precio: '4.500',
                imagen: 'assets/menu/cervezas/cerveza-brahma-475cc.webp'
            }
        ]
    }
};

/* ===== ICONOS SVG PARA CADA TIPO ===== */
var iconosSVG = {
    sandwich: '<svg viewBox="0 0 24 24"><path d="M3 6C3 4.9 3.9 4 5 4H19C20.1 4 21 4.9 21 6V8C21 9.1 20.1 10 19 10H5C3.9 10 3 9.1 3 8V6ZM4 12H20L19 20H5L4 12ZM7 6H9V8H7V6ZM11 6H13V8H11V6Z"/></svg>',
    burger: '<svg viewBox="0 0 24 24"><path d="M5 10C5 6.13 8.13 3 12 3S19 6.13 19 10H5ZM4 12H20C20.55 12 21 12.45 21 13S20.55 14 20 14H4C3.45 14 3 13.55 3 13S3.45 12 4 12ZM5 16H19C19.55 16 20 16.45 20 17V18C20 19.66 18.66 21 17 21H7C5.34 21 4 19.66 4 18V17C4 16.45 4.45 16 5 16Z"/></svg>',
    pizza: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 4C12.33 4 12.67 4.02 13 4.06L12 8L11 4.06C11.33 4.02 11.67 4 12 4ZM4.06 13L8 12L4.06 11C4.02 11.33 4 11.67 4 12S4.02 12.67 4.06 13ZM12 20C11.67 20 11.33 19.98 11 19.94L12 16L13 19.94C12.67 19.98 12.33 20 12 20ZM8.5 8.5L6.34 5.34C7.1 4.62 8.02 4.08 9.04 3.76L8.5 8.5ZM15.5 8.5L14.96 3.76C15.98 4.08 16.9 4.62 17.66 5.34L15.5 8.5ZM19.94 11L16 12L19.94 13C19.98 12.67 20 12.33 20 12S19.98 11.33 19.94 11ZM15.5 15.5L17.66 18.66C16.9 19.38 15.98 19.92 14.96 20.24L15.5 15.5ZM8.5 15.5L9.04 20.24C8.02 19.92 7.1 19.38 6.34 18.66L8.5 15.5Z"/></svg>',
    postre: '<svg viewBox="0 0 24 24"><path d="M12 2C9.24 2 7 4.24 7 7C7 8.4 7.6 9.65 8.56 10.54L6 18H18L15.44 10.54C16.4 9.65 17 8.4 17 7C17 4.24 14.76 2 12 2ZM12 4C13.66 4 15 5.34 15 7S13.66 10 12 10S9 8.66 9 7S10.34 4 12 4ZM8.8 16L9.6 13.5H14.4L15.2 16H8.8Z"/></svg>',
    bebida: '<svg viewBox="0 0 24 24"><path d="M6 2V4H8V4.29L5.28 20.24C5.1 21.24 5.88 22 6.88 22H17.12C18.12 22 18.9 21.24 18.72 20.24L16 4.29V4H18V2H6ZM9.32 8H14.68L15.08 10H8.92L9.32 8ZM8.12 14H15.88L16.28 16H7.72L8.12 14ZM7.44 18H16.56L16.88 20H7.12L7.44 18Z"/></svg>'
};

/* ===== REFERENCIAS DOM ===== */
var listaCategorias = document.getElementById('listaCategorias');
var contenedorMenu = document.getElementById('contenedorMenu');
var scrollBloqueado = false;

/* ===== SCROLL SOLO HORIZONTAL PARA CATEGORIAS ===== */
function centrarBtnCategoria(btn) {
    var container = document.getElementById('listaCategorias');
    var btnOffset = btn.offsetLeft;
    var center = btnOffset - (container.clientWidth / 2) + (btn.offsetWidth / 2);
    container.scrollTo({ left: center, behavior: 'smooth' });
}

/* ===== RENDERIZAR CATEGORIAS ===== */
function renderCategorias() {
    listaCategorias.innerHTML = '';
    menuData.categorias.forEach(function (cat, index) {
        var btn = document.createElement('button');
        btn.className = 'categorias__btn' + (index === 0 ? ' categorias__btnActivo' : '');
        btn.textContent = cat;
        btn.setAttribute('data-cat', cat);
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        btn.addEventListener('click', function () {
            seleccionarCategoria(cat);
        });
        listaCategorias.appendChild(btn);
    });
}

/* ===== SELECCIONAR CATEGORIA ===== */
function seleccionarCategoria(cat) {
    scrollBloqueado = true;

    /* Actualizar estado visual de botones */
    var botones = listaCategorias.querySelectorAll('.categorias__btn');
    for (var i = 0; i < botones.length; i++) {
        var btn = botones[i];
        if (btn.getAttribute('data-cat') === cat) {
            btn.classList.add('categorias__btnActivo');
            btn.setAttribute('aria-selected', 'true');
            centrarBtnCategoria(btn);
        } else {
            btn.classList.remove('categorias__btnActivo');
            btn.setAttribute('aria-selected', 'false');
        }
    }

    /* Scroll vertical a la seccion correspondiente */
    var seccion = document.getElementById('grupo_' + cat);
    if (seccion) {
        var catAltura = document.querySelector('.categorias').offsetHeight;
        var destino = seccion.offsetTop - catAltura - 6;
        window.scrollTo({ top: destino, behavior: 'smooth' });
    }

    /* Desbloquear el scroll spy despues de un momento */
    setTimeout(function () {
        scrollBloqueado = false;
    }, 800);
}

/* ===== RENDERIZAR MENU ===== */
function renderMenu() {
    contenedorMenu.innerHTML = '';

    menuData.categorias.forEach(function (cat) {
        var grupo = document.createElement('div');
        grupo.className = 'menu__grupo';
        grupo.id = 'grupo_' + cat;

        /* Encabezado de categoria */
        var encabezado = document.createElement('div');
        encabezado.className = 'menu__encabezado';

        var icono = document.createElement('img');
        icono.className = 'menu__icono';

        var mapaIconos = {
            'promociones': 'promociones',
            'sandwiches': 'sandwich',
            'hamburguesas': 'hamburguesas',
            'pizzas': 'pizzas',
            'picadas': 'picadas',
            'postres': 'postres',
            'bebidas sin alcohol': 'bebidas-sin-alcohol',
            'bebidas con alcohol': 'bebidas-con-alcohol'
        };
        var nombreIcono = mapaIconos[cat.toLowerCase()] || 'promociones';
        icono.src = 'assets/iconos/' + nombreIcono + '.webp';
        icono.alt = cat;

        var titulo = document.createElement('h2');
        titulo.className = 'menu__titulo';
        titulo.textContent = cat;

        var linea = document.createElement('div');
        linea.className = 'menu__linea';

        var puntos = document.createElement('div');
        puntos.className = 'menu__puntos';
        puntos.setAttribute('aria-hidden', 'true');
        for (var p = 0; p < 3; p++) {
            var punto = document.createElement('span');
            punto.className = 'menu__punto';
            puntos.appendChild(punto);
        }

        encabezado.appendChild(icono);
        encabezado.appendChild(titulo);
        encabezado.appendChild(linea);
        encabezado.appendChild(puntos);

        /* Grid de productos */
        var grid = document.createElement('div');
        grid.className = 'menu__grid';

        var productos = menuData.productos[cat];
        for (var i = 0; i < productos.length; i++) {
            var prod = productos[i];
            grid.appendChild(crearCard(prod));
        }

        grupo.appendChild(encabezado);
        grupo.appendChild(grid);
        contenedorMenu.appendChild(grupo);
    });
}

/* ===== CREAR CARD DE PRODUCTO ===== */
function crearCard(prod) {
    var card = document.createElement('article');
    card.className = 'card';
    if (prod.esPromo) {
        card.classList.add('card--promo');
    }

    /* Imagen */
    var imagen = document.createElement('div');
    imagen.className = 'card__imagen';

    var fondo = document.createElement('div');
    fondo.className = 'card__imagenFondo';
    fondo.style.backgroundImage = 'url("assets/fondo_card.webp")';
    fondo.style.backgroundSize = 'cover';
    fondo.style.backgroundPosition = 'center';

    var overlay = document.createElement('div');
    overlay.className = 'card__imagenOverlay';

    imagen.appendChild(fondo);
    imagen.appendChild(overlay);

    if (prod.imagen) {
        var imgProd = document.createElement('img');
        imgProd.src = prod.imagen;
        imgProd.className = 'card__productoImg';
        imgProd.alt = prod.nombre;
        imagen.appendChild(imgProd);
    }

    /* Contenido */
    var contenido = document.createElement('div');
    contenido.className = 'card__contenido';

    var nombre = document.createElement('h3');
    nombre.className = prod.esPromo ? 'card__nombre--promo' : 'card__nombre';
    nombre.textContent = prod.nombre;

    var descripcion = document.createElement('p');
    descripcion.className = prod.esPromo ? 'card__descripcion--promo' : 'card__descripcion';
    descripcion.textContent = prod.descripcion;

    var precio = document.createElement('span');
    precio.className = prod.esPromo ? 'card__precio--promo' : 'card__precio';
    precio.textContent = '$ ' + prod.precio;

    contenido.appendChild(nombre);
    contenido.appendChild(descripcion);
    contenido.appendChild(precio);

    card.appendChild(imagen);
    card.appendChild(contenido);

    return card;
}

/* ===== SCROLL SPY CON INTERSECTIONOBSERVER ===== */
function iniciarScrollSpy() {
    var opciones = {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0
    };

    var observer = new IntersectionObserver(function (entries) {
        /* Si el scroll foi provocado por click, não atualizar */
        if (scrollBloqueado) return;

        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (entry.isIntersecting) {
                var cat = entry.target.id.replace('grupo_', '');
                var botones = listaCategorias.querySelectorAll('.categorias__btn');
                for (var j = 0; j < botones.length; j++) {
                    var btn = botones[j];
                    if (btn.getAttribute('data-cat') === cat) {
                        btn.classList.add('categorias__btnActivo');
                        btn.setAttribute('aria-selected', 'true');
                        centrarBtnCategoria(btn);
                    } else {
                        btn.classList.remove('categorias__btnActivo');
                        btn.setAttribute('aria-selected', 'false');
                    }
                }
                break;
            }
        }
    }, opciones);

    var grupos = contenedorMenu.querySelectorAll('.menu__grupo');
    for (var i = 0; i < grupos.length; i++) {
        observer.observe(grupos[i]);
    }
}

/* ===== INICIALIZACION ===== */
renderCategorias();
renderMenu();
iniciarScrollSpy();