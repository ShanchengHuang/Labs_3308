function makeApiCall() {
    var work = document.getElementById("searchInput").value;
    // console.log(work);
    if (work == "") {
        alert("NULL input");
        return;
    }
    var url = "https://reststop.randomhouse.com/resources/works/?start=0&max=3&expandLevel=1&search=" + work + "%22,%22work";
    $.ajax({
        url: url,
        dataType: "json"
    }).then(function (data) {
        console.log(data);

        
    })
};