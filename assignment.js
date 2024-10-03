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

const fetchAdviceById = (id) => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Response status is not OK');
            } else {
                return response.json();
            }
        })
        .then((data) => {
            const advice = data.slip.advice;
            console.log(advice);
        })
        .catch((error) => {
            console.log(error);
        })
};

const fetchJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Response status is not OK');
            } else {
                return response.json();
            }
        })
        .then((data) => {
            const question = data.setup;
            const answer = data.punchline;
            console.log(question + ' ' + answer);
        })
        .catch((error) => {
            console.log(error);
        })
};

dice()
    .then(() => {
        fetchAdviceById(30);
    })
    .catch(() => {
        fetchJoke();
    });

//you get advice only if dice is 6
