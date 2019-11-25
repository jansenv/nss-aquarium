/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useFish } from './FishDataProvider.js'
import FishComponent from './Fish.js'

const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const fishes = useFish()

    /* old code
    
    let allFishHTML = ""

    for (const fish of fishes) {
        const fishHTML = FishComponent(fish)
        allFishHTML += fishHTML
    }

    */

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            ${
        fishes.map(
            (currentFish) => {
                return FishComponent(currentFish)
            }
        ).join("")
        }
        </section>
    `
}

export default FishListComponent