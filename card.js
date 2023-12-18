function printCountries(data) {
  //function printCountries(data) {: Esto define una función llamada printCountries que toma un parámetro llamado data.
    for (let i in data) {
      //for (let i in data) {: Inicia un bucle for...in que recorre todas las propiedades del objeto data. En cada iteración, i contendrá el nombre de la propiedad actual.
        let content = document.getElementById('cards');
        //let content = document.getElementById('cards');: Obtiene el elemento del documento HTML con el id 'cards' y lo almacena en la variable content.
        content.innerHTML += 
        //content.innerHTML += ...: Agrega contenido HTML al elemento con el id 'cards'. En cada iteración del bucle, se agrega una nueva tarjeta (card) con la información del país.
   
        //El siguiente bloque pinta las características de cada país
        `<div class="card m-2" style="width: 18rem;">
                <img src="${data[i].flags.png}" class="card-img-top">
        <div class="card-body">
               <h5 class="card-title">${data[i].name.common}</h5>
                <p class="card-text">Population: ${data[i].population}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
        <br/>`;
    }
}
// Realiza una solicitud a la API usando la función fetch que convierte la respuesta a formato JSON para luego llamar a la función printCountries con la respuesta JSON como argumento.

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(responseJson => printCountries(responseJson));

// Función para realizar una acción cuando se activa la búsqueda
    function searchFunction() {
        // Obtener el término de búsqueda del elemento con id "search"
      var searchTerm = document.getElementById("search").value;
      // Ahora solo se muestra una alerta pero puedo agregar lógica adicional aquí, como redirigir a una página de resultados.
      alert("En construcción, " + searchTerm + " ," + " disculpe las molestias.");
    }
    

  
  