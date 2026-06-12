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
  },
  {
    Title: "The Godfather",
    Year: "1972",
    Poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    Plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son. Don Vito Corleone is the powerful head of one of New York's most prominent crime families. When he survives an assassination attempt, his son Michael reluctantly becomes involved in mob warfare, transforming from a decorated war hero into a cold and calculating crime lord. The film chronicles the Corleone family's struggle for power, loyalty, and survival in the treacherous world of the American Mafia.",
    Actors: "Marlon Brando, Al Pacino, James Caan, Robert Duvall"
  },
  {
    Title: "Schindler's List",
    Year: "1993",
    Poster: "https://images.unsplash.com/photo-1547481887-a26e2cacbf47?w=800&q=80",
    Plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis. He uses his fortune and his skills at bribery and persuasion to save over a thousand Polish Jews from certain death. Schindler transforms from a self-interested businessman into a humanitarian hero, spending his entire fortune to protect his workers from the death camps. The film is a haunting tribute to the survivors and a stark reminder of the Holocaust's horrors.",
    Actors: "Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    Poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    Plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring. The final confrontation for the fate of Middle-earth begins as the armies of the West clash with Mordor's forces at the Black Gate. Meanwhile, Frodo and Sam struggle through the barren wastes of Mordor, guided by the treacherous Gollum. In a climactic showdown at the fires of Mount Doom, the fate of all life hangs on Frodo's ability to resist the Ring's corrupting power.",
    Actors: "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom"
  },
  {
    Title: "Fight Club",
    Year: "1999",
    Poster: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    Plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more dangerous. The unnamed narrator, feeling unfulfilled by his white-collar existence, meets the charismatic Tyler Durden and the two begin an underground bare-knuckle fighting ring. The club grows from a cathartic outlet into a sprawling anarchist organization that seeks to dismantle consumer society. As the movement spirals out of control, the narrator begins to question everything he thought he knew about Tyler and himself.",
    Actors: "Brad Pitt, Edward Norton, Helena Bonham Carter, Meat Loaf"
  },
  {
    Title: "Goodfellas",
    Year: "1990",
    Poster: "https://images.unsplash.com/photo-1516550893885-985c836c5e4e?w=800&q=80",
    Plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito. Henry rises through the ranks of the New York Mafia from a young age, seduced by the glamour and power of the criminal life. Over two decades, he witnesses the corruption, violence, and paranoia that come with mob membership. When the drug money runs out and the FBI closes in, Henry must choose between loyalty to his crew and his own survival.",
    Actors: "Ray Liotta, Robert De Niro, Joe Pesci, Lorraine Bracco"
  },
  {
    Title: "The Silence of the Lambs",
    Year: "1991",
    Poster: "https://images.unsplash.com/photo-1580982172477-8e4e2deb3149?w=800&q=80",
    Plot: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer who skins his victims. Clarice Starling is tasked with interviewing Dr. Hannibal Lecter, a brilliant psychiatrist who is also a cannibalistic serial killer, hoping to gain insight into a killer known as Buffalo Bill. Lecter agrees to help but only in cryptic, riddling exchanges that force Clarice to expose her own painful past. As Buffalo Bill prepares to claim another victim, Clarice races to decode Lecter's clues before it is too late.",
    Actors: "Jodie Foster, Anthony Hopkins, Scott Glenn, Ted Levine"
  },
  {
    Title: "Titanic",
    Year: "1997",
    Poster: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    Plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic. Jack Dawson wins a third-class ticket onto the magnificent ocean liner in a card game and falls for Rose DeWitt Bukater, a first-class passenger engaged to the arrogant Cal Hockley. Their passionate romance unfolds against the backdrop of the ship's catastrophic collision with an iceberg. As the unsinkable vessel sinks into the Atlantic, Jack and Rose must fight for survival in one of history's deadliest peacetime maritime disasters.",
    Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates"
  },
  {
    Title: "Gladiator",
    Year: "2000",
    Poster: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    Plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery. Maximus is a powerful Roman general, loved by the people and by Emperor Marcus Aurelius. After the emperor's son Commodus murders his father and seizes the throne, Maximus is captured and forced to become a gladiator. He rises through the gladiatorial ranks with the adoration of the crowds, vowing to have his revenge and ultimately challenging the treacherous Commodus in the Colosseum.",
    Actors: "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed"
  },
  {
    Title: "Jurassic Park",
    Year: "1993",
    Poster: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    Plot: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose. Billionaire John Hammond has created a theme park of cloned dinosaurs on a remote tropical island. When a disgruntled employee sabotages the park's security systems, the prehistoric creatures break free and begin hunting the visitors. Dr. Alan Grant must protect Hammond's grandchildren through a night of terror as some of the most fearsome predators in history stalk them across the island.",
    Actors: "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough"
  },
  {
    Title: "Back to the Future",
    Year: "1985",
    Poster: "https://images.unsplash.com/photo-1469285994282-454cbe2e8538?w=800&q=80",
    Plot: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean automobile built by his eccentric scientist friend Doc Brown. Once in 1955, Marty inadvertently prevents his parents from meeting, jeopardizing his own existence. He teams up with a younger Doc Brown to use a bolt of lightning to power the DeLorean and return to 1985, while also engineering his parents' first meeting. The adventure is a race against time that tests Marty's courage, ingenuity, and love for his family.",
    Actors: "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover"
  },
  {
    Title: "The Departed",
    Year: "2006",
    Poster: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    Plot: "An undercover cop and a mole in the police attempt to identify each other while working for an Irish gang in South Boston. Billy Costigan is a police recruit sent undercover to infiltrate the mob, while Colin Sullivan is a mob informant who has worked his way up through the Massachusetts State Police. As both sides hunt desperately for the rat in their ranks, the two men edge closer and closer to each other. In a city built on corruption and betrayal, the line between cop and criminal becomes impossible to discern.",
    Actors: "Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg"
  },
  {
    Title: "No Country for Old Men",
    Year: "2007",
    Poster: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    Plot: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande. Llewelyn Moss takes the money, setting off a relentless pursuit by Anton Chigurh, a hitman with a deeply unsettling philosophy about fate and chance. As Chigurh leaves a trail of bodies across Texas, veteran Sheriff Ed Tom Bell struggles to comprehend the escalating carnage. The film is a meditation on fate, violence, and the sense that the world has grown too dark for older codes of honor to survive.",
    Actors: "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson"
  },
  {
    Title: "Good Will Hunting",
    Year: "1997",
    Poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    Plot: "Will Hunting, a janitor at M.I.T., has a gift for mathematics but needs help from a psychologist to find direction in his life. Will is a self-taught genius from South Boston who gets into trouble with the law. When his extraordinary mathematical talent is discovered by a prestigious professor, he is paired with therapist Sean Maguire, whose unconventional methods slowly break through Will's defensive walls. As Will confronts his troubled past and fears of abandonment, he must decide whether to embrace his potential or retreat into the familiar safety of his working-class world.",
    Actors: "Matt Damon, Robin Williams, Ben Affleck, Minnie Driver"
  },
  {
    Title: "La La Land",
    Year: "2016",
    Poster: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    Plot: "While navigating their careers in Los Angeles, a pianist and an aspiring actress fall in love while pursuing their dreams. Sebastian is a devoted jazz musician dreaming of opening his own club, while Mia is an aspiring actress facing rejection after rejection. As their romance blossoms during a magical Los Angeles summer, they push each other toward their dreams. But as their careers take off, their relationship is tested by ambition, time, and the painful reality that some dreams require sacrificing others.",
    Actors: "Ryan Gosling, Emma Stone, John Legend, Rosemarie DeWitt"
  },
  {
    Title: "The Shining",
    Year: "1980",
    Poster: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    Plot: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future. Jack Torrance accepts a job as the off-season caretaker of the Overlook Hotel, bringing his wife Wendy and young son Danny. As the winter isolation sets in and the hotel's dark history reveals itself, supernatural forces begin to take hold of Jack, driving him toward madness. Meanwhile, Danny's psychic gift forces him to witness the hotel's terrible past and the terror that is coming for his family.",
    Actors: "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers"
  },
  {
    Title: "The Lion King",
    Year: "1994",
    Poster: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    Plot: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself. After King Mufasa is murdered by his scheming brother Scar, young Simba is manipulated into believing he caused his father's death and flees the Pride Lands in shame. Raised in exile by a carefree meerkat and warthog, Simba grows up hiding from his past. When the ghost of his father appears urging him to remember who he is, Simba must return home, challenge Scar, and reclaim his birthright as the true king.",
    Actors: "Matthew Broderick, Jeremy Irons, James Earl Jones, Moira Kelly"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    Poster: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800&q=80",
    Plot: "After the devastating events of Infinity War, the universe is in ruins with only half of all life remaining. The surviving Avengers assemble once more in a desperate attempt to reverse Thanos's actions. The heroes devise an audacious time heist to collect the Infinity Stones from the past, confronting their own histories and losses along the way. Their plan leads to a final, massive battle that will determine the fate of every living being in the universe, requiring the ultimate sacrifice from one of their own.",
    Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth"
  },
  {
    Title: "Parasite",
    Year: "2019",
    Poster: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    Plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. The entire Kim family is unemployed and living in a cramped semi-basement apartment when son Ki-woo is referred for a tutoring job with the affluent Parks. The Kims devise an elaborate scheme to infiltrate the Parks' household, each member posing as an unrelated professional. What begins as a darkly comic con spirals into a shocking thriller when a hidden secret beneath the Parks' pristine home reveals that the Kims are not the only ones with a desperate design on the family's wealth.",
    Actors: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik"
  },
  {
    Title: "Whiplash",
    Year: "2014",
    Poster: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80",
    Plot: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are shaped by an instructor who will stop at nothing to push a student to their limits. Andrew Neiman is an ambitious jazz drummer at an elite New York conservatory who is singled out by the legendary but terrifying conductor Terence Fletcher. Fletcher's abusive, psychologically brutal teaching methods blur the line between mentorship and cruelty. As Andrew sacrifices his health, relationships, and sanity in pursuit of perfection, the film asks whether greatness can truly be achieved without breaking a person entirely.",
    Actors: "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist"
  },
  {
    Title: "Catch Me If You Can",
    Year: "2002",
    Poster: "https://images.unsplash.com/photo-1436891678271-9c672565d8f6?w=800&q=80",
    Plot: "A true story about Frank Abagnale Jr., who before his 21st birthday successfully conned millions of dollars by posing as a Pan Am pilot, a Georgia doctor, and a Louisiana prosecutor. Frank runs away from home after his parents' marriage collapses and discovers a remarkable talent for deception and forgery. He forges paychecks, fabricates professional credentials, and lives a life of extravagant fraud while staying one step ahead of FBI agent Carl Hanratty. Their cat-and-mouse relationship across multiple continents forms an unlikely bond between hunter and prey.",
    Actors: "Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen"
  },
  {
    Title: "The Godfather Part II",
    Year: "1974",
    Poster: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=800&q=80",
    Plot: "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and 1910s New York. Intercut with the story of Vito's rise to power is the story of his son Michael's attempts to expand the family business into Las Vegas, Hollywood, and Cuba. As Michael consolidates his control over the empire, he becomes increasingly isolated and ruthless, destroying everyone he loves in his relentless pursuit of power.",
    Actors: "Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton"
  },
  {
    Title: "Alien",
    Year: "1979",
    Poster: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80",
    Plot: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun. The commercial spacecraft Nostromo is detoured to the source of an alien signal, and when one crew member is infected by an alien organism, disaster follows. The alien begins picking off the crew one by one in the terrifying dark passages of the ship.",
    Actors: "Sigourney Weaver, Tom Skerritt, John Hurt, Ian Holm"
  },
  {
    Title: "Raiders of the Lost Ark",
    Year: "1981",
    Poster: "https://images.unsplash.com/photo-1518893883800-45cd0954574b?w=800&q=80",
    Plot: "Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis. Jones races across continents, from Nepal to Cairo, facing mercenaries, snakes, and deadly traps in a globetrotting adventure. The Ark is said to make an army invincible, and stopping the Nazis from obtaining it becomes the most dangerous mission of his life.",
    Actors: "Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies"
  },
  {
    Title: "E.T. the Extra-Terrestrial",
    Year: "1982",
    Poster: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    Plot: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world. Ten-year-old Elliott discovers a stranded alien in his backyard and secretly befriends him, naming him E.T. As Elliott and E.T. form a deep psychic bond, government agents close in, and Elliott must find a way to help E.T. get home before it is too late.",
    Actors: "Henry Thomas, Dee Wallace, Robert MacNaughton, Drew Barrymore"
  },
  {
    Title: "Scarface",
    Year: "1983",
    Poster: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    Plot: "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed. Tony Montana arrives as a political refugee and rises from dishwasher to drug lord through ruthless ambition and violence. He acquires everything he ever wanted — money, power, a beautiful wife — but paranoia and excess corrode his empire from within. His downfall is as spectacular and violent as his rise.",
    Actors: "Al Pacino, Michelle Pfeiffer, Steven Bauer, Mary Elizabeth Mastrantonio"
  },
  {
    Title: "The Terminator",
    Year: "1984",
    Poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    Plot: "A seemingly indestructible humanoid cyborg is sent from 2029 to 1984 to assassinate a waitress whose unborn son will lead humanity in a war against the machines. Sarah Connor lives an ordinary life until a relentless killing machine from the future arrives to hunt her down. A human soldier named Kyle Reese is also sent back to protect her, and together they must survive the night.",
    Actors: "Arnold Schwarzenegger, Linda Hamilton, Michael Biehn, Paul Winfield"
  },
  {
    Title: "Top Gun",
    Year: "1986",
    Poster: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
    Plot: "As students at the United States Navy's elite fighter weapons school compete to be the best in the class, one daring young pilot learns a few things from a civilian instructor. Maverick is a gifted but reckless Navy pilot who falls for his astrophysics instructor Charlie while competing against the best pilots in the Navy. When a real combat situation arises, Maverick must confront his fears to become the pilot he was always meant to be.",
    Actors: "Tom Cruise, Kelly McGillis, Val Kilmer, Anthony Edwards"
  },
  {
    Title: "Full Metal Jacket",
    Year: "1987",
    Poster: "https://images.unsplash.com/photo-1495216875107-c6c043eb703f?w=800&q=80",
    Plot: "A pragmatic U.S. Marine observes the dehumanizing effects of the Vietnam War on his fellow recruits from their brutal boot camp training to harrowing street combat in Hue City. Joker begins his journey in the sadistic barracks of Parris Island under Gunnery Sergeant Hartman. After a disturbing tragedy ends his training, he is deployed to Vietnam as a combat correspondent, where the war challenges everything he was taught about duty and humanity.",
    Actors: "Matthew Modine, R. Lee Ermey, Vincent D'Onofrio, Adam Baldwin"
  },
  {
    Title: "Die Hard",
    Year: "1988",
    Poster: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    Plot: "An off-duty cop tries to save his wife and several others taken hostage by terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles. New York detective John McClane flies to LA to reconcile with his estranged wife, only for the building to be seized by Hans Gruber and his team of thieves. Armed with only his wits and a service weapon, McClane wages a one-man war through the skyscraper.",
    Actors: "Bruce Willis, Alan Rickman, Bonnie Bedelia, Reginald VelJohnson"
  },
  {
    Title: "Rain Man",
    Year: "1988",
    Poster: "https://images.unsplash.com/photo-1507120878965-54b2d3939100?w=800&q=80",
    Plot: "Selfish yuppie Charlie Babbitt discovers his father left his entire fortune to an autistic savant brother, Raymond, and nothing to Charlie. Furious, Charlie kidnaps Raymond and takes him on a cross-country road trip, initially to exploit him for money. Gradually, Charlie's impatience gives way to genuine affection as he discovers Raymond's extraordinary abilities, and the journey transforms both brothers.",
    Actors: "Dustin Hoffman, Tom Cruise, Valeria Golino, Jerry Molen"
  },
  {
    Title: "Home Alone",
    Year: "1990",
    Poster: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    Plot: "An eight-year-old troublemaker is accidentally left behind when his family flies to France for Christmas, and must defend his home against bumbling burglars. Kevin McCallister wakes to discover his family has left for Paris without him and initially delights in having the house to himself. When two incompetent thieves target his home on Christmas Eve, Kevin turns the house into a fortress of booby traps.",
    Actors: "Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard"
  },
  {
    Title: "Terminator 2: Judgment Day",
    Year: "1991",
    Poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    Plot: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son John from an even more advanced killing machine. Two Terminators arrive from the future: a liquid-metal T-1000 sent to kill John, and a reprogrammed T-800 sent to protect him. Sarah, John, and their unlikely ally go on the run while searching for a way to prevent the nuclear war that will doom humanity.",
    Actors: "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick"
  },
  {
    Title: "Se7en",
    Year: "1995",
    Poster: "https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?w=800&q=80",
    Plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives. Detective Somerset, a world-weary veteran about to retire, is partnered with the brash Detective Mills to track a methodical killer creating elaborate crime scenes. Each murder corresponds to a deadly sin, and the case builds to an unforgettable and devastating climax.",
    Actors: "Brad Pitt, Morgan Freeman, Kevin Spacey, Gwyneth Paltrow"
  },
  {
    Title: "The Usual Suspects",
    Year: "1995",
    Poster: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80",
    Plot: "A sole survivor tells of the twisting events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup. Roger 'Verbal' Kint, a small-time con man, is the only person left alive following a shipyard massacre. Under interrogation, he recounts how he and four other criminals were manipulated by the mysterious and possibly mythical crime lord Keyser Söze.",
    Actors: "Kevin Spacey, Gabriel Byrne, Chazz Palminteri, Kevin Pollak"
  },
  {
    Title: "Heat",
    Year: "1995",
    Poster: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80",
    Plot: "A group of high-end professional thieves start to feel the heat from the LAPD when they unknowingly leave a clue at their latest heist. Neil McCauley is the consummate professional thief who lives a carefully ordered life with no ties that could compromise him. Lieutenant Hanna is the obsessive detective equally consumed by his work. Their mutual respect leads to a legendary diner confrontation, even as their inevitable clash approaches.",
    Actors: "Al Pacino, Robert De Niro, Val Kilmer, Jon Voight"
  },
  {
    Title: "Toy Story",
    Year: "1995",
    Poster: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    Plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as the top toy in a boy's room. Woody is the beloved leader of Andy's toy collection until the arrival of Buzz Lightyear, a cool space ranger who captures Andy's affections. Stranded far from home, the rivals must put aside their rivalry and work together to return before Andy moves away.",
    Actors: "Tom Hanks, Tim Allen, Don Rickles, Jim Varney"
  },
  {
    Title: "Fargo",
    Year: "1996",
    Poster: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=800&q=80",
    Plot: "Jerry Lundegaard's inept crime falls apart due to his own bungling and the persistent police work of the very pregnant Marge Gunderson. Desperate car salesman Jerry hires two criminals to kidnap his wife for a ransom from his wealthy father-in-law. The scheme goes catastrophically wrong, leaving a trail of bodies across Minnesota's frozen landscape. Heavily pregnant police chief Marge doggedly pursues the case with cheerful determination.",
    Actors: "Frances McDormand, William H. Macy, Steve Buscemi, Peter Stormare"
  },
  {
    Title: "Trainspotting",
    Year: "1996",
    Poster: "https://images.unsplash.com/photo-1513623935135-c896b59073c1?w=800&q=80",
    Plot: "Renton, deeply immersed in the Edinburgh drug scene, tries to get clean and get out, despite the allure of heroin and the ties of friendship. With a group of friends equally lost in drugs and petty crime, Renton drifts through a series of darkly comic and often tragic episodes. When a chance at a new life presents itself through a drug deal, he must choose between loyalty to his friends and the chance to finally escape.",
    Actors: "Ewan McGregor, Ewen Bremner, Jonny Lee Miller, Robert Carlyle"
  },
  {
    Title: "American History X",
    Year: "1998",
    Poster: "https://images.unsplash.com/photo-1547464345-829d7d4dc51b?w=800&q=80",
    Plot: "A former neo-Nazi skinhead tries to prevent his younger brother from going down the same wrong path that he took. Derek Vinyard is a charismatic neo-Nazi leader in Venice Beach who commits a brutal hate crime and is sent to prison. During his time inside, Derek undergoes a profound transformation. Upon release, he races to save his younger brother Danny from the path of hatred before Danny's own actions lead to irreversible consequences.",
    Actors: "Edward Norton, Edward Furlong, Beverly D'Angelo, Avery Brooks"
  },
  {
    Title: "Saving Private Ryan",
    Year: "1998",
    Poster: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
    Plot: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action. After surviving the brutal carnage of D-Day's Omaha Beach, Captain Miller and eight soldiers are sent to find Private James Ryan, the last surviving son of a family that has lost three sons in the war. The squad trudges through occupied France, risking their lives for one man.",
    Actors: "Tom Hanks, Tom Sizemore, Edward Burns, Matt Damon"
  },
  {
    Title: "The Truman Show",
    Year: "1998",
    Poster: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
    Plot: "An insurance salesman discovers his whole life is actually a reality TV show. Truman Burbank has lived his entire life in the perfect town of Seahaven without knowing it is a massive artificial set and he is the unwitting star of a live broadcast watched by billions. As small inconsistencies in the world around him accumulate, Truman starts to suspect something is deeply wrong, putting him on a collision course with the show's creator.",
    Actors: "Jim Carrey, Ed Harris, Laura Linney, Noah Emmerich"
  },
  {
    Title: "American Beauty",
    Year: "1999",
    Poster: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=800&q=80",
    Plot: "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend. Lester Burnham is a depressed suburban father in a failing marriage who finds himself reinvigorated and rebels against his empty life by quitting his job and buying his dream car. Beneath the surface of the perfectly manicured neighborhood, the desperation and longing of every household simmer toward explosion.",
    Actors: "Kevin Spacey, Annette Bening, Thora Birch, Mena Suvari"
  },
  {
    Title: "The Sixth Sense",
    Year: "1999",
    Poster: "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80",
    Plot: "A child psychologist works with a frightened, isolated boy who reveals a terrifying secret: he can see dead people who wander the earth unaware of their own death. Dr. Malcolm Crowe is a renowned psychologist who takes on the case of eight-year-old Cole Sear, a withdrawn boy haunted by terrifying visions. As Dr. Crowe helps Cole communicate with the spirits, he begins to piece together a disturbing truth about his own situation.",
    Actors: "Bruce Willis, Haley Joel Osment, Toni Collette, Olivia Williams"
  },
  {
    Title: "Memento",
    Year: "2000",
    Poster: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80",
    Plot: "A man with short-term memory loss attempts to track down his wife's murderer using tattoos and Polaroid photographs. Leonard Shelby cannot form new long-term memories following an attack that killed his wife, so he documents everything on his body and in notes. Told in reverse chronological order, the film follows Leonard as he uses these fragmented clues to hunt the killer, building to a revelation far more troubling than he can comprehend.",
    Actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior"
  },
  {
    Title: "Cast Away",
    Year: "2000",
    Poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    Plot: "A FedEx employee must transform himself physically and emotionally to survive a crash landing on a deserted island. Chuck Noland survives a plane crash over the South Pacific and washes up alone on an uninhabited island. With nothing but salvaged packages, he learns to survive in complete isolation for four years, his only companion a volleyball he names Wilson, before attempting a desperate escape driven by the woman he loves.",
    Actors: "Tom Hanks, Helen Hunt, Nick Searcy, Chris Noth"
  },
  {
    Title: "A Beautiful Mind",
    Year: "2001",
    Poster: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    Plot: "After brilliant but asocial mathematician John Nash accepts secret work in cryptography, his life takes a turn for the nightmarish. Nash makes revolutionary advances in game theory at Princeton but struggles profoundly with social interaction. When recruited by the government for Cold War code-breaking, his grip on reality deteriorates and he battles schizophrenia. With his wife Alicia's support, he eventually finds the strength to return to the work that made him legendary.",
    Actors: "Russell Crowe, Ed Harris, Jennifer Connelly, Paul Bettany"
  },
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    Poster: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80",
    Plot: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. Young Frodo Baggins inherits the One Ring and learns of its terrible power from the wizard Gandalf. Hunted by the Dark Lord's servants, Frodo sets out with a Fellowship of nine through treacherous mountains and the mines of Moria, forging bonds that will be tested to their limits.",
    Actors: "Elijah Wood, Ian McKellen, Orlando Bloom, Sean Astin"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    Poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    Plot: "While Frodo and Sam edge closer to Mordor guided by the treacherous Gollum, the divided Fellowship makes a desperate stand against Saruman's army of ten thousand at Helm's Deep. Aragorn, Legolas, and Gimli track a horde of Orcs across Rohan, and all paths lead to a massive siege battle. The fate of Middle-earth hangs on whether the forces of good can hold long enough for help to arrive.",
    Actors: "Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom"
  },
  {
    Title: "City of God",
    Year: "2002",
    Poster: "https://images.unsplash.com/photo-1533923156502-be31530547c4?w=800&q=80",
    Plot: "In the slums of Rio de Janeiro across the 1960s through 1980s, two boys grow up on opposite sides of the law. Rocket dreams of becoming a photographer, while Lil' Ze becomes one of the city's most feared drug lords. Rocket navigates the brutal world around him, documenting its violence with his camera in a sprawling saga that spans two decades of life and death in one of the world's most dangerous places.",
    Actors: "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva"
  },
  {
    Title: "Eternal Sunshine of the Spotless Mind",
    Year: "2004",
    Poster: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=800&q=80",
    Plot: "When their relationship turns sour, a couple undergo a medical procedure to have each other erased from their memories. Joel discovers that his girlfriend Clementine has had him surgically erased and decides to undergo the same procedure. While the process runs, he has second thoughts and fights from within his own memories to hold on to his feelings for her, in a film that questions whether love can survive the loss of memory.",
    Actors: "Jim Carrey, Kate Winslet, Tom Wilkinson, Kirsten Dunst"
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Poster: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&q=80",
    Plot: "After training with his mentor, Bruce Wayne begins his journey of becoming Batman to free the corrupted Gotham City from the criminal mob that has held it hostage. Bruce witnesses the murder of his parents as a child and travels the world for years seeking the training to fight crime. Mentored by Ra's al Ghul, he returns to Gotham to wage war on crime as a masked vigilante, facing a conspiracy that threatens to destroy the entire city.",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes"
  },
  {
    Title: "Brokeback Mountain",
    Year: "2005",
    Poster: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    Plot: "The story of a forbidden and secretive relationship between two cowboys, and their lives over the following two decades. In 1963, ranch hand Ennis Del Mar and rodeo cowboy Jack Twist are hired to herd sheep in Wyoming, and what begins as friendship evolves into a passionate, complex love. Over twenty years, both men marry and have children, but their relationship persists in secret meetings and the shared pain of a love that cannot openly exist.",
    Actors: "Heath Ledger, Jake Gyllenhaal, Anne Hathaway, Michelle Williams"
  },
  {
    Title: "The Prestige",
    Year: "2006",
    Poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    Plot: "After a tragic accident, two stage magicians engage in a bitter obsession to create the ultimate illusion while sacrificing everything they have to outwit each other. Robert Angier and Alfred Borden are rival Victorian-era magicians whose rivalry turns into consuming obsession, each resorting to deceit, sabotage, and extraordinary sacrifices. The film, structured like a magic trick itself, builds to a revelation that redefines everything the audience has witnessed.",
    Actors: "Hugh Jackman, Christian Bale, Michael Caine, Scarlett Johansson"
  },
  {
    Title: "There Will Be Blood",
    Year: "2007",
    Poster: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    Plot: "A story of family, religion, hatred, oil, and madness, focusing on a plainspoken oilman and a religious leader who square off for the soul of a California oil town. Daniel Plainview is a ruthless oil prospector who travels California at the turn of the 20th century, swindling landowners out of their drilling rights. When oil is discovered on land controlled by young evangelical preacher Eli Sunday, their ambitions collide in a battle of wills that consumes them both over decades.",
    Actors: "Daniel Day-Lewis, Paul Dano, Kevin J. O'Connor, Ciaran Hinds"
  },
  {
    Title: "Into the Wild",
    Year: "2007",
    Poster: "https://images.unsplash.com/photo-1439853949212-36089bba5f10?w=800&q=80",
    Plot: "After graduating from Emory University, top student Christopher McCandless abandons his possessions, donates his savings to charity, and hitchhikes to Alaska to live alone in the wilderness. Disillusioned with materialism and hypocrisy, Chris travels across the country meeting an array of people before hiking into the Alaskan wilderness with minimal supplies. The film chronicles his extraordinary journey and his ultimate fate, alone in the wild.",
    Actors: "Emile Hirsch, Marcia Gay Harden, William Hurt, Hal Holbrook"
  },
  {
    Title: "Slumdog Millionaire",
    Year: "2008",
    Poster: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=800&q=80",
    Plot: "A Mumbai teen who grew up in the slums becomes a contestant on the Indian version of Who Wants to Be a Millionaire and is suspected of cheating. Jamal Malik is one question away from the jackpot when he is taken into police custody. The story unfolds in flashback as each question unlocks a painful memory from his hard life on the streets, revealing a tale of survival and the enduring search for his childhood love.",
    Actors: "Dev Patel, Freida Pinto, Madhur Mittal, Anil Kapoor"
  },
  {
    Title: "WALL-E",
    Year: "2008",
    Poster: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=800&q=80",
    Plot: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will decide the fate of mankind. WALL-E is a lonely trash-compacting robot left on an abandoned, trash-covered Earth whose only company is a cockroach and an old recording of Hello, Dolly. When a sleek probe robot named EVE arrives from a spaceship carrying the remains of humanity, WALL-E follows her back to space on an unexpected adventure that inspires the humans to reconsider their existence.",
    Actors: "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard"
  },
  {
    Title: "Up",
    Year: "2009",
    Poster: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&q=80",
    Plot: "A 78-year-old widower travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway with him. Carl Fredricksen ties thousands of balloons to his house to fulfill a lifelong dream he shared with his late wife: traveling to South America. He inadvertently takes along an eager young wilderness explorer named Russell, and the two form an unlikely friendship. The film opens with one of cinema's most emotionally devastating love stories before launching into a joyful adventure.",
    Actors: "Edward Asner, Jordan Nagai, Bob Peterson, Christopher Plummer"
  },
  {
    Title: "Inglourious Basterds",
    Year: "2009",
    Poster: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80",
    Plot: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a cinema owner's own plans for the same. The Basterds are a squad of Jewish-American soldiers led by Lt. Aldo Raine, terrorizing the German Army with guerrilla tactics. Meanwhile, Shosanna Dreyfus plots her own revenge when a German film premiere is held in her theater. Both plots converge on a single night that could change the course of the war.",
    Actors: "Brad Pitt, Christoph Waltz, Michael Fassbender, Eli Roth"
  },
  {
    Title: "Black Swan",
    Year: "2010",
    Poster: "https://images.unsplash.com/photo-1518019671582-5a1c709e9e5c?w=800&q=80",
    Plot: "A committed dancer wins the lead role in Swan Lake only to find herself struggling to maintain her sanity. Nina Sayers is a gifted but repressed ballet dancer whose ambition drives her to win the role of the Swan Queen, a part requiring her to embody both the innocent White Swan and the sensual Black Swan. As opening night approaches, the distinction between Nina and the Swan Queen begins to dissolve in disturbing and violent ways.",
    Actors: "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey"
  },
  {
    Title: "The Social Network",
    Year: "2010",
    Poster: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    Plot: "As Harvard student Mark Zuckerberg creates the social networking site that would become Facebook, he is sued by the twins who claim he stole their idea and by his co-founder. In 2003, Zuckerberg builds a social network in a single weekend that grows beyond anyone's expectations, making him the world's youngest billionaire. The film unfolds across dual legal depositions that lay bare the ambition, betrayal, and personal costs of creating a platform that would connect billions.",
    Actors: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake, Rooney Mara"
  },
  {
    Title: "True Grit",
    Year: "2010",
    Poster: "https://images.unsplash.com/photo-1524169113253-c6ba17398207?w=800&q=80",
    Plot: "A stubborn teenage girl hires a drunken U.S. marshal to hunt down the killer of her father in hostile Indian Territory. Fourteen-year-old Mattie Ross arrives in Fort Smith after her father is murdered by the outlaw Tom Chaney and hires the hard-drinking, one-eyed marshal Rooster Cogburn to track him down. Joined by a Texas Ranger also pursuing Chaney, the unlikely trio rides into danger. Mattie's sharp mind proves indispensable throughout.",
    Actors: "Jeff Bridges, Hailee Steinfeld, Matt Damon, Josh Brolin"
  },
  {
    Title: "Django Unchained",
    Year: "2012",
    Poster: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&q=80",
    Plot: "With the help of a German bounty hunter, a freed slave named Django sets out to rescue his wife from a brutal Mississippi plantation owner. Django teams up with the eccentric Dr. King Schultz, who trains him in bounty hunting while they plan to infiltrate the charismatic and sadistic Calvin Candie's plantation called Candieland. Their mission leads to a violent confrontation where nothing goes as planned.",
    Actors: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington"
  },
  {
    Title: "The Wolf of Wall Street",
    Year: "2013",
    Poster: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    Plot: "Based on the true story of Jordan Belfort, from his rise as a wealthy stockbroker living the high life to his fall involving crime, corruption, and the federal government. Jordan arrives on Wall Street in the late 1980s as a naive young broker and quickly builds a brokerage empire on penny-stock fraud and high-pressure sales. As the money pours in, so does the excess in every form, until the FBI begins to close in.",
    Actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey"
  },
  {
    Title: "12 Years a Slave",
    Year: "2013",
    Poster: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=800&q=80",
    Plot: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Solomon is a skilled musician living comfortably with his family in 1841 when he is drugged, kidnapped, and sold into slavery in Louisiana. Over twelve brutal years he endures unimaginable hardship and cruelty while never surrendering his sense of identity or his determination to reclaim his freedom.",
    Actors: "Chiwetel Ejiofor, Michael Fassbender, Benedict Cumberbatch, Brad Pitt"
  },
  {
    Title: "Gravity",
    Year: "2013",
    Poster: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80",
    Plot: "A medical engineer and an astronaut work together to survive after a catastrophe destroys their shuttle and leaves them adrift in orbit. Dr. Ryan Stone is on her first space mission with veteran astronaut Matt Kowalski when their shuttle is destroyed by a cascade of debris. With oxygen dwindling and no hope of rescue, they must rely on each other and their own resourcefulness to find a way back to Earth.",
    Actors: "Sandra Bullock, George Clooney, Ed Harris, Orto Ignatiussen"
  },
  {
    Title: "The Grand Budapest Hotel",
    Year: "2014",
    Poster: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800&q=80",
    Plot: "The adventures of Gustave H., legendary concierge at a famous European hotel, and Zero Moustafa, the lobby boy who becomes his most trusted friend. M. Gustave H. is the impeccably cultivated concierge of a palatial alpine resort when he is accused of murdering an elderly guest who left him a priceless painting. He must escape prison and prove his innocence in a madcap adventure that unfolds against the gathering darkness of fascist takeover.",
    Actors: "Ralph Fiennes, Tony Revolori, Saoirse Ronan, F. Murray Abraham"
  },
  {
    Title: "Mad Max: Fury Road",
    Year: "2015",
    Poster: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80",
    Plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners and a drifter named Max. When Imperator Furiosa escapes the warlord Immortan Joe with five of his enslaved wives in an armored war rig, Joe unleashes his entire army in furious pursuit. The reluctant warrior Max joins forces with Furiosa in a relentless, visceral chase across the wasteland.",
    Actors: "Tom Hardy, Charlize Theron, Nicholas Hoult, Hugh Keays-Byrne"
  },
  {
    Title: "The Revenant",
    Year: "2015",
    Poster: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=800&q=80",
    Plot: "A frontiersman on a fur trading expedition fights for survival after being mauled by a bear and left for dead by members of his own hunting team. Hugh Glass is savagely attacked by a bear and left for dead by companions who murder his son before his eyes. Barely alive and driven by vengeance, Glass drags himself through hundreds of miles of brutal winter wilderness in a testament to the ferocity of the human will to survive.",
    Actors: "Leonardo DiCaprio, Tom Hardy, Will Poulter, Domhnall Gleeson"
  },
  {
    Title: "Arrival",
    Year: "2016",
    Poster: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800&q=80",
    Plot: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world. Expert linguist Dr. Louise Banks is recruited to make first contact with the heptapods inside one of the crafts. As she decodes their language, she begins to experience mysterious visions, and the film builds toward a profound revelation about the nature of time, language, and the choices we make.",
    Actors: "Amy Adams, Jeremy Renner, Forest Whitaker, Michael Stuhlbarg"
  },
  {
    Title: "Moonlight",
    Year: "2016",
    Poster: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
    Plot: "A young African-American man grapples with his identity and sexuality while growing up in a rough neighborhood of Miami. The film follows Chiron across three pivotal chapters of his life: as a small, shy boy raised by a drug-addicted mother; as a teenager discovering his sexuality; and as a hardened adult who has buried his true self. His only constant is his childhood friend Kevin, for whom he carries a complicated love.",
    Actors: "Trevante Rhodes, Andre Holland, Naomie Harris, Mahershala Ali"
  },
  {
    Title: "Get Out",
    Year: "2017",
    Poster: "https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?w=800&q=80",
    Plot: "A young African-American man visits his white girlfriend's parents for the weekend, where his simmering unease eventually reaches a terrifying boiling point. Chris is unsettled by the strangely over-welcoming behavior of the parents and the robotic demeanor of their black servants. As the weekend progresses and more guests arrive at a garden party, what begins as sharp social satire escalates into a horror thriller that recontextualizes every moment that came before.",
    Actors: "Daniel Kaluuya, Allison Williams, Bradley Whitford, Catherine Keener"
  },
  {
    Title: "Dunkirk",
    Year: "2017",
    Poster: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    Plot: "Allied soldiers from Belgium, Britain, and France are surrounded by the German Army and await a desperate evacuation during World War II. In 1940, Germany's rapid advance has trapped nearly 400,000 Allied soldiers on the beaches of Dunkirk, France. The film unfolds across three interlocking timelines — on the beach, at sea, and in the air — converging in a breathtaking rescue that stands as one of history's most extraordinary military evacuations.",
    Actors: "Fionn Whitehead, Tom Hardy, Mark Rylance, Cillian Murphy"
  },
  {
    Title: "A Quiet Place",
    Year: "2018",
    Poster: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
    Plot: "In a post-apocalyptic world, a family is forced to live in near silence while hiding from creatures that hunt exclusively by sound. The Abbott family navigates their isolated farm in a world where the slightest noise attracts terrifying blind creatures. Father Lee and mother Evelyn must prepare their children for survival in absolute silence, while Evelyn's pregnancy brings a new and seemingly impossible challenge. The film is a masterclass in tension built almost entirely on silence.",
    Actors: "John Krasinski, Emily Blunt, Millicent Simmonds, Noah Jupe"
  },
  {
    Title: "Green Book",
    Year: "2018",
    Poster: "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80",
    Plot: "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a concert tour through the Deep South in 1962. Tony Lip, a tough Bronx bouncer, and Dr. Don Shirley, a refined virtuoso pianist, could not be more different. As the two travel through Jim Crow states navigating racism and danger, a genuine friendship forms between two men who had nothing in common but humanity.",
    Actors: "Viggo Mortensen, Mahershala Ali, Linda Cardellini, Nick Vallelonga"
  },
  {
    Title: "Bohemian Rhapsody",
    Year: "2018",
    Poster: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80",
    Plot: "The story of the legendary rock band Queen and lead singer Freddie Mercury, leading up to their iconic performance at Live Aid in 1985. Freddie Mercury transforms himself from a young man of Parsi heritage into one of rock music's most beloved frontmen. The film charts the band's meteoric rise, the highs of their greatest hits, internal tensions, and the explosive climax of their legendary Live Aid set, considered one of the greatest rock performances ever staged.",
    Actors: "Rami Malek, Lucy Boynton, Gwilym Lee, Ben Hardy"
  },
  {
    Title: "Joker",
    Year: "2019",
    Poster: "https://images.unsplash.com/photo-1558618587-a2e25c1d2b0a?w=800&q=80",
    Plot: "A mentally troubled stand-up comedian embarks on a downward spiral of revolution and crime after being repeatedly discarded and ridiculed by society. Arthur Fleck is a failed comedian in Gotham City, plagued by a neurological disorder and struggling with poverty and mental illness. A series of humiliations push him toward a terrifying transformation into the Joker, and his spiral becomes the catalyst for a broader social rebellion.",
    Actors: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy"
  },
  {
    Title: "Once Upon a Time in Hollywood",
    Year: "2019",
    Poster: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80",
    Plot: "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles. Rick Dalton is a fading TV cowboy and his best friend Cliff Booth is his stunt double, both adrift in the changing Hollywood landscape. Rick's next-door neighbor on Cielo Drive is Sharon Tate, and as the Manson Family begins their bloody convergence on the city, their hazy sun-drenched lives unfold.",
    Actors: "Leonardo DiCaprio, Brad Pitt, Margot Robbie, Al Pacino"
  },
  {
    Title: "1917",
    Year: "2019",
    Poster: "https://images.unsplash.com/photo-1527264935190-88a5e8bb3621?w=800&q=80",
    Plot: "Two British soldiers are assigned to race against time to deliver a message that will stop 1,600 men from walking into a deadly trap on the Western Front. Schofield and Blake must cross no man's land and enemy-held territory in order to call off a doomed offensive. The mission is personal for Blake, whose brother is among the men who will die without the message. Shot to appear as a single continuous take, the film places the viewer in breathless, terrifying proximity to the war.",
    Actors: "George MacKay, Dean-Charles Chapman, Mark Strong, Andrew Scott"
  },
  {
    Title: "Knives Out",
    Year: "2019",
    Poster: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    Plot: "A detective investigates the death of a patriarch of an eccentric, combative family following his 85th birthday party. When renowned crime novelist Harlan Thrombey is found dead, the brilliant Detective Benoit Blanc is hired to untangle the lies, secrets, and agendas of his dysfunctional, money-hungry family. The film subverts the conventions of the murder mystery at every turn, delivering shocking twists and a wicked examination of wealth and privilege.",
    Actors: "Daniel Craig, Ana de Armas, Jamie Lee Curtis, Chris Evans"
  },
  {
    Title: "Soul",
    Year: "2020",
    Poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    Plot: "A jazz musician who lands his dream gig is transported out of his body and must find his way back with the help of an infant soul who has never been born. Joe Gardner falls through a manhole on the very day he books his dream jazz performance and ends up in the Great Before. He partners with a cynical soul named 22 who has no desire to go to Earth, and their journey forces Joe to reconsider what makes life truly meaningful.",
    Actors: "Jamie Foxx, Tina Fey, Graham Norton, Rachel House"
  },
  {
    Title: "Nomadland",
    Year: "2020",
    Poster: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    Plot: "A woman in her sixties, after losing everything in the Great Recession, embarks on a journey through the American West as a van-dwelling modern-day nomad. After the collapse of her Nevada company town, Fern packs her van and sets out on the road, discovering a community of nomads who have chosen to live outside conventional society. Moving through Amazon warehouses, campgrounds, and the vast open spaces of the West, Fern grapples with grief, memory, and whether she will ever stop moving.",
    Actors: "Frances McDormand, David Strathairn, Linda May, Charlene Swankie"
  },
  {
    Title: "Everything Everywhere All at Once",
    Year: "2022",
    Poster: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80",
    Plot: "A middle-aged Chinese immigrant is swept up in an insane adventure in which she alone can save the world by exploring other universes and connecting with the lives she could have led. Evelyn Wang is a struggling laundromat owner whose mundane life is shattered when her husband tells her she must connect with other versions of herself across the multiverse to stop a great evil. The film is a joyful, chaotic, and deeply moving exploration of family, identity, and acceptance.",
    Actors: "Michelle Yeoh, Ke Huy Quan, Jamie Lee Curtis, Stephanie Hsu"
  },
  {
    Title: "Top Gun: Maverick",
    Year: "2022",
    Poster: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
    Plot: "After more than thirty years of service, Pete Mitchell is pushed to train a detachment of elite graduates for a specialized mission, confronting his past along the way. Maverick has spent three decades defying the system and avoiding promotion to desk duty. Ordered to train Top Gun graduates for a dangerous mission, he discovers one recruit is the son of his late partner Goose and must face his own past as he pushes the team to their limits.",
    Actors: "Tom Cruise, Miles Teller, Jennifer Connelly, Jon Hamm"
  },
  {
    Title: "The Batman",
    Year: "2022",
    Poster: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=800&q=80",
    Plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his own family's involvement. Two years into his crime-fighting career, Bruce Wayne is confronted by the Riddler, who is executing Gotham's elite with cryptic clues left for the Batman. The investigation leads Bruce into the corrupt foundations of the city's power structure and uncomfortable truths about his own legacy.",
    Actors: "Robert Pattinson, Zoe Kravitz, Paul Dano, Jeffrey Wright"
  },
  {
    Title: "Oppenheimer",
    Year: "2023",
    Poster: "https://images.unsplash.com/photo-1574116153-d3aa36da8de9?w=800&q=80",
    Plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II. Oppenheimer leads the Manhattan Project, gathering the world's greatest scientific minds in the remote desert of Los Alamos to build the world's first nuclear weapon. Years later, a security hearing exposes the political machinations aimed at destroying his reputation, revealing the human cost of being the man who changed the world forever.",
    Actors: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr."
  },
  {
    Title: "Barbie",
    Year: "2023",
    Poster: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    Plot: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbieland until Barbie develops an existential crisis and sets off on a journey of self-discovery. After contemplating death and developing flat feet, Barbie is told she must travel to the real world to fix the crisis spreading through Barbieland. Her journey leads her to confront questions of identity, purpose, and what it means to be human.",
    Actors: "Margot Robbie, Ryan Gosling, America Ferrera, Kate McKinnon"
  },
  {
    Title: "Killers of the Flower Moon",
    Year: "2023",
    Poster: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80",
    Plot: "Members of the Osage Nation are murdered under mysterious circumstances in the 1920s, sparking a major FBI investigation. In 1920s Oklahoma, the Osage Nation sit atop one of the world's most valuable oil deposits, making them briefly the richest people per capita on earth. When dozens of Osage people begin dying under suspicious circumstances, an orchestrated campaign of murder to steal their oil wealth is slowly exposed in one of America's most chilling and largely forgotten crimes.",
    Actors: "Leonardo DiCaprio, Robert De Niro, Lily Gladstone, Jesse Plemons"
  },
  {
    Title: "Poor Things",
    Year: "2023",
    Poster: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    Plot: "The incredible tale of the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter. Bella is brought back to life with the brain of her unborn child, giving her an extraordinary innocence and relentless curiosity about the world. Escaping the control of her creator, she travels across Europe, experiencing its pleasures and horrors with unfiltered directness and challenging every Victorian convention about women and morality.",
    Actors: "Emma Stone, Mark Ruffalo, Willem Dafoe, Ramy Youssef"
  },
  {
    Title: "Past Lives",
    Year: "2023",
    Poster: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=800&q=80",
    Plot: "Nora and Hae Sung, two childhood friends, are separated when Nora's family emigrates from South Korea and reunite two decades later in New York for one week. The film unfolds in three movements across twenty-four years, gently examining the love they might have had, the lives they have built separately, and the question of what it means to truly know another person across the distance of time and choice.",
    Actors: "Greta Lee, Teo Yoo, John Magaro, Moon Seung-ah"
  },
  {
    Title: "Braveheart",
    Year: "1995",
    Poster: "https://images.unsplash.com/photo-1501949231-f5a7f1e35e9a?w=800&q=80",
    Plot: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England. After the English murder his wife, Wallace leads a band of Scottish rebels in a series of guerrilla attacks against the English army. His victories inspire a larger uprising, and though he is ultimately betrayed and executed, his defiance becomes the spark that ignites Scotland's war for freedom.",
    Actors: "Mel Gibson, Sophie Marceau, Patrick McGoohan, Angus Macfadyen"
  },
  {
    Title: "The Big Lebowski",
    Year: "1998",
    Poster: "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1f5?w=800&q=80",
    Plot: "Jeff Lebowski, known as the Dude, a Los Angeles slacker who is mistaken for a millionaire with the same name, is forced to solve a bizarre series of mysteries. The Dude is attacked by thugs who mistake him for a wealthy man, and seeking compensation for his ruined rug, he is pulled into an increasingly strange web of kidnapping, nihilists, and eccentric millionaires. With his volatile bowling buddy Walter by his side, the Dude stumbles through one of cinema's most beloved shaggy-dog capers.",
    Actors: "Jeff Bridges, John Goodman, Julianne Moore, Steve Buscemi"
  },
  {
    Title: "Ocean's Eleven",
    Year: "2001",
    Poster: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?w=800&q=80",
    Plot: "Freshly paroled master thief Danny Ocean immediately begins planning the most ambitious heist ever conceived: simultaneously robbing three Las Vegas casinos during a major boxing match. He assembles a team of eleven specialists, each with a unique and indispensable skill, and begins the meticulous work of executing a plan that casino security chief Terry Benedict considers impossible. The film is a sleek, charming caper driven as much by chemistry and wit as by the mechanics of the con.",
    Actors: "George Clooney, Brad Pitt, Matt Damon, Andy Garcia"
  }
];

// Function to get a random movie
export function getRandomMovie(): Movie {
  return MOVIES[Math.floor(Math.random() * MOVIES.length)];
}
