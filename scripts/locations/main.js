/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import { useLocations } from "./LocationDataProvider.js";
import LocationListComponent from "./LocationList.js";
import initializeDetailButtonEvents from "./dialogs.js";


LocationListComponent();
initializeDetailButtonEvents();
const allTheLocations = useLocations();

for (const location of allTheLocations) {
    console.log("individual location object:", location);
}