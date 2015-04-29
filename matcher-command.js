var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var outfits = [
    {
        article: "dress",
        length: "long",
        color: "blue",
        type: "feather",
        accessories: [" embossed light blue belt", " gold and blue topaz ring"],
        style: "etherial"
    },  
    {
        article: "jacket",
        length: "long",
        color: "green",
        type: "military",
        accessories: [" white camisole", " red beaded neclace", " black nail polish", " nude heels"],
        style: "utilitarian chic" 
    },
    {
        article: "dress",
        length: "long",
        color: "white",
        type: "silk",
        accessories: [" oxblood lipstick", " oxblood nail polish", " diamond earings", " white clutch", " white heels"],
        style: "1950s"
    },
    {
        article: "jeans",
        length: "long",
        color: "white",
        type: "skinny",
        accessories: [" white crochet top", " brown calfskin sandals", " long gold necklace", " straw bag"],
        style: "straight up '70s. Serge Gainsbourg is calling"
    },
    {
        article: "dress",
        length: "short",
        color: "blue",
        type: "tweed jacquard shift",
        accessories: [" blue chained shoulder bag", " gold ring", " gigantic acetate sunglasses"],
        style: "'60s sporty"
    }
]

rl.question("Enter an article of clothing or a color! ", function(answer) {
    console.log("Checking some looks...\n");
    var foundItems = [];
    outfits.forEach(function(item) {
        if (item.article === answer.toLowerCase() || item.color === answer.toLowerCase()) {
            foundItems.push(item);
            console.log("Wear " + item.length + " " + item.color + " " + item.type + " " + item.article + " with" + item.accessories);
            console.log("This style is " + item.style + ".\n")
        }
    })
    if (foundItems.length < 1) {
        console.log("Sorry, no matches!");
    }

  rl.close();
});

