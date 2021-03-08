const {touch: touchInt} = require('../helpers/interfaces')

module.exports = class Data {
    constructor() {
        this.touches = []
    }
    set(id, d) {
        let touch = this.touches.filter(t => t.identifier == id)[0]
        if(!touch) {
            touch = d
        } else {
            touch = {
                ...touch,
                ...d
            }
        }
        this.touches = this.touches.filter(t => t.identifier != id)
        this.touches.push(touch)
    }
    get(id) {

    }
    remove(id) {
        this.touches = this.touches.filter(t => t.identifier != id)
    }
}
