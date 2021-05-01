function showCharacterData() {
  let requestURL = 'https://rickandmortyapi.com/api/character/5';

  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';

  request.send();

  request.onload = function () {
    var currencyRate_json = request.response;
    characterData(currencyRate_json);
  };

  function characterData(jsonObj) {
    let image = document.createElement('img');
    let name = document.createElement('p');
    let status = document.createElement('p');
    let species = document.createElement('p');
    let gender = document.createElement('p');
    let created = document.createElement('p');

    image.src = jsonObj.image;
    document.querySelector('main').append(image);

    name.textContent = 'Name: ' + jsonObj.name;
    document.querySelector('main').append(name);
    status.textContent = 'Status: ' + jsonObj.status;
    document.querySelector('main').append(status);
    species.textContent = 'Species: ' + jsonObj.species;
    document.querySelector('main').append(species);
    gender.textContent = 'Gender: ' + jsonObj.gender;
    document.querySelector('main').append(gender);
    created.textContent = 'Created: ' + jsonObj.created;
    document.querySelector('main').append(created);
  }
}
