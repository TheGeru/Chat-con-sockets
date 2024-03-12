function socket(io) {
  io.on("connection", (socket) => {
   
    socket.on("mensaje", async (mensaje) => {
      var respuesta;
      const mensajeN = mensaje.toLowerCase();
      switch (mensajeN) {
        case "hola":
          respuesta =
            " <span>Hola, ¿En que puedo ayudarte?: menu para ver las opciones cancelar para salir: </span>";
          break;

        case "si":
        case "menu":
          respuesta = `
            <div class="row text-center">
              <span>Que opracion deseas realizar:</span>
              <span>1. Pagar el agua</span>
              <span>2. Pagar la luz</span>
              <span>3. Pagar el internet</span>
              <span>4. Consultar operaciones</span>
              <span>5. Poner una recarga</span>
              <span>6. Volver al menu principal</span>
            </div>`;
          break;

        case "cancelar":
          respuesta =
            "<span>Vuelva pronto</span>";
          //   nombreUsuario = ""; // Limpiar el nombre de usuario al finalizar la conversación
          break;

          case "1":
            respuesta = "<span>Digita tu NIP</span>";
            break;
          
          case "1234":
            respuesta = "<span>Pago exitoso/span>";
            break;
          
          case "12345":
            respuesta = "<span>NIP incorrecto, intenta de nuevo</span>";
            break;

        case "2":
          respuesta =
            "<span>Digite su numero de servicio</span>";
            case "12345":
              "<span>Pago realizado</span>";
              break;
            case "12345":
              "<span>Nip no existente</span>";
              break;
        case "3":
          respuesta =
            "<span>Digite su numero de servicio</span>";
            case "12345":
              "<span>Pago realizado</span>";
              break;
            case "12345":
              "<span>Nip no existente</span>";
              break;
        case "4":
          respuesta = `
            <div class="row text-center">
              <span>Tus últimas transacciones fueron: </span>
              <span>Ropa $1000</span>
              <span>Play 5 $25000</span>
              <span>LaComer $5000</span>
            </div>`;
          break;
        case "5":
          respuesta =
            "<span>Digita tu numero celular</span>";
          case "12345":
            "<span>Operacion realizada</span>";
            break;
        case "6":
          respuesta = `
            <div class="row text-center">
              <span>Que opracion deseas realizar:</span>
              <span>1. Pagar el agua</span>
              <span>2. Pagar la luz</span>
              <span>3. Pagar el internet</span>
              <span>4. Consultar operaciones</span>
              <span>5. Poner una recarga</span>
              <span>6. Volver al menu principal</span>
            </div>`;
          break;

        case "salir":
          respuesta =
            "<span>Nos vemos pronto</span>";
          break;

        case "adios":
          respuesta =
            "<span>Nos vemos pronto Adiós</span>";
          break;

        default:
          respuesta = `<span>Digita "menu" para las opciones</span>`;
          break;
      }
      io.emit("respuesta", respuesta);
    });
  });
}

module.exports = socket;



