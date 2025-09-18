ServerEvents.recipes(event => {
  function amadron(press) {
    event.custom({
      type: "pneumaticcraft:amadron",
      id: "pneumaticcraft:amadron/" + press,
      input: {
        type: "ITEM",
        amount: 12,
        id: "minecraft:emerald"
      },
      level: 0,
      output: {
        type: "ITEM",
        amount: 1,
        id: 'ae2:' + press
      },
      static: true
    })
  }
  

  event.remove({mod: 'mysticalagriculture', output: '#ae2:inscriber_presses'})
  amadron('calculation_processor_press')
  amadron('engineering_processor_press')
  amadron('silicon_press')
  amadron('logic_processor_press')

  // Increase the cost of formation and annihilation cores
  event.replaceInput({id: 'ae2:materials/annihilationcore'}, 'minecraft:quartz', 'pneumaticcraft:capacitor')
  event.replaceInput({id: 'ae2:materials/formationcore'}, '#forge:gems/certus_quartz', 'pneumaticcraft:transistor')

  // Replace the recipe of quantum bridge card
  event.remove({id: 'ae2wtlib:quantum_bridge_card'})
  event.shaped(
    'ae2wtlib:quantum_bridge_card',
    [
      "BPB",
      "PSP",
      "BRB"
    ],
    {
      B: 'ae2:wireless_booster',
      P: 'ae2:fluix_pearl',
      R: 'ae2:wireless_receiver',
      S: 'minecraft:nether_star'
    }
  )
})