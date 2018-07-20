define(function() {
    var controller = require("TopBar/componentTopBar/usercomponentTopBarController");
    var actions = require("TopBar/componentTopBar/componentTopBarControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});