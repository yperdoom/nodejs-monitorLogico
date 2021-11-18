// definição das bibliotecas para conexao da api e definição do app
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// definição das bibliotecas de serial e definição das portas
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline') // definicao da biblioteca de leitura
const ReadLineParser = require('@serialport/parser-readline')


const port = new SerialPort('COM5', { baudRate: 9600 }) // definição da porta a ser usada
var con = "A"
var dataReceivedApp = "A"

// definição de até quanto será a leitura da porta serial
const parser = port.pipe(new Readline({ delimiter: '\n' }))
parser.on('data', () => {
    const connectionSerial = String(parser.buffer)

    if(connectionSerial == 'R' || connectionSerial == 'Y' || connectionSerial == 'G'){
        con = connectionSerial
        console.log(con)
    }
    
})

app.use(bodyParser.json())

app.get('/', function (req, res) {
    console.log(con)
    res.send(con)
    con = 'A'
    
})

app.post('/', function (req, res) {
    dataReceivedApp = req.body.data
    
    port.write(dataReceivedApp)
})

app.listen(3000)
