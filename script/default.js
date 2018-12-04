$(function () {

    let $sideLeft = $(".sidebar-left"),
        $sideLeftLi = $sideLeft.find("li"),
        $surpermarketA = $(".surpermarket-select-title a"),
        $returntop = $(".sidebar-left-returntop");
    const baseValue = 700, //scrolltop 的基础值
        stepVlue = 660; //每一个项目的值


    $("input[type=text]").focus(); //文本框获取焦点
    new TabAuto({ //自动翻页
        conEle: document.querySelectorAll(".main-category-carousel .pic-carousel li"),
        tabEle: document.querySelectorAll(".main-category-carousel .pic-tip li"),
        Wrap: document.querySelector("#main .main-category-carousel")
    })



    $(window).on("scroll", () => { //显示左边框
        if ($(this).scrollTop() > baseValue) {
            $sideLeft.addClass("show");
        } else {
            $sideLeft.removeClass("show");
        }
        $.each($sideLeftLi, index => { //滚到一定高度亮一个
            if ($(this).scrollTop() > baseValue + stepVlue * index) {
                $sideLeftLi
                    .eq(index)
                    .addClass("on")
                    .siblings().removeClass("on");
            }
        });
    })

    $.each($surpermarketA, function () {
        $(this).on("mouseenter", () => {
            $(this)
                .addClass("on")
                .siblings()
                .removeClass("on");
        })
    });

    $returntop.on("click", function() {
        $(this).scrollTop(0);
    }.call(document))






})