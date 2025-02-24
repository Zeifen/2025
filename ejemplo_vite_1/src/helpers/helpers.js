//formato simple para ejemplo
export const formatearFecha = (fecha) => {
    const fechaNueva = new Date (fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones);
}

export const formatearNumero = (numero) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN"
    }).format(numero);
  };
  

export const acortarTexto = (valor,desde,hasta) => {
    return valor.substring(desde, hasta)
}