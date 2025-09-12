export const whatsAppMessage = (
  name: string,
  lastName: string,
  service: string,
  message: string
) => {
  return `Hola, me gustaría agendar una cita en su consultorio.\n${message ? '\n' + message + '\n' : ''}\n*Nombre:* ${name}\n*Apellido:* ${lastName}\n*Servicio:* ${service}\n\nEspero su pronta respuesta.`;
};
