import HashKey from "./HashKey.js";

export default class HashTable {
    #alphabet = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    #hashes;
    constructor(size) {
        this.#hashes = [];
        for (let i = 1; i <= size; ++i)
            this.#hashes.push(new HashKey(i));
    }

    insert(hash_toConvert) {
        const hashIndex = this.#generateHash(hash_toConvert);
        console.log(this.#hashes[hashIndex - 1]);
        console.log(this.#hashes[hashIndex - 1].value == '');
        this.#hashes[hashIndex - 1] = new HashKey(hashIndex, hash_toConvert);
    }

    #generateHash(hash_toConvert) {
        const firstIndex = this.#alphabet.indexOf(hash_toConvert[0].toLowerCase());
        const seconIndex = Math.floor(Math.sqrt(this.#alphabet.indexOf(hash_toConvert[1].toLowerCase())));
        const finalIndex = firstIndex * seconIndex;
        console.log(firstIndex + ' | ' + seconIndex);
        return finalIndex;
    }

    #collision(index, hash_toConvert){
        let newIndex = index;
        for(let i = 1; i <= 5; ++i ){
            if(this.#hashes[newIndex + i].value == ''){
                this.#hashes[newIndex].collision = newIndex + i;
                break;
            }
        }
    }

    print(hash_output) {
        hash_output.innerHTML = ' ';
        this.#hashes.forEach(hash => hash.toString(hash_output))
    }
}