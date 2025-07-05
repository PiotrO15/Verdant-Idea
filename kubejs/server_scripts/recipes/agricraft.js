ServerEvents.recipes(event => {
  function agri_seed(id) {
    return Item.of('agricraft:seed', `{genes:{fertility:{dom:1,rec:1},gain:{dom:1,rec:1},growth:{dom:1,rec:1},mutativity:{dom:1,rec:1},resistance:{dom:10,rec:10},species:{dom:"${id}", rec:"${id}"},strength:{dom:1,rec:1}}}`)
  }

  event.replaceInput({id: "agricraft:journal"}, "minecraft:writable_book", "minecraft:book")

  event.shapeless(agri_seed('minecraft:wheat'), ['minecraft:wheat'])
  event.shapeless(agri_seed('minecraft:beetroot'), ['minecraft:beetroot'])
  event.shapeless(agri_seed('minecraft:potato'), ['minecraft:potato'])
})