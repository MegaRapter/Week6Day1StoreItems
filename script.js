for (let i = 0; i < storeItems.length; i++) {
    if (!storeItems[i].inStock) {
        continue;
    };

    $("#list").append(
    `<div class='itemRow'>
        <span>$${storeItems[i].price}</span>
        <span>${storeItems[i].name}</span>
        <span>${storeItems[i].details}</span>
    </div>`);
};

document.getElementById("toggle").addEventListener("click", function() {
    $("body").toggleClass("darkMode");
});