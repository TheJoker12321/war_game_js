function createCard(rank, suite) {
    const specialCards = {
        "A": 14,
        "J": 11,
        "Q": 12,
        "K": 13
    }

    return {
        "rank": rank,
        "suite": suite,
        "value": rank in specialCards ? specialCards[rank] : Number(rank)
    }
}

function compareCard(p1_card, p2_card) {
    if (p1_card.value > p2_card.value) {
        return "p1"
    } else if (p1_card.value < p2_card.value) {
        return "p2"
    }
    return "WAR"
}


function createDeck() {
    const specialCards = {
        11: "J",
        12: "Q",
        13: "K",
        14: "A"
    }
    const deck = []
    const suites = ["H", "S", "D", "C"]
    for (let i = 2; i <= 14; i++) {
        for (const suite of suites) {
            deck.push(createCard(i > 10 ? specialCards[i] : String(i), suite))
        }
    }
    return deck
}
function shuffle(deck) {
    let count = 0
    while (count < 1000) {
        let idx1 = Math.floor(Math.random() * 52)
        let idx2 = Math.floor(Math.random() * 52)
        if (idx1 === idx2) {
            continue
        }
        let temp = deck[idx1]
        deck[idx1] = deck[idx2]
        deck[idx2] = temp
        count++
    }
    return deck
}


export {
    compareCard,
    createDeck,
    shuffle
}
console.log(shuffle(createDeck()));
