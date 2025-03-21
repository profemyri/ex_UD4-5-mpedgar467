<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Freiduría online</title>
</head>
<body>
    <h1>¡¡Pide aquí tu rico pescaíto!!</h1>

    <img src="pescado_frito.jpg" alt="Bandeja pescado frito">

    <form action="#" method="POST">

            <h2>Datos del cliente</h2>

            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required><br>

            <label for="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" minlength="18" required><br>

            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" pattern="^\d{9}$" required><br>

            <label for="hora">Hora aproximada de entrega:</label>
            <input type="time" id="hora" name="hora" required><br>
    

        <h3>Pedido de pescado</h3>

            <label for="tipo_pescado">Tipo de pescado:</label><br>
            <input type="radio" id="calamares" name="tipo_pescado" value="Calamares" required>
            <label for="calamares">Calamares</label><br>

            <input type="radio" id="adobo" name="tipo_pescado" value="Adobo" required>
            <label for="adobo">Adobo</label><br>

            <input type="radio" id="boquerones" name="tipo_pescado" value="Boquerones" required>
            <label for="boquerones">Boquerones</label><br>

            <label for="raciones">Nº de raciones:</label>
            <input type="number" id="raciones" name="raciones" min="1" max="5" required><br>

            <label for="acompañamiento">Acompañamiento:</label><br>
            <input type="tapas" id="patatas_fritas" name="acompanamiento" value="Patatas fritas">
            <label for="patatas_fritas">Patatas fritas</label><br>

            <input type="tapas" id="ensaladilla" name="acompanamiento" value="Ensaladilla">
            <label for="ensaladilla">Ensaladilla</label><br>

            <input type="tapas" id="manzanilla" name="acompanamiento" value="Botella de Manzanilla">
            <label for="manzanilla">Botella de Manzanilla</label><br>

            <label for="metodo_pago">Método de pago:</label><br>
            <input type="radio" id="efectivo" name="metodo_pago" value="Efectivo" required>
            <label for="efectivo">Efectivo</label><br>

            <input type="radio" id="tarjeta" name="metodo_pago" value="Tarjeta" required>
            <label for="tarjeta">Tarjeta</label><br>

            <input type="radio" id="paypal" name="metodo_pago" value="PayPal" required>
            <label for="paypal">PayPal</label>
            <label for="instrucciones">Instrucciones adicionales:</label><br>
            <text id="instrucciones" name="instrucciones" maxlength="150"></text><br>

        <button type="submit">Enviar Pedido</button>
    </form>
    <footer>
    <p>Realizao por [Mario Pedrós Garcia]</p>
    </footer>
</body>
</html>