require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)

const baseUrl = 'https://conversations.twilio.com/v1'

type Conversation = {
  name: string
  ID: string,
  chatServiceID: string,
  participantID: string[],
}

const createConversation = () => {

  const conversation: Conversation = {
    'name': '',
    'ID': '',
    'chatServiceID': '',
    'participantID': [],
  }

  conversation.name = ''

  client.conversations.v1.conversations
    .create({ friendlyName: 'My First Conversation' })
    .then((c: any) => {
      console.log(c.sid)
      conversation.ID = c.sid
    }
  )

  client.conversations.v1
    .conversations(conversation.ID)
    .fetch()
    .then((c: any) => {
      console.log(c.chatServiceSid)
      conversation.chatServiceID = c.chatServiceSid
    }
  )

  client.conversations.v1
    .conversations('CHb537ac641484424f8f5c237ef5d1d8f1')
    .participants.create({
      'messagingBinding.address': '+447428002465',
      'messagingBinding.proxyAddress': '+447883318530',
    })
    .then((p: any) => {
      console.log(p.sid)
      conversation.participantID.push(p.sid)
    }
  )

  client.conversations.v1
    .conversations('CHb537ac641484424f8f5c237ef5d1d8f1')
    .participants.create({ identity: 'testPineapple' })
    .then((p: any) => {
      console.log(p.sid)
      conversation.participantID.push(p.sid)
    }
  )


}
