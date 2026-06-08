// Mock movie data simulating OMDB API responses
export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  Actors: string;
}

export const MOVIES: Movie[] = [
  {
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    Plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Andy Dufresne, a banker wrongfully convicted of murdering his wife and her lover, is sentenced to life in Shawshank State Penitentiary. There, he befriends Red, a long-term inmate who has been inside for decades. Andy maintains his innocence and works on various projects, including expanding the prison library and helping the guards with their finances. Over the years, Andy hatches an elaborate escape plan while giving his fellow inmates hope and teaching them about the power of hope and perseverance.",
    Actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler"
  },
  {
    Title: "Inception",
    Year: "2010",
    Poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Dom Cobb is a skilled extractor, capable of infiltrating people's dreams to steal their secrets. He is offered a chance to have his criminal history erased as payment for the implantation of an idea into a target's subconscious. The mission takes him and his team through multiple layers of dreams within dreams, where the laws of physics bend and time dilates. As they go deeper, the line between reality and the dream world becomes increasingly blurred, and Cobb must confront his own demons represented by his deceased wife who haunts his subconscious.",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy"
  },
  {
    Title: "The Matrix",
    Year: "1999",
    Poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&q=80",
    Plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. Thomas Anderson, living a double life as a programmer by day and hacker by night, discovers that the world he knows is actually a simulated reality called the Matrix, created by sentient machines to distract humans while using their bodies as an energy source. He is extracted from the Matrix and brought aboard the Nebuchadnezzar, where he learns that he may be 'The One' prophesied to end the war between humans and machines. Under the guidance of Morpheus and Trinity, he must master his abilities and embrace his destiny.",
    Actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving"
  },
  {
    Title: "Pulp Fiction",
    Year: "1994",
    Poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80",
    Plot: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption. The film weaves together multiple storylines in a non-linear narrative, following various criminals in Los Angeles. Two hitmen discuss philosophy and fast food while on their way to retrieve a briefcase for their boss. A boxer is paid to throw a fight but decides to win instead, leading to dire consequences. The boss's wife goes out for dinner with one of the hitmen, leading to a night of dancing and near-fatal drug overdose. Through these interconnected stories, the film explores themes of loyalty, redemption, and the banality of violence in the criminal underworld.",
    Actors: "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis"
  },
  {
    Title: "Forrest Gump",
    Year: "1994",
    Poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&q=80",
    Plot: "The presidencies of Kennedy and Johnson, the Vietnam War, and the Watergate scandal unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart. Despite his intellectual limitations, Forrest Gump finds himself present at many defining moments in American history. From teaching Elvis Presley to dance, to becoming an All-American football player, serving in Vietnam, meeting presidents, and becoming a ping-pong champion and successful businessman, he inadvertently influences major historical events. Throughout his extraordinary life journey, he never loses sight of his one true love, Jenny, the girl who was kind to him as a child.",
    Actors: "Tom Hanks, Robin Wright, Gary Sinise, Sally Field"
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&q=80",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the city streets. The partnership proves effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker. The Joker's goal is to prove that even the most righteous people can be corrupted, targeting Harvey Dent specifically to prove his point about the fragility of civilization and morality.",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Earth is dying, with devastating dust storms destroying crops and making the planet increasingly uninhabitable. Former NASA pilot Cooper is recruited to pilot a spacecraft through a newly discovered wormhole near Saturn, leading to distant galaxies where potentially habitable planets have been identified. Leaving behind his young daughter Murph and son Tom, Cooper joins a team of researchers on a mission to find a new home for humanity. As they explore planets warped by extreme gravitational forces near a massive black hole, time becomes relative, and decades pass on Earth while only hours elapse for the crew.",
    Actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine"
  }
];

// Function to get a random movie
export function getRandomMovie(): Movie {
  return MOVIES[Math.floor(Math.random() * MOVIES.length)];
}
