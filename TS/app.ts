

type scientist = {
    name: string,
    age: number | string,
    henchmen: number | string,
    info: string
}

const scientistArr: scientist[] = [

    {
        name: "Kalle",
        age: 32,
        henchmen: 10,
        info: "Dont know the diffrens betwen left and right"
    },
    {
        name: "Olle",
        age: 34,
        henchmen: 20,
        info: "Are scaerd of the dark"
    },
];


// fetch the container from html
const container = document.querySelector(".container") as HTMLElement;




// Midd section


const evilCardSection = document.createElement("div")
const evilCards = document.createElement('div')
// const cards = document.createElement('articel')

evilCardSection.className = "cardSection"
evilCards.className = "cards"

//append midd section
container.append(evilCardSection)
evilCards.innerHTML = `${scientistArr[0].name}`;
evilCardSection.append(evilCards);




//right section
const infoSection = document.createElement("section")
const infoHeadline = document.createElement("h2")
const infoUl = document.createElement("ul")

infoSection.className = "infoSection"
infoHeadline.innerHTML = "Scientist info"
infoUl.innerHTML = `${scientistArr[0].name }`

container.append(infoSection)
infoSection.append(infoHeadline)
infoHeadline.append(infoUl)




// fetch the form values by a funktion
const addEvil = document.querySelector("#addBtn") as HTMLButtonElement


addEvil?.addEventListener("click",(e) => {
    e.preventDefault()

    // const form = document.querySelector(".the-form") as HTMLFormElement
    const nameInp = document.querySelector("#nameInp") as HTMLInputElement
    const ageInp = document.querySelector("#ageInp") as HTMLInputElement
    const henchInp = document.querySelector("#hench") as HTMLInputElement
    const infoInp = document.querySelector("#infobox") as HTMLInputElement

    scientistArr.push({
        name: nameInp.value,
        age: ageInp.value,
        henchmen: henchInp.value,
        info: infoInp.value
    })

    console.log(scientistArr)

    const evilCards = document.createElement('div')

    evilCards.className = "cards"
    evilCards.innerHTML = `${nameInp.value}`
    evilCardSection.append(evilCards)

    nameInp.value = ""
    ageInp.value = ""
    henchInp.value = ""
    infoInp.value = ""

    evilCards.addEventListener("click", (e) =>{
        e.preventDefault()

        console.log("click")
    })

})
