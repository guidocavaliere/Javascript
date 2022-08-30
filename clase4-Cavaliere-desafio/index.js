//Variables iniciales
let gtot = 0;
let precio = 0;
let c = 0;


//funciones
const ingreso = () => {
	precio = Number(prompt('Ingrese el precio' + (c + 1) + ':'));

	while (precio > 0) {
		total = total(precio);
		c++;
		precio = Number(prompt('Ingrese el precio ' + (c + 1) + ':'));
	}

	if (precio <= 0) {
		console.log('Finalizasdo');
	}

	mtot();
};

const ctot = (precio) => gtot + precio;

const mtot = () => {
	console.log('Cantidad de productos: ' + c);
	console.log('El precio total es $' + gtot);
};

// Invocación o llamada a las funciones
ingreso();


