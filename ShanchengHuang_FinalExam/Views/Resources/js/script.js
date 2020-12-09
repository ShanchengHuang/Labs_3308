function makeApiCall() {
    var work = document.getElementById("searchInput").value;
    // console.log(work);
    if (work == "") {
        alert("NULL input");
        return;
    }
    var url = "https://reststop.randomhouse.com/resources/works/?start=0&max=12&expandLevel=1&search=" + work + "%22,%22work";
    $.ajax({
        url: url,
        dataType: "json"
    }).then(function (data) {
        console.log(data);
        var lenth = data.work.length;
        var num = 0;
        for (var i = 0; i++; i < 4) {
            var start = $('<div class="container-sm row">');
            start.appendTo('#TheMainBody');
            for (var x = 0; x++; x < 3) {

                if (num == lenth) {
                    i = 4;
                    break;
                }
                var b_name = data.work[num].authorweb;
                var a_name = data.work[num].titleweb;
                var card = $('<div class="card col" > <div class = " card-body" ><h5 class = "card-title" > ' + b_name + ' < /h5> <p class = "card-text" > ' + a_name + '</p> <button class = "btn btn-primary" onclick = "" > Add Review < /button> </div> </div>');
                card.appendTo('#TheMainBody');
            }
            var end = $('</div>');
            end.appendTo('#TheMainBody');
        }


    })
};