// Import all of the files and dependencies needed.
import fs from 'fs'
//import express from 'express'
//import ws from './server/server.js'
import db from './functions/database.js'
import setup from './functions/setup.js'

setup(db)

setTimeout(function main() {
console.log("Arquivo Criado")
fs.writeFileSync("status.json", (
    (`{
  "daemon": "0.9.999",
  "panel": "${db.get('panel')}",
  "wings": "${db.get('wings')}",
  "sftp": "1.0.5",
  "discord": "https://discord.gg/Wf8Eycz4Tq",
  "lastSynced":"${db.get('lastSynced')}"
}`)
))}, 13000)
 
setTimeout(function main() {
db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Banco de dados parado com sucesso');
    }
  })}, 15000
)
