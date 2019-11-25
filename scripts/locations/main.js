/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from "./dialogs.js";
import addMouseOverEventListeners from "../fish/highlight.js";
import addMouseOverEventListenersAside from "../fish/addBorder.js";
import { useLocations } from "./LocationDataProvider.js";
import LocationListComponent from "./LocationList.js";
import TipListForLocationsComponent from "../tips/TipListForLocations.js";


LocationListComponent();
TipListForLocationsComponent();
initializeDetailButtonEvents();
addMouseOverEventListeners();
addMouseOverEventListenersAside();
const allTheLocations = useLocations();

for (const location of allTheLocations) {
    console.log("individual location object:", location);
}