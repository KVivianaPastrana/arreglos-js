
let nomina= [];
nominaRegistros1=[
    {id:'1',nombre:'Andres Felipe', apellido:'Montilla Campos',cargo:'Medico',valorDia:23000,diasTrabajados:28},
    {id:'2',nombre:'Joan Sebastian',apellido:'Vargas Campoalegre',cargo:'Gerente',valorDia:22000,diasTrabajados:29},
    {id:'3',nombre:' Sergio Andres',apellido:'Leguizamo Vargas',cargo:'Profesor',valorDia:34500,diasTrabajados:30},
    {id:'4',nombre:'Leonel ',apellido:'Ortiz Salazar',cargo:'Aseador',valorDia:28000,diasTrabajados:28},
    {id:'5',nombre:'Luisa Fernanda ',apellido:'Montilla Silva',cargo:'Secretaria',valorDia:50000,diasTrabajados:31},
    {id:'6',nombre:'Eliana',apellido:'Camacho Ocampo',cargo:'Vigilante',valorDia:46000,diasTrabajados:27},
    {id:'7',nombre:'Cristian',apellido:'Camargo Ruiz',cargo:'Conductor',valorDia:62000,diasTrabajados:30},
    {id:'8',nombre:'Maria Jose ',apellido:'Leguizamo Fernandez',cargo:'Chef',valorDia: 430000,diasTrabajados:27},
    {id:'9',nombre:'Julian',apellido:'Fierro Perdomo',cargo:'Ortodoncista',valorDia:650000,diasTrabajados:31},
    {id:'10',nombre:'Yuly',apellido:'Arias Martinez',cargo:'Optometra',valorDia:545000,diasTrabajados:26},
  
]
console.log(nominaRegistros1);


nominaRegistros=[
  {id:'1',nombre:'Andres Felipe', apellido:'Montilla Campos',cargo:'Medico',valorDia:23000,diasTrabajados:28},
  {id:'2',nombre:'Joan Sebastian',apellido:'Vargas Campoalegre',cargo:'Gerente',valorDia:22000,diasTrabajados:29},
  {id:'3',nombre:' Sergio Andres',apellido:'Leguizamo Vargas',cargo:'Profesor',valorDia:34500,diasTrabajados:30},
  {id:'4',nombre:'Leonel ',apellido:'Ortiz Salazar',cargo:'Aseador',valorDia:28000,diasTrabajados:28},
  {id:'5',nombre:'Luisa Fernanda ',apellido:'Montilla Silva',cargo:'Secretaria',valorDia:50000,diasTrabajados:31},
  {id:'6',nombre:'Eliana',apellido:'Camacho Ocampo',cargo:'Vigilante',valorDia:46000,diasTrabajados:27},
  {id:'7',nombre:'Cristian',apellido:'Camargo Ruiz',cargo:'Conductor',valorDia:62000,diasTrabajados:30},
  {id:'8',nombre:'Maria Jose ',apellido:'Leguizamo Fernandez',cargo:'Chef',valorDia: 430000,diasTrabajados:27},
  {id:'9',nombre:'Julian',apellido:'Fierro Perdomo',cargo:'Ortodoncista',valorDia:650000,diasTrabajados:31},
  {id:'10',nombre:'Yuly',apellido:'Arias Martinez',cargo:'Optometra',valorDia:545000,diasTrabajados:26},

]

function calcularYAgregarSalario(registro) {
    const salario = registro.diasTrabajados * registro.valorDia;
    registro.salario = salario;
  }
nominaRegistros.forEach(function(registro)  {
    calcularYAgregarSalario(registro);
  });
console.log(nominaRegistros);



function calcularSalud(registro) {
  const salud = registro.salario * 0.12;
  registro.salud = salud;
}
nominaRegistros.forEach(function(registro) {
  calcularSalud(registro);
});

console.log(nominaRegistros);


function calcularPension(registro) {
  const pension= registro.salario * 0.16;
  registro.pension= pension;
}
nominaRegistros.forEach(function(registro)  {
  calcularPension(registro);
});
console.log(nominaRegistros);

   
function calcularArl(registro) {
  const arl = registro.salario * 0.052;
  registro.arl= arl;

}
nominaRegistros.forEach(function(registro)  {
  calcularArl(registro);
});
console.log(nominaRegistros);




function calcularSubsidio(registro){
    let salarioMinimo=1600000;
    let salarioTrans= registro.salario
    let subTransporte;
    if(salarioTrans<=2*salarioMinimo){
     subTransporte=120000;
    }
    else{
     subTransporte=0;
    }
    registro.subTransporte = subTransporte;
}
nominaRegistros.forEach(function(registro)  {
    calcularSubsidio(registro);
  });
console.log(nominaRegistros);
  

function calcularRetencion(registro){
  let salarioMinimo=1600000;
  let salarioRetencion= registro.salario
  let retencion;
  if(salarioRetencion<=6*salarioMinimo){
    retencion= registro.salario*0.02;
  }
  else if (salarioRetencion<=8*salarioMinimo){
     retencion= registro.salario*0.04;
    }
    else if (salarioRetencion<=12*salarioMinimo){
      retencion= registro.salario*0.08;
      }
    
  registro.retencion = retencion;
}
nominaRegistros.forEach(function(registro)  {
  calcularRetencion(registro);
});
console.log(nominaRegistros);

   
function deducibles(registro) {
  const deduciblesTotal= registro.salario +registro.pension+registro.arl ;
  registro.deduciblesTotal= deduciblesTotal;
}
nominaRegistros.forEach(function(registro)  {
  deducibles(registro);
});
console.log(nominaRegistros);



function totalPagar(registro) {
  const totalPago= registro.deduciblesTotal-registro.salario  ;
  registro.totalPago= totalPago;
}
nominaRegistros.forEach(function(registro)  {
totalPagar(registro);
});
console.log(nominaRegistros);


let nominaSeguridad = [];
nominaRegistros.forEach(function(registro) {
  
    const salud = registro.salario * 0.12;

    const pension = registro.salario * 0.16;

    const arl = registro.salario * 0.052;
const totalPago= registro.deduciblesTotal-registro.salario  ;
   nominaSeguridad.push({
     
        salud: salud,
        pension: pension,
        arl: arl,
        totalPago
    });
});

console.log(nominaSeguridad);



