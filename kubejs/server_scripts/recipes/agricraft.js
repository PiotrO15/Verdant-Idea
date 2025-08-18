ServerEvents.recipes(event => {
  function agri_seed(id) {
    return Item.of('agricraft:seed', `{genes:{fertility:{dom:1,rec:1},gain:{dom:1,rec:1},growth:{dom:1,rec:1},mutativity:{dom:1,rec:1},resistance:{dom:10,rec:10},species:{dom:"${id}", rec:"${id}"},strength:{dom:1,rec:1}}}`)
  }

  function agri_seed_partial(name) {
    return {
      type: 'forge:partial_nbt',
      item: 'agricraft:seed',
      nbt: {
        genes: {
          species: {
            rec: `${name}`,
            dom: `${name}`
          }
        }
      }
    }
  }

  event.replaceInput({id: "agricraft:journal"}, "minecraft:writable_book", "minecraft:book")

  event.shapeless(agri_seed('minecraft:wheat'), ['minecraft:wheat'])
  event.shapeless(agri_seed('minecraft:beetroot'), ['minecraft:beetroot'])
  event.shapeless(agri_seed('minecraft:potato'), ['minecraft:potato'])
  
  event.shapeless(agri_seed('actuallyadditions:canola'), ['actuallyadditions:canola'])

  event.remove({id: 'actuallyadditions:empowering/empowered_canola'})
  event.custom(
    {
      "type": "actuallyadditions:empowering",
      "base": {
        "item": "actuallyadditions:crystallized_canola_seed"
      },
      "color": 16735052,
      "energy": 1000,
      "modifiers": [
        agri_seed_partial('actuallyadditions:canola'),
        agri_seed_partial('actuallyadditions:canola'),
        agri_seed_partial('actuallyadditions:canola'),
        agri_seed_partial('actuallyadditions:canola')
      ],
      "result": {
        "item": "actuallyadditions:empowered_canola_seed"
      },
      "time": 30
    }
  )

  event.remove({id: 'actuallyadditions:laser/crystallized_canola_seed'})
  event.custom(
    {
      "type": "actuallyadditions:laser",
      "energy": 2000,
      "ingredient": agri_seed_partial('actuallyadditions:canola'),
      "result": {
        "item": "actuallyadditions:crystallized_canola_seed"
      }
    }
  )
})