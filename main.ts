radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Angry)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
let valore = randint(0, 10)
radio.sendNumber(valore)
