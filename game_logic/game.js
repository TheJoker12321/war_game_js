export function createPlayer(name = "AI") {
    return { name: name, hand: [], won_pile: [] }
}


export function initGame() {
    let p1 = createPlayer("p1")
    let p2 = createPlayer()
    let deck = createDeck()
    shuffle(deck)
    p1.hand = deck.slice(0, 26)
    p2.hand = deck.slice(26,)
    return { deck: deck, player_1: p1, player_2: p2 }
}


export function playRound(player_1, player_2) {
    let p1_card = player_1.hand.pop()
    let p2_card = player_2.hand.pop()
    let result = compareCards(p1_card, p2_card)
    if (result == "p1") {
        player_1.won_pile.push(p1_card, p2_card)
        console.log(`p1 take this round with ${p1_card}`);
    }
    else if (result == "p2") {
        player_2.won_pile.push(p1_card, p2_card)
        console.log(`p2 take this round with ${p2_card}`);
    }
    else if (result == "WAR") {
        console.log(`WAR! the cards are same`);
    }
}



