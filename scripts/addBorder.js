const addMouseOverEventListenersAside = () => {
    const tipsSelector = document.querySelectorAll(".tip")

    for (const tip of tipsSelector) {
        tip.addEventListener(
            "mouseover",
            (theMouseOverEvent) => {
                tip.classList.add("highlightTips")
            }
        )


        tip.addEventListener("mouseout", theMouseOutEvent => {
            tip.classList.remove("highlightTips")
        })
    }
}

export default addMouseOverEventListenersAside