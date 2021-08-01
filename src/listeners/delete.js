module.exports = props => {
  const { client, Logger } = props
  // Handler to track deleted messages
  client.on('messageDelete', async message => {
    const reason = 'Message Deleted'

    Logger.log({ reason, client, message })
  })
}
