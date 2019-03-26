import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination: 'Melbourne',
        country: 'Australie',
        photo: 'https://i.postimg.cc/VsprqqBy/melbourne.jpg',
        distance: '16 621 km'
    },
    {
        destination: 'Quebec',
        country: 'Canada',
        photo: 'https://i.postimg.cc/rmbm9T4G/quebec.jpg',
        distance: '5 600 km'
    },
    {
        destination: 'Ile de la Réunion',
        country: 'France',
        photo: 'https://i.postimg.cc/h4fpsR6X/reunion.png',
        distance: '9 016 km'
    },
    {
        destination: 'Thaïlande',
        country: 'Asie',
        photo: 'https://i.postimg.cc/t4Hk9ZT6/thailande.jpg',
        distance: '9 210 km'
    },
    {
        destination: 'Cuba',
        country: 'Caraïbes',
        photo: 'https://i.postimg.cc/265bwTKY/cuba.jpg',
        distance: '7 750 km'
    }
];

const Travels = () => (
    <div>
        {travels.map(travel => (
            <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
        ))}
    </div>
)

export default Travels;