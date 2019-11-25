const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Mexico's details when the button is clicked
    document.querySelector("#button--Mexico").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Mexico")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--South\\ Africa").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--South\\ Africa")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Djibouti").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Djibouti")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Iceland").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Iceland")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--China").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--China")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Syria").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Syria")
            theDialog.showModal()
        }
    )

}

export default initializeDetailButtonEvents