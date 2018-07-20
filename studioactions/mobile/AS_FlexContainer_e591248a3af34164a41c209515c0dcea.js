function AS_FlexContainer_e591248a3af34164a41c209515c0dcea(eventobject, x, y) {
    function SCALE_ACTION____b629c70c195b47f2b795135f9cffaed9_Callback() {}
    frmCatogiries.flexHorizontal2.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "36%",
            "height": "31%"
        }
    }), {
        "delay": 0,
        "iterationCount": "2",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25,
        "direction": kony.anim.DIRECTION_ALTERNATE
    }, {
        "animationEnd": SCALE_ACTION____b629c70c195b47f2b795135f9cffaed9_Callback
    });
}