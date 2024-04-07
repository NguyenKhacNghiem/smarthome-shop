function showProductDetail(id) {
    window.location.href = "/product/detail/" + id;
}

function search() {
    let search = document.getElementById("search");
    window.location.href = "/product/search?name=" + search.value;
}