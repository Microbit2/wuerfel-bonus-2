let Schüler = 0
input.onButtonPressed(Button.A, function () {
    Schüler = randint(1, 3)
    if (Schüler == 1) {
        basic.showString("Tick")
    } else if (Schüler == 2) {
        basic.showString("Trick")
    } else if (Schüler == 3) {
        basic.showString("Track")
    }
})
