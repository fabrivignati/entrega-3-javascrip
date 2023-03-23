// PRODUCTOS
const productos = [
  // A B R I G O S
  {
    id: "memoria-01",
    titulo: "Memoria 01",
    imagen: "./img/memorias/01.jpg",
    categoria: {
      nombre: "Memorias",
      id: "memorias",
    },
    precio: 1000,
  },
  {
    id: "memoria-02",
    titulo: "Memoria 02",
    imagen: "./img/memorias/02.jpg",
    categoria: {
      nombre: "Memorias",
      id: "memorias",
    },
    precio: 1000,
  },
  {
    id: "memoria-03",
    titulo: "Memoria 03",
    imagen: "./img/memorias/03.jpg",
    categoria: {
      nombre: "Memorias",
      id: "memorias",
    },
    precio: 1000,
  },
  {
    id: "memoria-04",
    titulo: "Memoria 04",
    imagen: "./img/memorias/04.jpg",
    categoria: {
      nombre: "Memorias",
      id: "memorias",
    },
    precio: 1000,
  },
  {
    id: "memoria-05",
    titulo: "Memoria 05",
    imagen: "./img/memorias/05.jpg",
    categoria: {
      nombre: "Memorias",
      id: "memorias",
    },
    precio: 1000,
  },

  // PROCESADORES
  {
    id: "procesador-01",
    titulo: "Procesador 01",
    imagen: "./img/procesadores/01.jpg",
    categoria: {
      nombre: "Procesadores",
      id: "procesadores",
    },
    precio: 1000,
  },
  {
    id: "procesador-02",
    titulo: "Procesador 02",
    imagen: "./img/procesadores/02.jpg",
    categoria: {
      nombre: "Procesadores",
      id: "procesadores",
    },
    precio: 1000,
  },
  {
    id: "procesador-03",
    titulo: "Procesador 03",
    imagen: "./img/procesadores/03.jpg",
    categoria: {
      nombre: "Procesadores",
      id: "procesadores",
    },
    precio: 1000,
  },
  {
    id: "procesador-04",
    titulo: "Procesador 04",
    imagen: "./img/procesadores/04.jpg",
    categoria: {
      nombre: "Procesadores",
      id: "procesadores",
    },
    precio: 1000,
  },
  {
    id: "procesador-05",
    titulo: "Procesador 05",
    imagen: "./img/procesadores/05.jpg",
    categoria: {
      nombre: "Procesadores",
      id: "procesadores",
    },
    precio: 1000,
  },
  {
    id: "procesador-06",
    titulo: "Procesador 06",
    imagen: "./img/procesadores/06.jpg",
    categoria: {
      nombre: "Procesadores",
      id: "procesadores",
    },
    precio: 1000,
  },
  {
    id: "procesador-07",
    titulo: "Procesador 07",
    imagen: "./img/procesadores/07.jpg",
    categoria: {
      nombre: "Procesadores",
      id: "procesadores",
    },
    precio: 1000,
  },
  {
    id: "procesador-08",
    titulo: "Procesador 08",
    imagen: "./img/procesadores/08.jpg",
    categoria: {
      nombre: "Procesadores",
      id: "procesadores",
    },
    precio: 1000,
  },

  // PLACAS
  {
    id: "placa-01",
    titulo: "Placa 01",
    imagen: "./img/placas/01.jpg",
    categoria: {
      nombre: "Placas",
      id: "placas",
    },
    precio: 1000,
  },
  {
    id: "placa-02",
    titulo: "Placa 02",
    imagen: "./img/placas/02.jpg",
    categoria: {
      nombre: "Placas",
      id: "placas",
    },
    precio: 1000,
  },
  {
    id: "placa-03",
    titulo: "Placa 03",
    imagen: "./img/placas/03.jpg",
    categoria: {
      nombre: "Placas",
      id: "placas",
    },
    precio: 1000,
  },
  {
    id: "placa-04",
    titulo: "Placa 04",
    imagen: "./img/placas/04.jpg",
    categoria: {
      nombre: "Placas",
      id: "placas",
    },
    precio: 1000,
  },
  {
    id: "placa-05",
    titulo: "Placa 05",
    imagen: "./img/placas/05.jpg",
    categoria: {
      nombre: "Placas",
      id: "placas",
    },
    precio: 1000,
  },
];

// Mostrar los productos en el div "contenedor-producto" desde el array de productos

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria"); // Pasa a ser un array
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const notificacion = document.querySelector(".notificacion");

// Productos Elegidos representan los productos del array que queremos mostrar
function cargarProductos(productosElegidos) {
  // Para vaciar el contenedor y no duplicar los productos
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    // Recorre todo el array y por cada elemento, realiza una cadena de acciones

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div> 
        `;
    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    // Se remueve el active de todos los botones
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    // Se agrega el "active" solamente al que le hicimos click
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      // Muestra el nombre de la categoria
      const nombreCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerHTML = nombreCategoria.categoria.nombre;

      // Muestra solamente los elementos pertenecientes a la categoria
      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerHTML = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

// Creando los botones agregar
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito"); // Trae lo que hay en el localStorage

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNotificacion();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id; // Me devuelve el id del producto
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    // some - se fija si hay algo que coincida con eso, y devuelve un true o false
    //Incrementa la cantidad del producto existente en el carrito
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
    0;
  } else {
    productoAgregado.cantidad = 1; // Agrega una propiedad al objeto en el array
    productosEnCarrito.push(productoAgregado); // Agregamos un producto a un array correspondiente
  }

  actualizarNotificacion();
  localStorage.setItem(
    "productos-en-carrito",
    JSON.stringify(productosEnCarrito)
  ); // Llevar todo al localStorage para poder llamarlo desde el carrito
}

// Actualizar la notificacion de la cantidad de elementos en el carrito

function actualizarNotificacion() {
  let nuevaNotificacion = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  ); // suma la cantiad de elementos que hay y la cuenta arranca en 0
  notificacion.innerText = nuevaNotificacion;
}
