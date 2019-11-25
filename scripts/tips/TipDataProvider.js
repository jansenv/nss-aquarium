

const tipCollection = [
    {
        topic: "Hydration",
        content: "Make sure you always keep your fish in water."
    },
    {
        topic: "Food",
        content: "It's important to feed the right food to the right fish."
    },
    {
        topic: "Tank Cleaning",
        content: "Clean your tank every two weeks."
    },
    {
        topic: "The Right Fish Together",
        content: "Don't put prey with predator."
    },
]

const tipCollectionForLocations = [
    {
        topic: "Packing",
        content: "Make sure you always pack extra fishing lines."
    },
    {
        topic: "Safety",
        content: "Bring a weapon to defend yourself against pirates."
    },
    {
        topic: "Weather",
        content: "Always bring a hat to protect against sunburn."
    },
    {
        topic: "First Aid",
        content: "Learn how to dress your wounds in the event of a shark attack."
    },
]

export const useTips = () => {
    return tipCollection;
}

export const useLocationTips = () => {
    return tipCollectionForLocations;
}