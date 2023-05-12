function setPublicFigure(name) {
    document.querySelector('#figuraPublica').value = name;
    }

const inputSalario = document.getElementById("salario-mensual")
const btnComparar = document.getElementById("btn-comparar")


  //? Funciones
  function tiempoParaGanarlo() {
    const SEGUNDOS_EN_HORA = 3600;
    const SEGUNDOS_EN_DIA = 24 * SEGUNDOS_EN_HORA;
    const SEGUNDOS_EN_ANIO = SEGUNDOS_EN_DIA * 365;
    
    localStorage.setItem("salarioMensual", document.querySelector('#salario-mensual').value);
    const salarioMensual = parseFloat(localStorage.getItem("salarioMensual"));
    
    const figuraPublica = document.querySelector('#figuraPublica').value;
    const salarioFiguraPublica = SALARIOS_ANUALES_FIGURAS_PUBLICAS[figuraPublica];
    const salarioAnual = salarioMensual * 12;
  
    if (salarioFiguraPublica) {
      const segundosParaGanarSueldoUsuario = (salarioAnual / salarioFiguraPublica) * SEGUNDOS_EN_ANIO;
      const aniosParaGanarSueldoUsuario = Math.floor(segundosParaGanarSueldoUsuario / SEGUNDOS_EN_ANIO);
      const diasParaGanarSueldoUsuario = Math.floor((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) / SEGUNDOS_EN_DIA);
      const horasParaGanarSueldoUsuario = Math.floor(((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) / SEGUNDOS_EN_HORA);
      const minutosParaGanarSueldoUsuario = Math.floor((((segundosParaGanarSueldoUsuario % SEGUNDOS_EN_ANIO) % SEGUNDOS_EN_DIA) % SEGUNDOS_EN_HORA) / 60);
      document.getElementById("resultado").innerHTML = (`A ${figuraPublica} le llevaría ${aniosParaGanarSueldoUsuario} años, ${diasParaGanarSueldoUsuario} días, ${horasParaGanarSueldoUsuario} horas, y ${minutosParaGanarSueldoUsuario} minutos ganar tu salario anual.`);
    } else {
    
    }
  }
  
  const SALARIOS_ANUALES_FIGURAS_PUBLICAS = {
    Messi: 41000000,
    Shakira: 30000000,
    Ibai: 2000000,
  };



  tiempoParaGanarlo();
