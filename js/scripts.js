function createCard (person) {
  const card = `
        <div class="card">
          <div class="card-img-container">
            <img class="card-img" src="${person.picture.large}" alt="profile picture">
          </div>
          <div class="card-info-container">
            <h3 class="card-name cap">${person.name.first} ${person.name.last}</h3>
            <p class="card-text">${person.email}</p>
            <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
          </div>
        </div>`
  return card
}

function createModal (card) {
  // do something
}

fetch('https://randomuser.me/api/?results=12&nat=us')
  .then(data => data.json())
  .then(results => {
    const people = results.results
    let cardsHTML = ''
    for (let i = 0; i < people.length; i++) {
      cardsHTML += createCard(people[i])
    }
    return cardsHTML
  })
  .then(allCards => document.querySelector('#gallery')
    .insertAdjacentHTML('beforeend', allCards))
