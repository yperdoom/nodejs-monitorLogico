const express = require('express')
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM5')


const parser = port.pipe(new Readline({delimiter: '\n'}))
parser.on('data', console.log)

//console.log(parser)
const connectionSerial = parser


console.log(connectionReceived)