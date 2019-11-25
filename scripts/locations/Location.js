/**
 *  LocationComponent which renders individual fish objects as HTML
 */
const LocationComponent = (location) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${location.image}" alt="">
            </div>
            <div class="fish__name">${location.country}</div>
            <button id="button--${location.country}">Details</button>

            <dialog class="dialog--fish" id="details--${location.country}">
                <div>Water Temperature: ${location.waterTemperature} F</div>
                <div>City: ${location.city}</div>

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default LocationComponent