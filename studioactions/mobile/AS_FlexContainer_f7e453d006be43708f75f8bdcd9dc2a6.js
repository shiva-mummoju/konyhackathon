function AS_FlexContainer_f7e453d006be43708f75f8bdcd9dc2a6(eventobject, x, y) {
    function SCALE_ACTION____g5a1c585ceab4736ae40dd0f4e73f991_Callback() {
        // alert("function invoked")
        var dummy = [];
        productData.forEach((element) => {
            if (element.Category == "nutrition") {
                dummy.push(element);
            }
        })
        frmProducts.segProductList.setData(dummy);
        frmProducts.show();
    }
    frmCatogiries.flexHorizontal3.animate(kony.ui.createAnimation({
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
        "animationEnd": SCALE_ACTION____g5a1c585ceab4736ae40dd0f4e73f991_Callback
    });
}