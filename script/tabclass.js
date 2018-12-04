//Tab类
class Tab {
    constructor({
        conEle,
        tabEle,
        conClass = 'on',
        tabClass = 'on'
    }) {
        this.conEle = conEle;
        this.tabEle = tabEle;
        this.conClass = conClass;
        this.tabClass = tabClass;
        this.index = 0;
        this.addClick();
    }
    addClick() {
        [...this.tabEle].forEach((ele, index) => {
            ele.addEventListener("click", function () {
                this.change(index);
            }.bind(this), false);
        });
    }
    change(i) {
        if (i === this.index) return;
        this.conEle[this.index].classList.remove(this.conClass);
        this.tabEle[this.index].classList.remove(this.tabClass);
        this.index = i;
        this.conEle[this.index].classList.add(this.conClass);
        this.tabEle[this.index].classList.add(this.tabClass);
    }
}

//类TabAuto继承Tab
class TabAuto extends Tab {
    constructor({
        conEle,
        tabEle,
        conClass = 'on',
        tabClass = 'on',
        Wrap
    }) {
        super({
            conEle,
            tabEle,
            conClass,
            tabClass
        });
        this.oWrap = Wrap;
        this.timer = null;
        this.length = this.tabEle.length;
        this.autoPlay();
        this.addTimer();
    }
    autoPlay() {
        this.timer = setInterval(() => {
            let i = this.index;
            i++;
            this.change(i % this.length);
        }, 5000);
    }
    addTimer() {
        this.oWrap.addEventListener("mouseenter", () => {
            clearInterval(this.timer);
        }, false);
        this.oWrap.addEventListener("mouseleave", () => {
            this.autoPlay();
        }, false)
    }
}

class TabAutoPlus extends TabAuto {
    constructor({
        conEle,
        tabEle,
        conClass = 'on',
        tabClass = 'on',
        Wrap,
        arrow
    }) {
        super({
            conEle,
            tabEle,
            conClass,
            tabClass,
            Wrap
        });
        this.arrow = arrow;
        this.arrowPlay();
    }
    arrowPlay() { //箭头按钮
        [...this.arrow].forEach((ele, index) => {
            ele.addEventListener("click", () => {
                let i = index ? this.index + 1 : this.index - 1;
                if (i === -1) {
                    i = this.length - 1;
                }
                this.change(i % this.length);
            }, false)
        })
    }
}