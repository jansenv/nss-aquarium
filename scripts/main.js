/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from '../highlight.js'
import addMouseOverEventListenersAside from './addBorder.js'
import { useFish } from './FishDataProvider.js'

initializeDetailButtonEvents()
addMouseOverEventListeners()
addMouseOverEventListenersAside()
const allTheFish = useFish();

for (const fish of allTheFish) {
    console.log("individual fish object:", fish);
}