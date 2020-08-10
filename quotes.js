function quotes (randomQuotes)

let randomQuotes = ['If you have a problem with the majestic Canadian Goose then you have a problem with me and I suggest you let that one marinate.', 
    'Pitter patter lets get at er.', 
    'Thats a Texas sized 10-4.'];
    let rnd = Math.floor(Math.random() * randomQuotes.length)

module.exports = randomQuotes;