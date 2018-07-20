function AS_FlexContainer_fc8893bd127441388bae29b3a1653146(eventobject) {
    function MOVE_ACTION____c52dd14b988c48d7ad3fac85de0e1305_Callback() {}
    frmCatogiries.flexHorizontal4.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": "2",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25,
        "direction": kony.anim.DIRECTION_ALTERNATE
    }, {
        "animationEnd": MOVE_ACTION____c52dd14b988c48d7ad3fac85de0e1305_Callback
    });
}