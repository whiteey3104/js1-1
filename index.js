
let obj = [
    { ele: document.getElementById('title1'), flg: true },
    { ele: document.getElementById('title2'), flg: true }
]

for (let i = 0; i < obj.length; i++) {

    let o = obj[i]

    o.ele.addEventListener('click', () => {
        if (o.flg) {
            addChildElement(o.ele, i + 3)
            o.flg = false
        } else {
            removeClassElement(o.ele, `${o.ele.id}__child`)
            o.flg = true
        }
    })
}

const addChildElement = (ele, number) => {

    ele.setAttribute('data', "▲")

    for (let i = 1; i <= number; i++) {
        ele.parentNode.insertAdjacentHTML('beforeend', `<li class="${ele.id}__child child">中身${i}</li>`);
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


