/**
 *  LocationsListComponent which renders individual location objects as HTML
 */

// Import `useLocations` from the data provider module
import { useLocations } from './LocationDataProvider.js'
import LocationComponent from './Location.js'

const LocationListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const locations = useLocations();

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
        locations.map(
            (currentLocation) => {
                return LocationComponent(currentLocation)
            }
        ).join("")
        }
        </section>
    `
}

export default LocationListComponent