const Team = require('../models/teams.js')

const teamData = [
    {
        name: "Qatar",
        fifa_ranking: 49,
        capital: "Doha",
        times_won: 0,
        star_player: "Hassan Al-Haydos",
        image: "Qatar.png",
        group_letter: "A"
    },
    {
        name: "Ecuador",
        fifa_ranking: 44,
        capital: "Quito",
        times_won: 0,
        star_player: "Enner Valencia",
        image: "Ecuador.png",
        group_letter: "A"
    },
    {
        name: "Senegal",
        fifa_ranking: 18,
        capital: "Dakar",
        times_won: 0,
        star_player: "Sadio Mane",
        image: "Senegal.png",
        group_letter: "A"
    },
    {
        name: "Netherlands",
        fifa_ranking: 8,
        capital: "Amsterdam",
        times_won: 0,
        star_player: "Virgil Van Dijk",
        image: "Netherlands.png",
        group_letter: "A"
    },
    {
        name: "England",
        fifa_ranking: 5,
        capital: "London",
        times_won: 1,
        star_player: "Harry Kane",
        image: "England.jpg",
        group_letter: "B"
    },
    {
        name: "Iran",
        fifa_ranking: 23,
        capital: "Tehran",
        times_won: 0,
        star_player: "Mehdi Taremi",
        image: "Iran.png",
        group_letter: "B"
    },
    {
        name: "USA",
        fifa_ranking: 14,
        capital: "Washington DC",
        times_won: 0,
        star_player: "Christian Pulisic",
        image: "USA.png",
        group_letter: "B"
    },
    {
        name: "Wales",
        fifa_ranking: 19,
        capital: "Cardiff",
        times_won: 0,
        star_player: "Gareth Bale",
        image: "Wales.jpg",
        group_letter: "B"
    },
    {
        name: "Argentina",
        fifa_ranking: 3,
        capital: "Buenos Aries",
        times_won: 2,
        star_player: "Lionel Messi",
        image: "Argentina.jpg",
        group_letter: "C"
    },
    {
        name: "Saudi Arabia",
        fifa_ranking: 53,
        capital: "Riyadh",
        times_won: 0,
        star_player: "Salem Al-Dawsari",
        image: "Saudi-Arabia.png",
        group_letter: "C"
    },
    {
        name: "Mexico",
        fifa_ranking: 12,
        capital: "Mexico City",
        times_won: 0,
        star_player: "Javier Hernandez",
        image: "Mexico.png",
        group_letter: "C"
    },
    {
        name: "Poland",
        fifa_ranking: 26,
        capital: "Warsaw",
        times_won: 0,
        star_player: "Robert Lewandowski",
        image: "Poland.png",
        group_letter: "C"
    },
    {
        name: "France",
        fifa_ranking: 4,
        capital: "Paris",
        times_won: 2,
        star_player: "Kylian Mbappe",
        image: "France.png",
        group_letter: "D"
    },
    {
        name: "Denmark",
        fifa_ranking: 10,
        capital: "Copenhagen",
        times_won: 0,
        star_player: "Christian Eriksen",
        image: "Denmark.png",
        group_letter: "D"
    },
    {
        name: "Tunisia",
        fifa_ranking: 30,
        capital: "Tunis",
        times_won: 0,
        star_player: "Wahbi Khazri",
        image: "Tunisia.png",
        group_letter: "D"
    },
    {
        name: "Australia",
        fifa_ranking: 39,
        capital: "Canberra",
        times_won: 0,
        star_player: "Mathew Ryan",
        image: "Australia.jpg",
        group_letter: "D"
    },
    {
        name: "Spain",
        fifa_ranking: 6,
        capital: "Madrid",
        times_won: 1,
        star_player: "Sergio Ramos",
        image: "Spain.png",
        group_letter: "E"
    },
    {
        name: "Germany",
        fifa_ranking: 11,
        capital: "Berlin",
        times_won: 4,
        star_player: "Serge Gnabry",
        image: "Germany.png",
        group_letter: "E"
    },
    {
        name: "Japan",
        fifa_ranking: 24,
        capital: "Tokyo",
        times_won: 0,
        star_player: "Takumi Minamino",
        image: "Japan.png",
        group_letter: "E"
    },
    {
        name: "Costa Rica",
        fifa_ranking: 34,
        capital: "San Jose",
        times_won: 0,
        star_player: "Keylor Navas",
        image: "Costa-Rica.png",
        group_letter: "E"
    },
    {
        name: "Belgium",
        fifa_ranking: 2,
        capital: "Brussels",
        times_won: 0,
        star_player: "Kevin De Bruyne",
        image: "Belgium.jpg",
        group_letter: "F"
    },
    {
        name: "Canada",
        fifa_ranking: 43,
        capital: "Ottawa",
        times_won: 0,
        star_player: "Alphonso Davies",
        image: "Canada.png",
        group_letter: "F"
    },
    {
        name: "Morocco",
        fifa_ranking: 22,
        capital: "Rabat",
        times_won: 0,
        star_player: "Hakim Ziyech",
        image: "Morocco.png",
        group_letter: "F"
    },
    {
        name: "Croatia",
        fifa_ranking: 15,
        capital: "Zagreb",
        times_won: 0,
        star_player: "Luka Modric",
        image: "Croatia.png",
        group_letter: "F"
    },
    {
        name: "Brazil",
        fifa_ranking: 1,
        capital: "Brasilia",
        times_won: 5,
        star_player: "Neymar",
        image: "Brazil.png",
        group_letter: "G"
    },
    {
        name: "Serbia",
        fifa_ranking: 25,
        capital: "Belgrade",
        times_won: 0,
        star_player: "Dusan Vlahovic",
        image: "Serbia.png",
        group_letter: "G"
    },

    {
        name: "Switzerland",
        fifa_ranking: 16,
        capital: "Berne",
        times_won: 0,
        star_player: "Granit Xhaka",
        image: "Switzerland.png",
        group_letter: "G"
    },    
    {
        name: "Cameroon",
        fifa_ranking: 38,
        capital: "Yaounde",
        times_won: 0,
        star_player: "Joel Matip",
        image: "Cameroon.png",
        group_letter: "G"
    },    
    {
        name: "Portugal",
        fifa_ranking: 9,
        capital: "Lisbon",
        times_won: 0,
        star_player: "Cristiano Ronaldo",
        image: "Portugal.png",
        group_letter: "H"
    },    
    {
        name: "Ghana",
        fifa_ranking: 60,
        capital: "Accra",
        times_won: 0,
        star_player: "Thomas Partey",
        image: "Ghana.png",
        group_letter: "H"
    },    
    {
        name: "Uruguay",
        fifa_ranking: 13,
        capital: "Montevideo",
        times_won: 2,
        star_player: "Luis Suarez",
        image: "Uruguay.png",
        group_letter: "H"
    },   
    {
        name: "South Korea",
        fifa_ranking: 28,
        capital: "Seoul",
        times_won: 0,
        star_player: "Son Heung-Min",
        image: "South-Korea.png",
        group_letter: "H"
    },    
]


// setting variable to export data
const seedTeams = () => Team.bulkCreate(teamData);

module.exports = seedTeams;