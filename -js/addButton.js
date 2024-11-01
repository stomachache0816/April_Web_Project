$(".ticket_shop").on("click", function () {
    var buttonValue = $(this).val();
    var dataArr = buttonValue.split(" ");
    var cartDic = JSON.parse(localStorage.getItem("cartStorage"));
    if (buttonValue in cartDic) {
        if (cartDic[buttonValue] < 10) {
            cartDic[buttonValue]++;
            localStorage.setItem("cartStorage", JSON.stringify(cartDic));
            alert("已將「" + dataArr[0] + " " + dataArr[1] + "」的票加入購物車，目前" + cartDic[buttonValue] + "張。");
        }
        else {
            alert("一種票上限10張");
        }
    }
    else {
        cartDic[buttonValue] = 1;
        localStorage.setItem("cartStorage", JSON.stringify(cartDic));
        alert("已將「" + dataArr[0] + " " + dataArr[1] + "」的票加入購物車，目前" + cartDic[buttonValue] + "張。");
    }
});

$(".added").on("click", function () {
    // 取得local storage中 喜歡名單的set
    var favorSetArray = JSON.parse(localStorage.getItem("favorStorage"));
    var favorSet = new Set(favorSetArray);

    // 取得該按鈕的博物館名稱
    var buttonValue = $(this).val();
    var dataArr = buttonValue.split(" ");
    var museum = dataArr[0];

    // 檢查set裡面是否已經有該博物館名稱
    if (favorSet.has(buttonValue)) {
        // 提示已經有了 不更動set
        alert("收藏內已有「" + museum + "」!");
    }
    else {
        // 提示將此博物館新增至set
        favorSet.add(buttonValue);
        alert("已將「" + museum + "」加入收藏!");

        // 將變動過的set重新存入local storage
        favorSetArray = Array.from(favorSet);
        localStorage.setItem("favorStorage", JSON.stringify(favorSetArray));
    }
});