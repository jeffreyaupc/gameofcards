function shuffleDeck(){
    var deck = ['Diamonds A', 'Diamonds 2', 'Diamonds 3', 'Diamonds 4', 'Diamonds 5', 'Diamonds 6', 'Diamonds 7', 'Diamonds 8', 'Diamonds 9', 'Diamonds 10', 'Diamonds J', 'Diamonds Q', 'Diamonds K', 
    'Clubs A', 'Clubs 2', 'Clubs 3', 'Clubs 4', 'Clubs 5', 'Clubs 6', 'Clubs 7', 'Clubs 8', 'Clubs 9', 'Clubs 10', 'Clubs J', 'Clubs Q', 'Clubs K', 
    'Hearts A', 'Hearts 2', 'Hearts 3', 'Hearts 4', 'Hearts 5', 'Hearts 6', 'Hearts 7', 'Hearts 8', 'Hearts 9', 'Hearts 10', 'Hearts J', 'Hearts Q', 'Hearts K', 
    'Spades A', 'Spades 2', 'Spades 3', 'Spades 4', 'Spades 5', 'Spades 6', 'Spades 7', 'Spades 8', 'Spades 9', 'Spades 10', 'Spades J', 'Spades Q', 'Spades K'
    ];

    var newDeck = [];
    i = 0
    for (i = 0; i < 52; i++){
        var card = (deck.splice([Math.floor(Math.random() * deck.length)], 1));
        var strCard = card.toString();
        newDeck.push(strCard);
    }
    document.getElementById('display').innerHTML = newDeck;
    document.getElementById('btn-shuffle').innerHTML = 'Shuffled';
    document.getElementById('btn-shuffle').disabled = true;
    document.getElementById('btn-shuffle').style.cursor = 'not-allowed';
    console.log(newDeck);
};

function resetShuffle(){
    document.getElementById('btn-shuffle').innerHTML = 'Shuffle';
    document.getElementById('btn-shuffle').disabled = false;
    document.getElementById('btn-shuffle').style.cursor = 'pointer';
}