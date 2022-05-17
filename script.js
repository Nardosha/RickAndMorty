// import getData from './getRequest.js'

async function getData() {
  const url = 'https://rickandmortyapi.com/api/character/1,2,3,'
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
  createTable(data)
}

const tableContainer = document.querySelector('.table')
const table = document.createElement('table')
const tHead = document.createElement('thead')
const tBody = document.createElement('tbody')
tableContainer.appendChild(table)
table.appendChild(tHead)
table.appendChild(tBody)


function createTable(data) {
  const keys = Object.keys(data[0])
  console.log(keys)

  for (let i = 0; i < keys.length - 1; i++) {
    let th = document.createElement('th')
    tHead.appendChild(th)
    th.innerHTML = keys[i]
  }
  data.forEach(row => fillTable(row))
}

function fillTable(obj = {}) {
  const values = Object.values(obj)
  const keys = Object.keys(obj)
  let tr = document.createElement('tr')
  tBody.appendChild(tr)

  for (let k = 0; k < values.length - 1; k++) {
    const complexDate = obj[keys[k]]
    let td = document.createElement('td')
    tr.appendChild(td)

    if (keys[k] === 'image') {
      let img = document.createElement('img')
      td.append(img)
      img.src = values[k]
      continue
    }

    if (Array.isArray(complexDate)) {
      td.innerHTML = getStringFromArray(obj[keys[k]])
      continue
    }

    if (typeof complexDate === 'object' && complexDate !== null && !(Array.isArray(complexDate))) {
      td.innerHTML = getStringFromObj(obj[keys[k]])
      continue
    }
    td.innerHTML = values[k]
  }
}

// fetch('./src/data.json')
//   .then(response => response.json())
//   .then(json => createTable(json));

function getStringFromObj(obj) {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  let string = ``

  for (let i = 0; i < keys.length; i++) {
    if (values[i] !== null) {
      string = string + `${values[i]}\n`
    }

  }
  return string
}

function getStringFromArray(arr) {
  let arrDate = ``

  arr.forEach(item => {
    if (item !== null) {
      arrDate = arrDate + `${getStringFromObj(item)} |\n`
      getStringFromObj(item)
    }
  })
  return arrDate
}

getData()
createTable()
