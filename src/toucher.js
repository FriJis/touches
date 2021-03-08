const Eventer = require('./core/eventer')

module.exports = class Toucher {
    constructor() {
        this.on = {
            horizontal: undefined,
            vertical: undefined,
            start: undefined,
            move: undefined,
            end: undefined
        }
        const eventer = new Eventer()
        document.addEventListener('touchstart', e => eventer.start(e))
        document.addEventListener('touchmove', e => eventer.move(e))
        document.addEventListener('touchenv', e => eventer.end(e))
    }
}