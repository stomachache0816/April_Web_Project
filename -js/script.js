$(document).ready(function () {

    var buy_array = [];

    $('#already_buy').click(function () {
        $('#cart_win').fadeIn(300);
    });

    $('#close').click(function () {
        $('#cart_win').fadeOut(300);
    });

    $('.ticket_cart').click(function () {
        var $pa = $(this).parent();

        var $price = $pa.find('.ticket_price');

        var $img = $pa.find('.ticket_img');

        var $text = $pa.find('.ticket_text');

        var item_obj = {
            src: $img.attr('src'),
            text: $text.text(),
            price: $price.text()
        };

        buy_array.push(item_obj);
        console.log(buy_array);
        var $ticket_item = $('<div class="ticket_buy">\
            <img class="buy_img" src="../jpg/icon/baby.png">\
            <div class="buy_text"></div>\
            <div class="buy_price"></div>\
            <div class="buy"></div>\
            </div>');

        $('#cart_win').append($ticket_buy);

        $ticket_buy.find('.ticket_price').text(item_obj.price);
        $ticket_buy.find('.ticket_img').text('src', item_obj.src);
        $ticket_buy.find('.ticket_text').text(item_obj.text);

        $('#item_num').text(buy_array.length);
    });
});

function jumpToCart() {
    location.href="../html2/cart.html";
}

function jumpToFavor() {
    location.href="../html2/favor.html";
}
