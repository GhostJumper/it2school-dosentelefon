enum RadioMessage {
    message1 = 49434
}
radio.onReceivedString(function (receivedString) {
    _in = receivedString
    in_dec = Encryption.caesarDecrypt(_in, offset)
    basic.showString(in_dec)
    serial.writeLine(in_dec)
})
let out_enc = ""
let out = ""
let in_dec = ""
let _in = ""
let offset = 0
radio.setGroup(1)
radio.setTransmitPower(7)
offset = 3
basic.forever(function () {
    out = serial.readLine()
    out_enc = Encryption.caesarEncrypt(out, offset)
    radio.sendString(out_enc)
})
