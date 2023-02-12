
class GuessingGame {
    constructor() {
        this.minimum = 0
        this.maximum = 0
        this.half = 0
    }

    setRange(min, max) {
        this.minimum = min
        this.maximum = max
        this.half = 0
    }

    guess() {
        this.half = Math.round((this.minimum + this.maximum) / 2);
        return this.half;
    }

    lower() {
        this.maximum = this.half;
    }

    greater() {
        this.minimum = this.half;
    }
}

module.exports = GuessingGame;
