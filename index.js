let firstNameId = 'first-name';
let firstNameEl = document.getElementById(firstNameId);
let lastNameId = 'last-name';
let lastNameEl = document.getElementById(lastNameId)
let addressId = 'address';
let addressEl = document.getElementById(addressId);
let citiesId = 'cities';
let citiesEl = document.getElementById(citiesId);
let hobbiesId = 'hobbies'
let hobbiesEl = document.getElementById(hobbiesId);
let avatarWrapperId = 'avatar-wrapper';
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let avatarId = 'avatar';
let avatarEl = document.getElementById(avatarId);

function alertValue() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.vaue);
    console.log(addressEl.value);
    console.log(citiesEl.value);

}

firstNameEl.value = 'Andrei';

alertValue();

lastNameEl.setAttribute('class', 'last-name-input default-input error-input');

alertValue();

lastNameEl.title = 'Wrong last name';

alertValue();

avatarEl.src = 'https://avatars.mds.yandex.net/i?id=2a00000179fc1ceb9bc245930ab6dd819355-4236087-images-thumbs&n=13';

alertValue();
avatarEl.title = 'Roma';

alertValue();

cities.value = 'Moscow';
hobbiesEl.value = 'I have not interested';
avatarWrapperEl.innerHTML = '<ul id ="list"><li>1</li><li>2</li></ul>';

let listId = 'list'
let numberList = document.getElementById(listId);
