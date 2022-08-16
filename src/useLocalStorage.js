function saveInLocalStorage(addres, content) {
    const contentJson = JSON.stringify(content)
    localStorage.setItem(addres, contentJson)
}
function getFromLocalStorage(adrees) {
    if(localStorage.getItem(adrees)) {
        return JSON.parse(localStorage.getItem(adrees));
    } else {
        return [];
    }
}

export { saveInLocalStorage,  getFromLocalStorage };