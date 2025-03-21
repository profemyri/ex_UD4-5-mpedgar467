<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Freiduría online</title>
</head>

<body>
    <h1>¡¡Pide aquí tu rico pescaíto!!</h1>

    <img src="pescado_frito.jpg" <h2></h2>="Bandeja pescado frito"</h2>
    <form action="enviar_pedido.php"
        <h3>Datos del cliente</h3>
        
        <label for="nombre">Nombre: </label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="apellidos">Apellidos: </label>
        <input type="text" id="apellidos" name="apellidos" required>

        <label for="email">Email: </label>
        <input type="email" id="email" name="email" required>

        <label for="direccion">Dirección (mínimo 18 caracteres): </label>
        <input type="text" id="direccion" name="direccion" minlength="18" required>

        <label for="telefono">Teléfono (9 dígitos): </label>
        <input type="tel" id="telefono" name="telefono" pattern="{9}" required>

        <label for="hora">Hora aproximada de entrega (HH:MM): </label>

