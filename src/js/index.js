// TODO: Implement dark light detection
// TODO: Make cards from JSON work

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

loadJSONFiles();