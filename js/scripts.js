'use strict'

for (let i = 0; i < 12; i++) {
  const card = `
    <div class="card">
      <div class="card-img-container"></div>
      <div class="card-info-container"></div>
    </div>
    `
  document.querySelector('#gallery').insertAdjacentHTML('beforeend', card)
}
