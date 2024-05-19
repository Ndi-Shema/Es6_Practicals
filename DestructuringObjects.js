const player = {
    name: 'Lebron James',
    club: 'LA  Lakers',
    address: {
        city: 'Los Angeles'
    }
};

// console.log(player.club);

// using objects to destructure"

const{name, club, address: { city }}= player;
// console.log(`${name} playys for ${club} `)

console.log(`${name} lives in ${city}`);