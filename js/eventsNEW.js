function setPublicFigure(name) {
  document.querySelector("#figuraPublica").value = name;
}

const inputSalario = document.getElementById("salario-mensual");
const btnComparar = document.getElementById("btn-comparar");

//? Funciones
function tiempoParaGanarlo() {
  const SEGUNDOS_EN_HORA = 3600;
  const SEGUNDOS_EN_DIA = 24 * SEGUNDOS_EN_HORA;
  const SEGUNDOS_EN_ANIO = SEGUNDOS_EN_DIA * 365;

  let salarioMensual = 0;
  const salarioMensualInput = document.querySelector("#salario-mensual");

  salarioMensual = parseFloat(salarioMensualInput.value);

  const figuraPublica = document.querySelector("#figuraPublica").value;
  const salarioFiguraPublica = SALARIOS_ANUALES_FIGURAS_PUBLICAS[figuraPublica];
  const salarioAnual = salarioMensual * 12;
  localStorage.setItem('salarioAnual', JSON.stringify(salarioAnual));



  if (salarioFiguraPublica) {
    const segundosParaGanarSueldoUsuario =
      (salarioAnual / salarioFiguraPublica) * SEGUNDOS_EN_ANIO;
    const aniosParaGanarSueldoUsuario = Math.floor(
      segundosParaGanarSueldoUsuario / SEGUNDOS_EN_ANIO
    );
    const diasParaGanarSueldoUsuario = Math.floor(
      (segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) / SEGUNDOS_EN_DIA
    );
    const horasParaGanarSueldoUsuario = Math.floor(
      ((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) /
        SEGUNDOS_EN_HORA
    );
    const minutosParaGanarSueldoUsuario = Math.floor(
      (((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) %
        SEGUNDOS_EN_HORA) /
        60
    );

    Swal.fire({
      icon: "success",
      width: 600,
      title: "¡Vaya! Que sorpresa😅",
      text: `A ${figuraPublica} le llevaría ${aniosParaGanarSueldoUsuario} años, ${diasParaGanarSueldoUsuario} días, ${horasParaGanarSueldoUsuario} horas, y ${minutosParaGanarSueldoUsuario} minutos ganar tu salario anual.`,
      backdrop: `
    rgba(0,0,123,0.4)
    url("./assets/images/cash.gif")
    left top
    repeat
  `,
  iconHtml: '<img class="iconNEW" src="./assets/images/fCash.gif">',
  customClass: {
    icon: 'no-border'
  }
  
    });
  } else {
  }
}

const SALARIOS_ANUALES_FIGURAS_PUBLICAS = {
  Messi: 41000000,
  Shakira: 30000000,
  Ibai: 2000000,
};

tiempoParaGanarlo();
