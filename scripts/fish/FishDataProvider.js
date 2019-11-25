

const fishCollection = [
    {
        name: "Bitey",
        species: "Piranha",
        location: "Brazil",
        length: 4,
        food: ["Humans"],
        image: "pics/piranha.png",
    },
    {
        name: "Jawsie",
        species: "Shark",
        location: "South Africa",
        length: 264,
        food: ["Seals"],
        image: "pics/left-shark.jpg",
    },
    {
        name: "Mr. Bubbles",
        species: "Goldfish",
        location: "PetSmart",
        length: 2,
        food: ["Flakes"],
        image: "pics/goldie-fish.jpg",
    },
    {
        name: "Mrs. Dangles",
        species: "Angler Fish",
        location: "Mariana Trench",
        length: 12,
        food: ["Minnows"],
        image: "pics/angler.jpg",
    },
    {
        name: "Barry",
        species: "Barracuda",
        location: "Coral Reefs",
        length: 70,
        food: ["Salmon"],
        image: "pics/barry.jpg",
    },
    {
        name: "Snappy",
        species: "Red Snapper",
        location: "Gulf of Mexico",
        length: 30,
        food: ["Eels"],
        image: "pics/red-snapper.jpg",
    }
]

export const useFish = () => {
    return fishCollection;
}