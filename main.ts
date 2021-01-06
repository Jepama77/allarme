radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Angry)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.A, function () {
    valore = randint(1, 3)
    radio.sendNumber(valore)
    basic.showString("INVIO")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let valore = 0
basic.showString("GO")
