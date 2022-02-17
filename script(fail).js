const tableContainer = document.querySelector('.table')
const table = document.createElement('table')
const tHead = document.createElement('thead')
const tBody = document.createElement('tbody')
//
function createTable(data) {
  // const keys = Object.keys(data[0])
  tableContainer.append(table)
  table.append(tHead)
  table.append(tBody)
  // for (let i = 0; i < keys.length - 1; i++) {
  //   let th = document.createElement('th')
  //   tHead.append(th)
  //   th.innerHTML = keys[i]
  // }
  // fillTable(table, data)

  function createHead(data) {
    let td = document.createElement('td')

    if (data === '0') {
      let trHead = document.createElement('tr')
      tBody.append(trHead)

      for (let key in data[0]) {
        let tdHead = createRow(key)
        trHead.append(tdHead)
      }
    }
  }

  createHead()

  createRow(data)
}

function createRow(data) {
  let td = document.createElement('td')

  if (typeof data === 'string') {
      td.innerHTML = data
      return td
    }

  if (typeof data == 'object' && data !== null) {
    const values = Object.values(data)
    const keys = Object.keys(data)

    console.log('values', values)
    console.log('keys', keys)

    // if (keys[0] === '0') {
    //   createHead(data[0])
    // }

    if (keys[1] === '1') {
      let trBody = document.createElement('tr')
      tBody.append(trBody)

      values.map((item, index) => {
        console.log('item', item)
        let tdBody = createRow(item)

      })

      // values.map((obj, index) => {
      //   let tr = document.createElement('tr')
      //
      //   let tdBody = createRow(obj)
      //   tr.append(tdBody)
      // })


    }
    }


  return td
}


// function fillTable(table, data) {
//   data.forEach(row => addTableRow(table, row))
// }
//
// function addTableRow(table, obj = {}) {
//   const values = Object.values(obj)
//   const keys = Object.keys(obj)
//
//   let tr = document.createElement('tr')
//   tBody.append(tr)
//
//   for (let k = 0; k < values.length - 1; k++) {
//     const complexDate = obj[keys[k]]
//     let td = document.createElement('td')
//     tr.append(td)
//
//     if (keys[k] === 'image') {
//       let img = document.createElement('img')
//       td.append(img)
//
//       img.src = values[k]
//       continue
//     }
//
//     if (Array.isArray(complexDate)) {
//       td.innerHTML = getStringFromArray(complexDate)
//       continue
//     }
//
//     if (typeof complexDate === 'object' && complexDate !== null && !(Array.isArray(complexDate))) {
//       td.innerHTML = getStringFromObj(complexDate)
//       continue
//     }
//     td.innerHTML = values[k]
//   }
// }

fetch('./src/data.json')
  .then(response => response.json())
  .then(json => createTable(json));


// function getStringFromObj(obj) {
//   const keys = Object.keys(obj)
//   const values = Object.values(obj)
//   let string = ``
//
//   for (let i = 0; i < keys.length; i++) {
//     if (values[i] !== null) {
//       string = string + `${values[i]}\n`
//     }
//
//   }
//   return string
// }
//
// function getStringFromArray(arr) {
//   let arrDate = ``
//
//   arr.forEach(item => {
//     if (item !== null) {
//       arrDate = arrDate + `${getStringFromObj(item)} |\n`
//       getStringFromObj(item)
//     }
//   })
//   return arrDate
// }

// Порционный показ данных (например по 5 штучек и кнопку "Показать еще").
// Сортировка (по кнопке в каждой колонке, кроме картинки. Со вложенными файлами - выбирать
// по каким данным сортировать).


// Кол-во страниц выводить и переключаться по ним.
