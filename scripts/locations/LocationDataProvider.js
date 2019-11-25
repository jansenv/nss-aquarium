

const locationCollection = [
    {
        country: "Mexico",
        waterTemperature: 67,
        city: "Tijuana",
        image: "pics/tijuana.jpg",
    },
    {
        country: "South Africa",
        waterTemperature: 55,
        city: "Welkom",
        image: "pics/welkom.jpg",
    },
    {
        country: "Djibouti",
        waterTemperature: 92,
        city: "Djibouti City",
        image: "pics/djibouti.jpg",
    },
    {
        country: "Iceland",
        waterTemperature: -59,
        city: "Reykjavik",
        image: "pics/reykjavik.jpg",
    },
    {
        country: "China",
        waterTemperature: "23",
        city: "Beijing",
        image: "pics/beijing.jpg",
    },
    {
        country: "Syria",
        waterTemperature: "what",
        city: "Aleppo",
        image: "pics/aleppo.jpg",
    }
]

export const useLocations = () => {
    return locationCollection;
}