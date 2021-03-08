const touch = ({ clientX, clientY, identifier, pageX, pageY, screenX, screenY }) => {
    return { id: identifier, clientX, clientY, pageX, pageY, screenX, screenY }
}
module.exports = {
    touch
}