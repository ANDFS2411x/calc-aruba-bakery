const lista       = document.getElementById('listaIngredientes');
const btnAgregar  = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const resultadoEl = document.getElementById('resultado');

function crearIngrediente() {
  const div = document.createElement('div');
  div.className = 'ingrediente';
  div.innerHTML = `
    <label>Costo paquete ($):</label>
    <input type="number" class="costoPaquete" placeholder="5000">
    <label>Cantidad total:</label>
    <input type="number" class="cantidadPaquete" placeholder="1000">
    <label>Usas (g o unidades):</label>
    <input type="number" class="cantidadUsada" placeholder="250">
  `;
  lista.appendChild(div);
}

btnAgregar.addEventListener('click', crearIngrediente);

btnCalcular.addEventListener('click', () => {
  let costoIngr = 0;
  document.querySelectorAll('.ingrediente').forEach(ing => {
    const c   = parseFloat(ing.querySelector('.costoPaquete').value)  || 0;
    const tot = parseFloat(ing.querySelector('.cantidadPaquete').value)|| 1;
    const uso = parseFloat(ing.querySelector('.cantidadUsada').value)  || 0;
    costoIngr += (c / tot) * uso;
  });
  const mano   = parseFloat(document.getElementById('manoObra').value) || 0;
  const extra  = parseFloat(document.getElementById('gastos').value)    || 0;
  const margen = parseFloat(document.getElementById('margen').value)    || 0;
  const total = costoIngr + mano + extra;
  const final = total * (1 + margen / 100);
  resultadoEl.textContent = `Sugerido: $${final.toFixed(2)}`;
});

// Ingrediente inicial
crearIngrediente();
