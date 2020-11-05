var PhotoNumber = 30;

function NumOfPhotos(num) {
    PhotoNumber = num;
}

var i = 0;

function makeApiCall() {
    if (i == PhotoNumber) {
        return;
    }

    var tag = document.getElementById("searchInput").value;
    var url;
    url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=05acb1c2eb58fbe12f21374ae4c3a78a&tags=' + tag + '&privacy_filter=1&safe_search=1&extras=&page=&format=json&nojsoncallback=1';
    $.ajax({
        url: url,
        dataType: "json"
    }).then(function (data) {
        // console.log(data);

        // console.log(data.photos.photo[0].id);
        // var photo_1 = "https://live.staticflickr.com/" + photos.photo[i].server + "/" + photos.photo[i].id + "_" + photos.photo[i].secret + "_b.jpg"

        // Test function here
        // var photo_1 = "https://live.staticflickr.com/" + data.photos.photo[1].server + "/" + data.photos.photo[1].id + "_" + data.photos.photo[1].secret + ".jpg"
        // var des_1 = data.photos.photo[1].title;

        // var addP = $('<div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_1 + '"> <div class="card-body text-center"> <p>' + des_1 + '</p> </div> </div>');
        // addP.appendTo('#photoCon');

        // When is has more 
        if (i < (PhotoNumber - 6)) {

            // Edge case 
            if (i == 60) {
                for (var x = 0; x < 2; x++) {
                    // The photo from server 
                    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
                    var photo_1 = "https://live.staticflickr.com/" + data.photos.photo[i].server + "/" + data.photos.photo[i].id + "_" + data.photos.photo[i].secret + ".jpg"
                    var photo_2 = "https://live.staticflickr.com/" + data.photos.photo[i + 1].server + "/" + data.photos.photo[i + 1].id + "_" + data.photos.photo[i + 1].secret + ".jpg"
                    var photo_3 = "https://live.staticflickr.com/" + data.photos.photo[i + 2].server + "/" + data.photos.photo[i + 2].id + "_" + data.photos.photo[i + 2].secret + ".jpg"
                    var photo_4 = "https://live.staticflickr.com/" + data.photos.photo[i + 3].server + "/" + data.photos.photo[i + 3].id + "_" + data.photos.photo[i + 3].secret + ".jpg"
                    // The title of photo
                    var des_1 = (i + 1) + ". " + data.photos.photo[i].title;
                    var des_2 = (i + 2) + ". " + data.photos.photo[i + 1].title;
                    var des_3 = (i + 3) + ". " + data.photos.photo[i + 2].title;
                    var des_4 = (i + 4) + ". " + data.photos.photo[i + 3].title;
                    // add to the html page
                    var addP = $('<div class="row"> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_1 + '"> <div class="card-body text-center"> <p>' + des_1 + '</p> </div> </div> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_2 + '"> <div class="card-body text-center"> <p>' + des_2 + '</p> </div> </div> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_3 + '"> <div class="card-body text-center"> <p>' + des_3 + '</p> </div> </div> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_4 + '"> <div class="card-body text-center"> <p>' + des_4 + '</p> </div> </div> </div>');
                    addP.appendTo('#photoCon');
                    // Add four 
                    i += 4;
                }
            } else {
                for (var x = 0; x < 3; x++) {
                    // The photo from server 
                    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
                    var photo_1 = "https://live.staticflickr.com/" + data.photos.photo[i].server + "/" + data.photos.photo[i].id + "_" + data.photos.photo[i].secret + ".jpg"
                    var photo_2 = "https://live.staticflickr.com/" + data.photos.photo[i + 1].server + "/" + data.photos.photo[i + 1].id + "_" + data.photos.photo[i + 1].secret + ".jpg"
                    var photo_3 = "https://live.staticflickr.com/" + data.photos.photo[i + 2].server + "/" + data.photos.photo[i + 2].id + "_" + data.photos.photo[i + 2].secret + ".jpg"
                    var photo_4 = "https://live.staticflickr.com/" + data.photos.photo[i + 3].server + "/" + data.photos.photo[i + 3].id + "_" + data.photos.photo[i + 3].secret + ".jpg"
                    // The title of photo
                    var des_1 = (i + 1) + ". " + data.photos.photo[i].title;
                    var des_2 = (i + 2) + ". " + data.photos.photo[i + 1].title;
                    var des_3 = (i + 3) + ". " + data.photos.photo[i + 2].title;
                    var des_4 = (i + 4) + ". " + data.photos.photo[i + 3].title;
                    // add to the html page
                    var addP = $('<div class="row"> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_1 + '"> <div class="card-body text-center"> <p>' + des_1 + '</p> </div> </div> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_2 + '"> <div class="card-body text-center"> <p>' + des_2 + '</p> </div> </div> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_3 + '"> <div class="card-body text-center"> <p>' + des_3 + '</p> </div> </div> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_4 + '"> <div class="card-body text-center"> <p>' + des_4 + '</p> </div> </div> </div>');
                    addP.appendTo('#photoCon');
                    // Add four 
                    i += 4;

                }
            }


            // when it has 6 less
        } else if (i == (PhotoNumber - 6)) {
            var photo_1 = "https://live.staticflickr.com/" + data.photos.photo[i].server + "/" + data.photos.photo[i].id + "_" + data.photos.photo[i].secret + ".jpg"
            var photo_2 = "https://live.staticflickr.com/" + data.photos.photo[i + 1].server + "/" + data.photos.photo[i + 1].id + "_" + data.photos.photo[i + 1].secret + ".jpg"
            var photo_3 = "https://live.staticflickr.com/" + data.photos.photo[i + 2].server + "/" + data.photos.photo[i + 2].id + "_" + data.photos.photo[i + 2].secret + ".jpg"
            var photo_4 = "https://live.staticflickr.com/" + data.photos.photo[i + 3].server + "/" + data.photos.photo[i + 3].id + "_" + data.photos.photo[i + 3].secret + ".jpg"
            // The title of photo
            var des_1 = (i + 1) + ". " + data.photos.photo[i].title;
            var des_2 = (i + 2) + ". " + data.photos.photo[i + 1].title;
            var des_3 = (i + 3) + ". " + data.photos.photo[i + 2].title;
            var des_4 = (i + 4) + ". " + data.photos.photo[i + 3].title;
            // add to the html page
            var addP = $('<div class="row"> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_1 + '"> <div class="card-body text-center"> <p>' + des_1 + '</p> </div> </div> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_2 + '"> <div class="card-body text-center"> <p>' + des_2 + '</p> </div> </div> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_3 + '"> <div class="card-body text-center"> <p>' + des_3 + '</p> </div> </div> <div class="card col"><img class="card-img-top img-thumbnail" src="' + photo_4 + '"> <div class="card-body text-center"> <p>' + des_4 + '</p> </div> </div> </div>');
            addP.appendTo('#photoCon');
            // Add four 
            i += 4;


        } else if (i == (PhotoNumber - 2)) { // Has 2 left 
            var photo_1 = "https://live.staticflickr.com/" + data.photos.photo[i].server + "/" + data.photos.photo[i].id + "_" + data.photos.photo[i].secret + ".jpg"
            var photo_2 = "https://live.staticflickr.com/" + data.photos.photo[i + 1].server + "/" + data.photos.photo[i + 1].id + "_" + data.photos.photo[i + 1].secret + ".jpg"

            var des_1 = (i + 1) + ". " + data.photos.photo[i].title;
            var des_2 = (i + 2) + ". " + data.photos.photo[i + 1].title;

            var addP = $('<div class="row"> <div class="card col-3"><img class="card-img-top img-thumbnail" src="' + photo_1 + '"> <div class="card-body text-center"> <p>' + des_1 + '</p> </div> </div> <div class="card col-3"><img class="card-img-top img-thumbnail" src="' + photo_2 + '"> <div class="card-body text-center"> <p>' + des_2 + '</p> </div> </div> </div>');

            addP.appendTo('#photoCon');

            i += 2;
        }


    })



}