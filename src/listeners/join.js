const { EmbedWrapper } = require('../utils/EmbedWrapper.js')

module.exports = props => {
  const { client } = props
  client.on('guildMemberAdd', async member => {
    const response = new EmbedWrapper(
      'Welcome to the server!'
    )

    // When a user joins, request their MS id number and apply the student role
    member.createDM().then(channel => {
      channel.send(response)
    })
  })
}
