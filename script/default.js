$(function () {
    //重要变量
    let $sideLeft = $(".sidebar-left"),
        $sideLeftLi = $sideLeft.find("li"),
        $surpermarketA = $(".surpermarket-select-title a"),
        $returnLeftTop = $(".sidebar-left-returntop"),
        $returnRightTop = $(".sidebar-right").find(".returntop"),
        $sidebarRightVip = $(".sidebar-right-vip");
    const baseValue = 700, //scrolltop 的基础值
        stepVlue = 660, //每一个项目的值
        marginValue = 50; //每一个项目的margin值



    $("input[type=text]").focus(); //文本框获取焦点
    new TabAuto({ //无缝翻页
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
        $sideLeftLi.each(index => { //滚到一定高度亮一个
            if ($(this).scrollTop() >= baseValue + stepVlue * index + stepVlue / 2 + marginValue) {
                $sideLeftLi
                    .eq(index)
                    .addClass("on")
                    .siblings().removeClass("on");
            }
        });
    })

    $surpermarketA.each(function () {  //天猫超市
        $(this).on("mouseenter", () => {
            $(this)
                .addClass("on")
                .siblings()
                .removeClass("on");
        })
    });

    $returnLeftTop.add($returnRightTop).on("click", function () { //返回头部  两个不同jq对象可以同时绑定一个函数
        $("body,html").animate({
            scrollTop: 0
        }, 200)
    })

    $sideLeftLi.each(function (index) { //左边侧栏每个li的点击事件
        $(this).on("click", () => {
            $("html,body").animate({
                scrollTop: baseValue + stepVlue * index + stepVlue / 2 + marginValue
            }, 200)
        })
    })




    $sidebarRightVip.each(function () {
        $(this).hover(function () {
            // over
            $(this).find(".right-vip-hide").addClass("show");
        }, function () {
            // out
            $(this).find(".right-vip-hide").removeClass("show");
        });
    });

})