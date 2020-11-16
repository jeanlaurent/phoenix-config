// JL's config for https://github.com/kasper/phoenix
// https://github.com/kasper/phoenix/blob/master/docs/API.md#javascript-api

// Press Command-Option-1 get the currently focused window taking half screen docked on the right
Key.on('1', [ 'command', 'option' ], () => {
    var focusedWindow = Window.focused();
    if (!focusedWindow) {
        return;
    }
    focusedWindow.setFrame({
        x:focusedWindow.screen().frame().x,
        y:focusedWindow.screen().frame().y,
        width: focusedWindow.screen().frame().width/2, 
        height:focusedWindow.screen().frame().height
    });
});


// Press Command-Option-2 get the currently focused window taking "full screen"
Key.on('2', [ 'command', 'option' ], () => {
    var focusedWindow = Window.focused();
    if (!focusedWindow) {
        return;
    }
    focusedWindow.setFrame({
        x:focusedWindow.screen().frame().x,
        y:focusedWindow.screen().frame().y,
        width: focusedWindow.screen().frame().width, 
        height:focusedWindow.screen().frame().height
    });
})

// Press Command-Option-3 get the currently focused window taking half screen docked on the left
Key.on('3', [ 'command', 'option' ], () => {
    var focusedWindow = Window.focused();
    if (!focusedWindow) {
        return;
    }
    focusedWindow.setFrame({
        x:focusedWindow.screen().frame().x + focusedWindow.screen().frame().width/2,
        y:focusedWindow.screen().frame().y,
        width: focusedWindow.screen().frame().width/2, 
        height:focusedWindow.screen().frame().height
    });
})

// Press command-option-4 and move currently focused window into the next screen, keeping the same size.
Key.on('4', [ 'command', 'option' ], () => {
    var focusedWindow = Window.focused();
    if (!focusedWindow) {
        return;
    }
    currentScreenIdentifier = focusedWindow.screen().identifier()
    Screen.all().forEach(screen => {
        if (screen.identifier() != currentScreenIdentifier) { // I got only 2 screens :D
            focusedWindow.setTopLeft({x:screen.frame().x, y:screen.frame().y})
        }
    })
})