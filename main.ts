input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        radio.setGroup(21)
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            # # # # #
            . # . # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showString("Say my name")
        music.playMelody("C E G E F E D C ", 270)
    }
})
led.toggle(led.brightness(), 3)
basic.forever(function () {
	
})
