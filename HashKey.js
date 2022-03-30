export default class HashKey {
    #index;
    #value;
    #collision;

    /**
     * @param {number} index
     * @param {number} collision
     */
    constructor(index, value = null, collision = null) {
        this.#index = index;
        this.#value = value;
        this.#collision = collision;
    }

    /**
     * @param {number} value
     */
    set collision(value) {
        this.#collision = value;
    }

    get collision() {
        return this.#collision;
    }

    get value() {
        return this.#value;
    }

    get index() {
        return this.#index;
    }

    toString(hash_output) {
        // Main container for hash data
        const container = document.createElement('span');
        if  (this.#value != null)
            container.className = 'hash__key hash__key--active';
        else
            container.className = "hash__key";
        container.setAttribute('data-index', this.#index);
        if (this.#collision != null)
            container.setAttribute('data-collision', this.#collision.index);
        // Value of hash key
        const hash_value = document.createElement('input');
        hash_value.type = 'text';
        hash_value.readOnly = true;
        hash_value.value = this.#value;
        hash_value.className = 'input hash__key-value';

        // Append value to container
        container.appendChild(hash_value);
        hash_output.appendChild(container);
    }
}