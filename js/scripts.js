document.querySelector('body').style.backgroundColor = 'LightSteelBlue'
document.querySelector('h1').style.color = 'black'

function createCard (data) {
  data.results.forEach(result => {
    const card = document.createElement('div')
    const cardText = Array.from(document.querySelectorAll('.card-text'))
    const fullName = `${result.name.first} ${result.name.last}`

    const html = `
      <div class="card-img-container">
        <img class="card-img" src="${result.picture.large}" alt="profile picture">
      </div>
      <div class="card-info-container">
        <h3 id="name" class="card-name" cap">${fullName}</h3>
        <p class="card-text">${result.email}</p>
        <p class="card-text" cap>${result.location.city}</p>
      </div>`

    card.className = 'card'
    card.style.backgroundColor = 'OldLace'
    card.style.borderWidth = 'thick'
    cardText.forEach(card => {
      card.style.color = 'black'})
    card.insertAdjacentHTML('beforeend', html)
    document.querySelector('#gallery').insertAdjacentElement('beforeend', card)

    card.addEventListener('click', () => createModal(result))
  })
}

function createModal (result) {
  const modal = document.createElement('div')
  const loc = result.location
  const street = `${loc.street.number} ${loc.street.name}`
  const fullName = `${result.name.first} ${result.name.last}`
  const birthday = result.dob.date
  const month = birthday.substr(5, 2)
  const day = birthday.substr(8, 2)
  const year = birthday.substr(2, 2)
  const formattedBday = `${month}/${day}/${year}`

  const html = `
    <div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
        <img class="modal-img" src="${result.picture.large}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${fullName}</h3>
        <p class="modal-text">${result.email}</p>
        <p class="modal-text cap">${loc.city}</p>
        <hr>
        <p class="modal-text">${result.cell.replace(/-/, ' ')}</p>
        <p class="modal-text">${street}, ${loc.state} ${loc.postcode}</p>
        <p class="modal-text">Birthday: ${formattedBday}</p>
      </div>
    </div>
    <div class="modal-btn-container">
      <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
      <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>`

  modal.className = 'modal-container'
  modal.insertAdjacentHTML('beforeend', html)
  document.body.insertAdjacentElement('beforeend', modal)

  document.querySelector('#modal-close-btn').addEventListener('click', () => {
    modal.remove()
  })
}

fetch('https://randomuser.me/api?results=12&nat=us')
  .then(response => { return response.json() })
  .then(data => { createCard(data) })

const searchBar = `
  <form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
  </form>`

document.querySelector('.search-container').insertAdjacentHTML('beforeend', searchBar)

document.querySelector('#search-input').addEventListener('keyup', (e) => {
  const searchInput = document.querySelector('#search-input').value.toLowerCase()
  const cardNodeList = document.querySelectorAll('h3#name')
  const h3Array = Array.from(cardNodeList)

  for (let i = 0; i < h3Array.length; i++) {
    if (searchInput !== '') {
      const h3String = h3Array[i].textContent.toLowerCase()

      if (h3String.includes(searchInput)) {
        h3Array[i].parentNode.parentNode.style.display = ''
      } else {
        h3Array[i].parentNode.parentNode.style.display = 'none'
      }
    } else {
      h3Array[i].parentNode.parentNode.style.display = ''
    }
  }
})
