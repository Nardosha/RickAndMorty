const tableContainer = document.querySelector('.table')

function createTable(data) {
    const table = document.createElement('table')
    const tHead = document.createElement('thead')
    const keys = Object.keys(data[0])

    tableContainer.appendChild(table)
    table.appendChild(tHead)
    const tBody = document.createElement('tbody')
    table.appendChild(tBody)

    for (let i = 0; i < keys.length-1; i++) {
        let th = document.createElement('th')
        tHead.appendChild(th)
        th.innerHTML = keys[i]
    }
    fillTable(table, data)
}

function fillTable(table, data) {
    data.forEach(row => addTableRow(table, row))
}

function addTableRow(table, obj = {}) {
    const tBody = table.querySelector('tbody')
    const values = Object.values(obj)
    const keys = Object.keys(obj)

    let tr = document.createElement('tr')
    tBody.appendChild(tr)

    for (let k = 0; k < values.length - 1; k++) {
        let td = document.createElement('td')
        tr.appendChild(td)

        if (keys[k] === 'image') {
            let img = document.createElement('img')
            td.append(img)
            img.src = values[k]
            continue
        }

        td.innerHTML = values[k]
    }
}

fetch('./src/data.json')
    .then(response => response.json())
    .then(json => createTable(json));


