let button = 0
input.onButtonPressed(Button.A, function () {
    button = 0
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    5000,
    403,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . # . . .
        # # # # .
        . # . . .
        # . # . .
        . . . # .
        `)
    basic.showLeds(`
        # . . . .
        # # # . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # # # .
        . # . . .
        # . # . .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . # .
        . # # # #
        . . . # .
        . . # . .
        . # . . .
        `)
})
