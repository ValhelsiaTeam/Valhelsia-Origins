onEvent('player.logged_in', function (event) {
  if (!event.player.stages.has('first_start')) {
    event.player.stages.add('first_start')

    event.player.tell(Text.translate('valhelsia.first_start_message'))
    event.player.tell(Text.translate('valhelsia.discord').blue().underlined().click('https://discord.com/invite/rdfQuaM'))
  }
})