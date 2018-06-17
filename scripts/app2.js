var content = document.querySelector("#reporter"),
    listeners = [],
    listenersEnabled = false,
    printIt = true,
    lastevent;

// write info to the div. includes event object information
var loadInfo = function(message, eventObj) {
    content.insertAdjacentHTML("afterbegin", message + " -- event type: " + 
        eventObj.type + " -- target object: " + eventObj.target.nodeName + "<br>");
};

// adds listenets to the document
var addListeners = function() {
    var keyDownHandler = function (e) {
        loadInfo("A key was pressed: " + e.keyCode + " -- " + e.key, e);
        if (e.keyCode === 83 && e.ctrlKey) {
            toggleEventListeners();
        }
    };
    document.addListeners("keydown", keyDownHandler);
    listeners.push(keyDownHandler, "keydown");

    var mouseMoveHandler = function(e){
        lastevent = e;
        if (printIt) {
            printIt = false;
            loadInfo("Mouse move recorded at coordinates: " + e.pageX + ", " + e.pageY, e);
            setTimeout(function() {
                printIt = true;
            }, 500);
        }
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    listeners.push(mouseMoveHandler, "mousemove");

    // once listeners are added. sets this to true for toggle function
    listenersEnabled = true;
};

    // removes listeners from document so user can examine data
    var removeListeners = function(){
        while (listeners.length > 0) {
            document.removeEventListener(listeners.pop(), listeners.pop());
        }
    };

    //called to initialize, determines whether to add or remove listeners based
    //on current state
    var toggleEventListeners = function() {
        if (listenersEnabled) {
            removeListeners();
            console.log("Event listeners removed");
        } else {
            addListeners();
            console.log("listeners Added");
        }
    };

    // sets up listeners
    toggleEventListeners();