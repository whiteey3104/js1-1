
//  <section class="type1">の処理
let obj = [
    { ele: document.getElementById('title1'), flg: true },
    { ele: document.getElementById('title2'), flg: true }
]


for (let i = 0; i < obj.length; i++) {

    let objIdx = obj[i]

    objIdx.ele.addEventListener('click', () => {
        if (objIdx.flg) {
            addChildElement(objIdx.ele, i + 3)
            objIdx.flg = false
        } else {
            removeClassElement(objIdx.ele, `${objIdx.ele.id}__child`)
            objIdx.flg = true
        }
    })
}

const addChildElement = (ele, number) => {

    ele.setAttribute('data', "▲")

    for (let i = number; i > 0; i--) {

        let newDiv = document.createElement("li")
        let newContent = document.createTextNode(`中身${i}`)

        newDiv.classList.add(`${ele.id}__child`, "child")
        newDiv.appendChild(newContent)
        ele.parentNode.insertBefore(newDiv, ele.nextSibling)
    }
}

const removeClassElement = (ele, className) => {

    let elements = document.getElementsByClassName(className)

    ele.setAttribute('data', "▼")

    while (elements.length > 0) {
        let e = elements[0]
        e.parentNode.removeChild(e)
    }
}

//  <section class="type2">の処理

let obj2 = [
    { ele: document.getElementById('title3'), flg: true },
    { ele: document.getElementById('title4'), flg: true }
]

for (let i = 0; i < obj2.length; i++) {

    let obj2Idx = obj2[i]

    obj2Idx.ele.addEventListener('click', () => {
        let e = obj2Idx.ele.parentNode.childNodes[3]

        if (obj2Idx.flg) {
            obj2Idx.ele.setAttribute('data', "▲")
            e.style.display = "block"
            obj2Idx.flg = false
        } else {
            obj2Idx.ele.setAttribute('data', "▼")
            e.style.display = "none"
            obj2Idx.flg = true
        }
    })
}





