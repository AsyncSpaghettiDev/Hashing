import Hash from './Hash.js';

const hash_output = document.querySelector('.hash__keys');
const hash_submit = document.querySelector('.input-submit');
const hash_input  = document.querySelector('#input-string');

hash_submit.addEventListener('click', e => {
    e.preventDefault();
    const hash_value = hash_input.value; 
    if(hash_value.length < 2)
        alert("La cadena debe ser de mínimo 2 caractéres");
    else{
        HashTable.insert(hash_value);
        HashTable.print(hash_output);
    }
})

const HashTable = new Hash(250);

HashTable.print(hash_output);