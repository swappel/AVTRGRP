// TODO: Add Lenis
// TODO: Implement dark light detection
// TODO: Make cards from JSON work

import Lenis from 'lenis';
import '/src/css/index.scss';

const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.05,
  wheelMultiplier: 1.5,
});

async function loadJSONFiles(){
    // Fetch both JSON files and only then continue
    const [cardList, tagList] = await Promise.all([
        fetch('./src/json/link-cards.json'),
        fetch('./src/json/link-card-tags.json')
    ]);

    // Get the file's JSON data
    const cardsData = await cardList.json();
    const tagsData = await tagList.json();

    console.log(`cardData: ${cardsData}\ntagsData: ${tagsData}`);

    // Launch the parser function
    parseJSONData(cardsData, tagsData);
}


function parseJSONData(cards, tags) {
    cards.link_cards.forEach(card => {
       console.log(`Card title: ${card.title}`);
    });
}

function renderCards(cards, tags) {
    const card_container = document.getElementById('card-container');


}

//loadJSONFiles();