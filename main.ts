let StoredDice3 = 0
let Dice3 = 0
let StoredDice1 = 0
let Dice1 = 0
let StoredDice5 = 0
let StoredDice2 = 0
let Dice2 = 0
let StoredDice4 = 0
let Dice4 = 0
let ShakeCount = 0
let Dice5 = 0
input.onPinPressed(TouchPin.P0, function () {
    if (StoredDice3 > 0) {
        StoredDice3 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice3 = Dice3
    }
})
input.onButtonPressed(Button.A, function () {
    if (StoredDice1 > 0) {
        StoredDice1 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice1 = Dice1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (StoredDice5 > 0) {
        StoredDice5 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice5 = StoredDice5
    }
})
function Display_Dice () {
	
}
input.onButtonPressed(Button.B, function () {
    if (StoredDice2 > 0) {
        StoredDice2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice2 = Dice2
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (StoredDice4 > 0) {
        StoredDice4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoredDice4 = Dice4
    }
})
input.onGesture(Gesture.Shake, function () {
    ShakeCount = ShakeCount + 1
    Dice1 = randint(1, 6)
    Dice2 = randint(1, 6)
    Dice3 = randint(1, 6)
    Dice4 = randint(1, 6)
    Dice5 = randint(1, 6)
})
basic.forever(function () {
    Display_Dice()
})
