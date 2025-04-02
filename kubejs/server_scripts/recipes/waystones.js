ServerEvents.recipes(event => {
  // Remove the warp stone recipe, which is implemented as a rite
  event.remove({id: 'waystones:warp_stone'})
})