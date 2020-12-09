function makeApiCall() {
    document.getElementById("TheMainBody").remove();

    var card = $(' <div class="container" id="TheMainBody"></div>');
    card.appendTo('#h_re');

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


        for (var x = 0; x < 3; x++) {

            if (num == lenth) {
                i = 4;
                break;
            }
            var a_name1 = data.work[num].authorweb;
            var b_name1 = data.work[num].titleweb;
            var b_index1 = num;
            num++;
            var a_name2 = data.work[num].authorweb;
            var b_name2 = data.work[num].titleweb;
            var b_index2 = num;
            num++;
            var a_name3 = data.work[num].authorweb;
            var b_name3 = data.work[num].titleweb;
            var b_index3 = num;
            num++;
            var a_name4 = data.work[num].authorweb;
            var b_name4 = data.work[num].titleweb;
            var b_index4 = num;
            num++;



            var card = $('<div class="container-sm row"> <div class="card col"> <div class = "card-body" ><h5 class = "card-title" id = "books_' + b_index1 + '"> ' + b_name1 + ' </h5> <p class = "card-text"> ' + a_name1 + '</p> <button class = "btn btn-primary" onclick = "" > Add Review </button> </div> </div> <div class="card col"> <div class = "card-body" ><h5 class = "card-title" id = "books_' + b_index2 + '"> ' + b_name2 + ' </h5> <p class = "card-text"> ' + a_name2 + '</p> <button class = "btn btn-primary" onclick = "" > Add Review </button> </div> </div><div class="card col"> <div class = "card-body" ><h5 class = "card-title" id = "books_' + b_index3 + '"> ' + b_name3 + ' </h5> <p class = "card-text"> ' + a_name3 + '</p> <button class = "btn btn-primary" onclick = "" > Add Review </button> </div> </div><div class="card col"> <div class = "card-body" ><h5 class = "card-title" id = "books_' + b_index4 + '"> ' + b_name4 + ' </h5> <p class = "card-text"> ' + a_name4 + '</p> <button class = "btn btn-primary" onclick = "" > Add Review </button> </div> </div> </div>');
            card.appendTo('#TheMainBody');
        }

    })
};

function modalChange(book_name) {
    document.getElementById("books-name").value() = book_name;

};

$('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-body input').val(recipient)
})