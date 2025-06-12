export function numeroALetras(num: number) {
  const UNIDADES = [
    'cero',
    'uno',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'seis',
    'siete',
    'ocho',
    'nueve',
  ];
  const DECENAS = [
    'diez',
    'once',
    'doce',
    'trece',
    'catorce',
    'quince',
    'dieciséis',
    'diecisiete',
    'dieciocho',
    'diecinueve',
  ];
  const DIEZMAS = [
    '',
    '',
    'veinte',
    'treinta',
    'cuarenta',
    'cincuenta',
    'sesenta',
    'setenta',
    'ochenta',
    'noventa',
  ];
  const CIENTOS = [
    '',
    'ciento',
    'doscientos',
    'trescientos',
    'cuatrocientos',
    'quinientos',
    'seiscientos',
    'setecientos',
    'ochocientos',
    'novecientos',
  ];

  function convertir(n: number): string {
    if (n < 10) return UNIDADES[n];
    if (n < 20) return DECENAS[n - 10];
    if (n < 100)
      return (
        DIEZMAS[Math.floor(n / 10)] +
        (n % 10 > 0 ? ' y ' + UNIDADES[n % 10] : '')
      );
    if (n < 1000)
      return (
        (n === 100 ? 'cien' : CIENTOS[Math.floor(n / 100)]) +
        (n % 100 > 0 ? ' ' + convertir(n % 100) : '')
      );
    if (n < 1000000) {
      const miles = Math.floor(n / 1000);
      const resto = n % 1000;
      let milesTexto: string = miles === 1 ? 'mil' : convertir(miles) + ' mil';
      return milesTexto + (resto > 0 ? ' ' + convertir(resto) : '');
    }

    if (n < 10000000) {
      const millones = Math.floor(n / 1000000);
      const resto = n % 1000000;
      let milesTexto: string =
        millones === 1 ? 'unmillo' : convertir(millones) + ' millones';
      return milesTexto + (resto > 0 ? ' ' + convertir(resto) : '');
    }

    return 'numero muy grande';
  }

  const partes = num.toString().split('.');
  const entero = parseInt(partes[0]);
  const pesos = partes[1] ? parseInt(partes[1].substring(0, 2)) : 0;

  let texto = convertir(entero).trim() + ' pesos';
  if (pesos > 0) {
    texto += ' con ' + convertir(pesos).trim() + 'centavos';
  }
  return texto;
}

// Ejemplo

// ➜ "ciento cuarenta y ocho mil cincuenta y dos pesos con setenta y cinco centavos"
