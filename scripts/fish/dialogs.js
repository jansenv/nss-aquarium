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

    // Show Bart's details when the button is clicked
    document.querySelector("#button--Bitey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Bitey")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Jawsie").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Jawsie")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Mr\\.\\ Bubbles").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Mr\\.\\ Bubbles")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Mrs\\.\\ Dangles").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Mrs\\.\\ Dangles")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Barry").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Barry")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--Snappy").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Snappy")
            theDialog.showModal()
        }
    )

}

export default initializeDetailButtonEvents