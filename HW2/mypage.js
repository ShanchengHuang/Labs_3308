var counter = 100;
function addCard(index) {


    var tweet = $('<div class="card" id = "'+counter+'"><img class="card-img-top " src="../HW2/Icon/PS5.jpg" alt="Card image cap"><div class="card-body"><p class="card-text">PS5</p><button type="button" class="btn btn-outline-info" onclick="deleteCard(' + counter + ')">-</button></div></div>');
    counter++;

    if (index >= 100) {
        ('#' + index + '').remove();
    }


    switch (index) {
        case 0:

            tweet.appendTo('#interest1');
            break;
        case 1:

            tweet.appendTo('#interest2');
            break;
        case 2:

            tweet.appendTo('#interest3');
            break;

        default:
            break;
    }

}

function deleteCard(id){
    document.getElementById(id).remove();
}

