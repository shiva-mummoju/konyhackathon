function initializeUserWidgets() {
    kony.mvc.registry.add("BottomBar.componentBottomBar", "componentBottomBar", "componentBottomBarController");
    kony.application.registerMaster({
        "namespace": "BottomBar",
        "classname": "componentBottomBar",
        "name": "BottomBar.componentBottomBar"
    });
    kony.mvc.registry.add("TopBar.componentTopBar", "componentTopBar", "componentTopBarController");
    kony.application.registerMaster({
        "namespace": "TopBar",
        "classname": "componentTopBar",
        "name": "TopBar.componentTopBar"
    });
}