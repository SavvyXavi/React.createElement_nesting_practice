import React from 'react';
import ReactDOM from 'react-dom';

// Colors
const red = React.createElement('li', {}, 'Red');
const black = React.createElement('li', {}, 'Black');
const green = React.createElement('li', {}, 'Green');
const favColors = React.createElement('ol', {}, red, black, green);

// Music
const weeknd = React.createElement('li', {}, 'The Weeknd');
const polyphia = React.createElement('li', {}, 'Polyphia');
const kL = React.createElement('li', {}, 'Kendrick Lamar');
const favArt = React.createElement('ol', {}, kL, polyphia, weeknd);

// Food
const pasta = React.createElement('li', {}, 'Pasta');
const cereal = React.createElement('li', {}, 'Cereal');
const sushi = React.createElement('li', {}, 'Sushi');
const favFood = React.createElement('ol', {}, pasta, cereal, sushi);

// Websites
const uLink = React.createElement('a', {href: 'https://www.youtube.com'}, 'YouTube');
const uTube = React.createElement('li', {}, uLink);
const anLink = React.createElement('a', {href: 'https://www.masterani.me'}, 'Master Anime');
const anime = React.createElement('li', {}, anLink);
const redLink = React.createElement('a', {href: 'https://www.reddit.com'}, 'Reddit');
const reddit = React.createElement('li', {}, redLink);
const favWeb = React.createElement('ol', {}, uTube, anime, reddit);

ReactDOM.render(
   React.createElement('ul', {},
        React.createElement('li', {className: 'favColors'}, 'Favorite Colors', favColors),
        React.createElement('li', {className: 'favArtists'}, 'Favorite Artists', favArt),
        React.createElement('li', {className: 'favFood'}, 'Favorite Food', favFood),
        React.createElement('li', {className: 'favWebsites'}, 'Favorite Websites', favWeb)

    ),
    
    document.getElementById('root')
);
