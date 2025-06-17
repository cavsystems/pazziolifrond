export function formatearfechasql(fecha: string): string {
  const fe = new Date(fecha);
  const dia = fe.getDate().toString().padStart(2, '0');
  const mes = (fe.getMonth() + 1).toString().padStart(2, '0');
  const anio = fe.getFullYear();
  return `${anio}-${mes}-${dia}`;
}
