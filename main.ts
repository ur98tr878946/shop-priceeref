input.onButtonPressed(Button.A, function () {
    led.enable(true)
    basic.clearScreen()
    if (mone > 0) {
        basic.showIcon(IconNames.Yes)
        mone += -5.99
    } else if (funk == 20) {
        basic.showString("hacking in progress ")
        music.playMelody("C C5 C C5 C C5 C C5 ", 120)
        basic.showLeds(`
            # . # . #
            . # . # .
            . # . # .
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        mone = 10000000
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        for (let index = 0; index < 1000000000000000; index++) {
            basic.showString("hacked")
        }
    } else {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.showNumber(mone)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.enable(true)
    funk = randint(0, 20)
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    if (funk == 20) {
        basic.showNumber(funk)
    }
})
input.onButtonPressed(Button.B, function () {
    led.enable(true)
    basic.clearScreen()
    if (mone > 0) {
        basic.showIcon(IconNames.Yes)
        mone += -250
    } else {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.showNumber(mone)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    led.enable(true)
    basic.clearScreen()
    if (mone > 0) {
        item = 0
        while (item <= 24) {
            randomx = randint(0, 4)
            randomy = randint(0, 4)
            if (!(led.point(randomx, randomy))) {
                led.plot(randomx, randomy)
                item += 1
            } else {
            	
            }
            basic.pause(100)
        }
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        mone += -5.99
    } else {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.showNumber(mone)
})
let randomy = 0
let randomx = 0
let item = 0
let mone = 0
let funk = 0
funk = 10
let tax = 3643
mone = 10000
music.playMelody("C D E F G A B C5 ", 120)
basic.showString("what ended in 1896?")
basic.showString("you")
basic.showString("1995 ended")
loops.everyInterval(60000, function () {
    if (true) {
        basic.showString("sleep mode")
        led.enable(false)
    }
})
loops.everyInterval(300000, function () {
    led.enable(true)
    basic.clearScreen()
    music.playMelody("C5 C C5 C C5 C C5 C ", 120)
    basic.showNumber(tax)
    mone += tax
    tax += 352
    basic.showNumber(mone)
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
})
