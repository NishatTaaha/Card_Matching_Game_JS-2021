document.addEventListener('DOMContentLoaded', () =>
{
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardChosenId = [];
    var cardsWin = [];

    function createBoard()
    {
        for (let i = 0; i < cardArray.length; i++)
        {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }


    // check for match
    function checkforMatch()
    {
        var cards = document.querySelectorAll('img');
        const firstId = cardChosenId[0];
        const secondId = cardChosenId[1];
        if (cardsChosen[0] === cardsChosen[1])
        {
            alert('You found a match!!!');
            cards[firstId].setAttribute('src', 'images/white.png');
            cards[secondId].setAttribute('src', 'images/white.png');
            cardsWin.push(cardsChosen);
        }
        else
        {
            cards[firstId].setAttribute('src', 'images/blank.png');
            cards[secondId].setAttribute('src', 'images/blank.png');
            alert("Please try again :)");
        }
        cardsChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardArray.length;
        if (cardsWin.length === cardArray.length / 2)
        {
            resultDisplay.textContent = 'Congrats!! You Found Them All ^-^';
        }
    }


    // flip your card
    function flipCard()
    {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2)
        {
            setTimeout(checkforMatch, 800);
        }

    }

    createBoard();
})