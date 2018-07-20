function AS_FlexContainer_c277e3e0dc61412291fbcae89ad1341c(eventobject, x, y) {
    function SCALE_ACTION____h787d1b9187b4fc8821d5e4fa3469d35_Callback() {
        // alert("function invoked")
        var dummy = [];
        productData.forEach((element) => {
            if (element.Category == "home") {
                dummy.push(element);
            }
        })
        frmProducts.segProductList.setData(dummy);
        frmProducts.show();
    }
    frmCatogiries.flexHorixontal1.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "38%",
            "height": "33%"
        }
    }), {
        "delay": 0,
        "iterationCount": "2",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25,
        "direction": kony.anim.DIRECTION_ALTERNATE
    }, {
        "animationEnd": SCALE_ACTION____h787d1b9187b4fc8821d5e4fa3469d35_Callback
    });
}