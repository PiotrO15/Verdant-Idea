BlockEvents.modification(event => {
  event.modify('minecraft:end_portal_frame', block => {
    block.destroySpeed = 30
    block.requiresTool = true
  })
})