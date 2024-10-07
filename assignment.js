const dice = () => {
    return new Promise((resolve, reject) => {
        let outcome = Math.floor(Math.random() * 6 + 1);
        if (outcome === 6) {
            resolve('You win!');
        } else {
            reject('You lose!');
        }
    });
};

const fetchAdviceById = async (id) => {
    try {
        const result = await fetch(`https://api.adviceslip.com/advice/${id}`);
        const data = await result.json();
        const advice = data.slip.advice;
        console.log(advice);
    } catch (error) {
        console.log(error);
    }
};

const fetchJoke = async () => {
    try {
        const result = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await result.json();
        const question = data.setup;
        const answer = data.punchline;
        console.log(question + ' ' + answer);
    } catch (error) {
        console.log(error);

    }
};

const rollTheDice = async () => {
    try {
        const outcome = await dice();
        fetchAdviceById(30);
    } catch (error) {
        fetchJoke();
    }
};

rollTheDice();

//you get advice only if dice is 6
//advice: 'When in doubt, just take the next small step.'
