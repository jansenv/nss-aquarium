/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addMouseOverEventListenersAside from './addBorder.js'
import { useFish } from './FishDataProvider.js'
import FishListComponent from './FishList.js'
import { useTips } from '../tips/TipDataProvider.js'
import TipListComponent from '../tips/TipList.js'

FishListComponent();
TipListComponent();
initializeDetailButtonEvents()
addMouseOverEventListeners()
addMouseOverEventListenersAside()
const allTheFish = useFish();
const allTheTips = useTips();

for (const fish of allTheFish) {
    console.log("individual fish object:", fish);
}

for (const tip of allTheTips) {
    console.log("individual tip object:", tip)
}