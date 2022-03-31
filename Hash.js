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
        let hashIndex = this.#generateHash(hash_toConvert);
        /* console.log(this.#hashes[hashIndex - 1]); */
        if (!this.#checkIndexFree(hashIndex - 1) ) {
            let lastCollision = this.#findCollision(this.#hashes[hashIndex - 1], hash_toConvert);
            /* console.log(lastCollision); */
            let newIndex = lastCollision.index + hashIndex;
            console.log(newIndex + ' | ' +  hashIndex);
            const finalIndex = this.#checkIndexFree(newIndex) ? newIndex : this.#findNearIndex(newIndex, hashIndex);
            console.log('Final Index: ' + finalIndex);
            const new_HashKey = new HashKey(finalIndex, hash_toConvert);
            this.#hashes[finalIndex - 1] = new_HashKey;
            lastCollision.collision = new_HashKey;
            console.log(lastCollision);
        }
        else
            this.#hashes[hashIndex - 1] = new HashKey(hashIndex, hash_toConvert);
        /* console.log(this.#hashes[hashIndex - 1].collision); */
    }

    #generateHash(hash_toConvert) {
        let finalIndex = 0;
        for (const elem of hash_toConvert)
            finalIndex += this.#alphabet.indexOf(elem.toLowerCase());
        return finalIndex;
    }

    #findCollision(currentHashKey, hash_toConvert) {
        if(hash_toConvert.toLowerCase() == currentHashKey.value.toLowerCase())
            throw ValueRepeated(currentHashKey.index);
        if (currentHashKey.collision != null)
            return this.#findCollision(currentHashKey.collision, hash_toConvert);
        else
            return currentHashKey;
    }

    #findNearIndex(newIndex, initialIndex){
        const alternateIndex = initialIndex + newIndex;
        if(this.#checkIndexFree(alternateIndex))
            return alternateIndex;
        return this.#findNearIndex(alternateIndex, initialIndex);
    }

    #checkIndexFree(search_index) {
        return this.#hashes[search_index].value == null;
    }

    print(hash_output) {
        hash_output.innerHTML = ' ';
        console.log(this.#hashes);
        this.#hashes.forEach(hashElement => hashElement.toString(hash_output));
    }
}

class ValueRepeated {
    constructor(){
        this.position = this.position;
    }
    toString() {
        return `La cadena ya habia sido ingresada y se encuentra en la posición ${this.position}`;
    };
}