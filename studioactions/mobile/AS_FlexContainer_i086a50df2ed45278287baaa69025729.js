function AS_FlexContainer_i086a50df2ed45278287baaa69025729(eventobject, x, y) {
    function SCALE_ACTION____ffd93a65aabe4e208ff1aef5eeae4670_Callback() {
        // alert("function invoked")
        var dummy = [];
        productData.forEach((element) => {
            if (element.Category == "beauty") {
                dummy.push(element);
            }
        })
        frmProducts.segProductList.setData(dummy);
        frmProducts.show();
    }
    frmCatogiries.flexHorizontal4.animate(kony.ui.createAnimation({
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
        "animationEnd": SCALE_ACTION____ffd93a65aabe4e208ff1aef5eeae4670_Callback
    });
}