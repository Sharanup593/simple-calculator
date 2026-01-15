const res = document.getElementById('result')

function display(value) {
    res.value += value
}

function clearScreen() {
    res.value = '';
}

function calculate() {
    let q = document.getElementById('result').value
    let p = eval(q)
    document.getElementById('result').value = p
}