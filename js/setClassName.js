// ---------------------------------------------------

// Første opgave er at skrive en funktion der tager indtastet value
// fra det første inputfelt og sætter en variabel til at
// pege på feltet med det indtastede classname.

const pbSetClassname = document.getElementById("pbSetStyle")
const inpElementName = document.getElementById("elementName")
const inpStyleName = document.getElementById("styleName")


function setClassName() {
    const elementName = inpElementName.value
    console.log(elementName)
    //const testTag = document.getElementsByTagName(elementName)
    //console.log(testTag)

    const element = document.querySelector("." + elementName)
    console.log(element)
    //element.className = inpStyleName.value
    element.className = ""
    element.classList.add(elementName)
    element.classList.add(inpStyleName.value)
}


pbSetClassname.addEventListener("click", setClassName)