input.onGesture(Gesture.Shake, function () {
    hand = randint(0, 2)
    if (hand == 0) {
        basic.showIcon(IconNames.Target)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (hand == 1) {
        basic.showIcon(IconNames.Target)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Target)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            . . # . .
            `)
    }
})
let hand = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.clearScreen()
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    # # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # . . .
    # # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    # # # . .
    # # # . .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # # # . .
    # # # . .
    # # # # .
    `)
basic.showLeds(`
    # . . . .
    # # . . .
    # # # . .
    # # # # .
    # # # # #
    `)
basic.showLeds(`
    # # . . .
    # # # . .
    # # # # .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # . .
    # # # # .
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
