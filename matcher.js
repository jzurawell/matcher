    function getAnswer() {
        return document.getElementById("response").value;
    }

    function renderMessages(messages) {
        var resultsContainer = document.getElementById("results-container")
        resultsContainer.innerHTML = "";
        messages.forEach(function(message) {
            var p = document.createElement('p');
            p.innerText = message;
            resultsContainer.appendChild(p);
        })
    }

    function processAnswer(userAnswer) {
        var foundItems = [];
        var messages = [];
        outfits.forEach(function(item) {
            if (item.article === userAnswer || item.color === userAnswer) {
                foundItems.push(item);
                messages.push("What to wear: " + " " + item.color + " " + item.type + " " + item.article + " \nAccessories:" + item.accessories + "\n" + "Style: " + item.style + "\n");
            }
        })
        if (foundItems.length < 1) {
            messages.push("Sorry, no matches!");
        }
        renderMessages(messages);
    }

    var form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var answer = getAnswer();
        processAnswer(answer);
    });

    // var input = document.getElementById("response");
    // input.addEventListener("keyup", function(event) {
    //     var answer = getAnswer();
    //     processAnswer(answer);
    //     console.log(answer);
    // })