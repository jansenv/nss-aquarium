import { useTips } from "./TipDataProvider.js";
import TipComponent from "./Tip.js";

const TipListComponent = () => {
    const contentElement = document.querySelector(".content")
    const tips = useTips()

    let tipsHTML = ""

    for (const tip of tips) {
        tipsHTML += TipComponent(tip);
    }

    contentElement.innerHTML += `
        <aside class ="tipList">
            ${tipsHTML}
        </aside>
    `
}

export default TipListComponent