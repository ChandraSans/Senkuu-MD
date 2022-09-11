const fs = require('fs')

module.exports = {
  name: "tod",
  alias: ["tod","truth","jujur","kejujuran","dare","tantangan"],
  category: "random",
  desc: "Truth or Dare",
  async run({msg, conn},{cmdNya}) {
    let { quoted, from, reply } = msg;
    switch(cmdNya){
      case "tod":
	try {
          let txt = `Truth or Dare!\n\nBalas pesan ini dengan perintah #truth / #dare`
	  let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
           await conn.sendFile(msg.from,img, "",txt,msg)
        } catch (e){
          global.error(cmdNya, e, msg)
        }
        break; // ChandraSans
        case "truth":
        case "jujur":
        case "kejujuran":
          if(!msg.quoted) throw "Reply pesan"
          if(!msg.quoted.isSelf) throw "Reply pesan BOT"
	try {
          let truth = JSON.parse(fs.readFileSync(`./lib/storage/truth.json`))
          let getData = truth[Math.floor(Math.random() * truth.length)]
          msg.reply(getData); // Truth
        } catch (e){
          global.error(cmdNya, e, msg)
       }
          break

        case "dare":
        case "tantangan":
          if(!msg.quoted) throw "Reply pesan"
          if(!msg.quoted.isSelf) throw "Reply pesan BOT"
	try {
          let dare = JSON.parse(fs.readFileSync(`./lib/storage/dare.json`))
          let getData = dare[Math.floor(Math.random() * dare.length)]
          msg.reply(getData); // Dare
        } catch (e){
          global.error(cmdNya, e, msg)
       }
          break

/*	default:
	msg.reply('Pilih #truth / #dare!');
*/
    }
  }
}
