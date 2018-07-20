define(function() {
    var controller = require("BottomBar/componentBottomBar/usercomponentBottomBarController");
    var actions = require("BottomBar/componentBottomBar/componentBottomBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});