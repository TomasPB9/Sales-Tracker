//Charts monthlySales
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

//values from the form
let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

//suma los valores del arreglo monthlySales
let yearlyTotal=0;
function addYearlyTotal(x){
  yearlyTotal=x+yearlyTotal;
}

//set =>permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
const monthlySales=new Set();
const monthlyLabels=new Set();

//funcion para agregar los valores introducidos por el usuario al agregar venta
function addSale(){
  console.log("Holaaaa")
}

//itera cada posicion del arreglo y los manda como parametros a la funcion addYearlyTotal
monthlySales.forEach(addYearlyTotal);

let octNums=Array.of(1200,1000,9000);
let novNums=Array.of(1100,1000,9000);
let decNums=Array.of(4000,1000,5000);

//...=> spread operator pasa multiples argumnetos a un metodo)
//...=> spread operator expande cualquier iterable como un string o array dentro de una array
// let total=Array.of(addYearlyTotal(...octNums),addYearlyTotal(...novNums),addYearlyTotal(...decNums));
// alert(addYearlyTotal(...total));

// let yearlyTotal=addYearlyTotal(...monthlySales);
//innerHTML pinta info en la pagina
yearlyLabel.innerHTML=`$ ${yearlyTotal}`;

//manda alerta con valores mayores de 1000 de monthySales
function findOver1000(){
  //find(devuelve el elemento del array) or findIndex(devuelve posicion del array del elemento)  si da TRUE
  let firstThousand=monthlySales.find(element=>element>1000);
  alert(firstThousand);
}

//funcion para resetar las graficas con valores de 0
function resetNum(){
//fill=>cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end
//Devuelve el arreglo modificado
  monthlySales.fill(0);
  monthlySalesChart.update();
}

//Bar
var monthlySalesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: monthlyLabels,
    datasets: [{
      label: '# of Sales',
      data: monthlySales,
      backgroundColor: [
        'rgba(238, 184, 104, 1)',
        'rgba(75, 166, 223, 1)',
        'rgba(239, 118, 122, 1)',
      ],
      borderWidth: 0
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//Pie
var deptSalesChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: deptLabels,
    datasets: [{
      label: '# of Sales',
      data: deptSales,
      backgroundColor: [
        'rgba(238, 184, 104, 1)',
        'rgba(75, 166, 223, 1)',
        'rgba(239, 118, 122, 1)',
      ],
      borderWidth: 0
    }]
  },
  options: {

  }
})