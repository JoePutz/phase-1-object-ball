function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16, 
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                }, 
                'Reggie Evans': {
                    number: 30,
                    shoe: 14, 
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 1,
                }, 
                'Brook Lopez': {
                    number: 11,
                    shoe: 17, 
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                }, 
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19, 
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                }, 
                'Jason Terry': {
                    number: 31,
                    shoe: 15, 
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }, 
            }
        }, 
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Torquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18, 
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                }, 
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16, 
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                }, 
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14, 
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                }, 
                'Ben Gordon': {
                    number: 8,
                    shoe: 15, 
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                }, 
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15, 
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
}

const game = gameObject();
const players = {...game.home.players, ...game.away.players};

function numPointsScored(playerInput) {
    for (const PlayerName in players) {
        if (playerName === playerInput) {
            return players[playerName].points;
        }
    }

}


// function numPointsScored(playerInput) {
//     const game = gameObject()
//     const players = {...game.home.players, ...game.away.players};
//     for (const playerName in players) {
//         if (playerName === playerInput) {
//             return players[playerName].points;
//         }
//     }



    // Object.assign(game.home.players, game.away.players)

    // const game = gameObject()
    // for (const gameKey in game) {
    //     const teamObj = game[gameKey]
    //     const playerObj = teamObj.players
    //     for (const playerKey in playerObj) {
    //         if (playerKey === playerInput) {
    //             return playerObj[playerKey].points;
    //         }
    //     }
    // }
    // return playerName.points;
}

function shoeSize(playerInput) {
    const game = gameObject()
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
        for (const playerKey in playerObj) {
            if (playerKey === playerInput) {
                return playerObj[playerKey].shoe;
            }
        }
    }
    return playerName.shoe;
}

function colors () {
    const game = gameObject()
    const homeColors = game.home.colors
    const awayColors = game.away.colors
    return Object.assign({}, homeColors, awayColors);
}

function homeTeam() {
    return gameObject().home;
}

function awayTeam() {
    return gameObject().away;
}

// function teamColors(teamInput) {
//     const team = 
// }

// function teamColors(teamInput) {
//     const game = gameObject()
//     for (const gameKey in game) {
//         const teamObj = game[gameKey]
// }

// function teamColors(teamInput) {
//     const game = gameObject()
//     for (const gameKey in game) {
//         const teamObj = game[gameKey]
//         for (const )
//     }
// }

// 

// const teamColors = teamName =>{
//     const teamNameColors = gameObject()
//     return [teamNameColors[teamName].colors]
//   }

function teamColors(givenTeamName){
    const game = gameObject()
    for (key in game){
      if(game[key].teamName === givenTeamName){
        return game[key].colors
      }
    }
  }

//   function teamNames() {
//       const game = gameObject()
//       for (key in game) {
//           return game[key].teamName;
//       }
//   }

function teams() {
    return Object.values(gameObject())
}

function teamNames() {
    return teams().map(team => team.teamName)
}

// function playerNumbers(givenTeam) {
//     let game = gameObs()
// }

// function playerNumbers(givenTeamName){
//     let game = gameObject()
//     let arrayOfNumbers= []
//     for (key in game){
//       if(game[key].teamName === givenTeamName){
//         for (player in game[key].players)
//         numberOfPlayer = game[key].players[player].number
//         arrayOfNumbers = arrayOfNumbers.push(numberOfPlayer)
//       }
//     }
//     return arrayOfNumbers
//   }

function findTeam( team_name ) {
    const theGame = gameObject()
    for ( team in theGame ) {
        if ( theGame[team].teamName === team_name ) {
            return theGame[team]
        }
    }
}


const playerNumbers = team_name => {
    const found = findTeam( team_name )
    if ( found ) return Object.values( found.players ).map( obj => obj.number );
}


// function playerStats(playerName) {
//     const game = gameObject()
//     for (key in game){
//         const team = game[key].players
//         for (player in team) {
//             if (player === 'playerName') {
//                 return team[player];
//             }
//         }

//     }


// }

// function shoeSize(playerInput) {
//     const game = gameObject()
//     for (const gameKey in game) {
//         const teamObj = game[gameKey]
//         const playerObj = teamObj.players
//         for (const playerKey in playerObj) {
//             if (playerKey === playerInput) {
//                 return playerObj[playerKey].shoe;
//             }
//         }
//     }
//     return playerName.shoe;
// }

// function teamColors(givenTeamName){
//     const game = gameObject()
//     for (key in game){
//       if(game[key].teamName === givenTeamName){
//         return game[key].colors
//       }
//     }
//   }