import { useLocationTips } from "./TipDataProvider.js";
import TipComponent from "./Tip.js";

const TipListForLocationsComponent = () => {
    const contentElement = document.querySelector(".content")
    const tips = useLocationTips()

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

export default TipListForLocationsComponent