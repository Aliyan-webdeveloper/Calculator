let screen = document.getElementById("screen");

function clearField(){
    console.log('clearField')
    screen.innerHTML = '';
}
function setValue(){
    console.log('setValue')
    const value = event.toElement.childNodes[0].textContent;
    screen.innerHTML = screen.innerHTML + value
}


function showResult(){
    console.log('showResult')
    const stringQuery = screen.innerHTML
    const result = resolvingQuery(stringQuery)
    clearField()
    screen.innerHTML = result
}
function resolvingQuery(query) {
    
    let result;
    try {
        result = eval(query)
    } catch(error) {
        console.error(error)
        result = error.message
    }
    return result
}

