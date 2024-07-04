import GameCard from './GameCard';

const games = [
    {
        title: 'Neon Noir',
        description: 'Delve into a neo-noir detective story in a rain-drenched cyberpunk metropolis. Make tough choices, and fight for justice in this point-and-click adventure.',
        genre: 'Action, Adventure',
        image: 'src/assets/Games/NeonNoir.jpg',
        platform: 'windows',
    },
    {
        title: 'Oddwing',
        description: 'Embrace your imperfections!  Help a lovable creature with mismatched wings overcome the odds and soar through a world that celebrates individuality. ',
        genre: 'Platformer, Adventure',
        image: 'src/assets/Games/Oddwing.jpg',
        platform: 'web',
    },
    {
        title: 'Whispering Pines',
        description: 'Find solace in the tranquility of nature. Build a cozy life in a charming cottage nestled within a whispering pine forest. Tend your garden, and uncover the secrets of the woods at your own pace.',
        genre: 'Adventure, Simulation',
        image: 'src/assets/Games/WhisperingPines.jpg',
        platform: 'ps4',
    },
    {
        title: 'Purrfect Flight',
        description: 'Take to the skies as a jetpack-wearing feline adventurer! Explore a jungle, discover hidden treasures, and outsmart adorable creatures in this purrfectly delightful platformer.',
        genre: 'Casual, Platformer',
        image: 'src/assets/Games/PurrfectFlight.jpg',
        platform: 'windows',
    },
    {
        title: 'Shelled City',
        description: 'Explore a charming city that thrives on the back of a colossal, wandering turtle! Uncover its secrets and befriend its quirky inhabitants.',
        genre: 'Simulation, Adventure',
        image: 'src/assets/Games/ShelledCity.jpg',
        platform: 'macos',
    },
    {
        title: 'Kitchen Chaos',
        description: 'It\'s culinary carnage!  Prepare for kitchen mayhem in this frantic side-scrolling action game. Slice, dice, and cook your way through hordes of hungry ingredients to conquer the culinary chaos.',
        genre: 'Action, Arcade',
        image: 'src/assets/Games/KitchenChaos.jpg',
        platform: 'web',
    },
    {
        title: 'Constellation',
        description: 'Teamwork is key in this cooperative puzzle game!  Communicate effectively and solve mind-bending puzzles as a crew of astronauts on a thrilling mission through the cosmos.',
        genre: 'Puzzle, CO-OP',
        image: 'src/assets/Games/Constellation.jpg',
        platform: 'xbox',
    },
    {
        title: 'Song Weaver',
        description: 'Craft melodies with moonlight! Explore a world bathed in ethereal light, befriend fantastical creatures, solve melodic puzzles, and restore balance to a world out of tune',
        genre: 'Puzzle, Adventure',
        image: 'src/assets/Games/SongWeaver.jpg',
        platform: 'switch',
    },
    {
        title: 'Chroma Shift',
        description: 'Paint the universe in this zero-gravity action-puzzler! Solve colorful challenges and navigate treacherous landscapes in a race against time.',
        genre: 'Action, Puzzle',
        image: 'src/assets/Games/ChromaShift.jpg',
        platform: 'ps4',
    },

];

const GameGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {games.map((game, index) => (
                <GameCard
                    key={index}
                    title={game.title}
                    description={game.description}
                    genre={game.genre}
                    image={game.image}
                    platform={game.platform}
                />
            ))}
        </div>
    );
};

export default GameGrid;
