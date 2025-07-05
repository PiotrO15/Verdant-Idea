ServerEvents.recipes(event => {
  // Update pipe recipe
  event.replaceInput({id: 'prettypipes:pipe'}, 'minecraft:iron_bars', '#forge:rods/steel')
  event.replaceInput({id: 'prettypipes:pipe'}, 'minecraft:copper_ingot', '#forge:plates/copper')

  // Change item terminal recipe
  event.remove({id: 'prettypipes:item_terminal'})
  event.shaped(
    'prettypipes:item_terminal',
    [
      'SPS',
      'RCE',
      'SPS'
    ],
    {
      C: 'minecraft:chest',
      E: 'prettypipes:medium_extraction_module',
      P: 'minecraft:ender_pearl',
      R: 'prettypipes:medium_retrieval_module',
      S: '#forge:plates/steel'
    }
  )

  // Change crafting terminal recipe
  event.remove({id: 'prettypipes:crafting_terminal'})
  event.shaped(
    'prettypipes:crafting_terminal',
    [
      'CPC',
      'RTE',
      'CPC'
    ],
    {
      C: 'botania:crafty_crate',
      E: 'prettypipes:high_extraction_module',
      P: 'pneumaticcraft:printed_circuit_board',
      R: 'prettypipes:high_retrieval_module',
      T: 'prettypipes:item_terminal'
    }
  )

  // Update pipe pressurizer recipe
  event.replaceInput({id: 'prettypipes:pressurizer'}, 'minecraft:iron_ingot', 'pneumaticcraft:plastic')

  // Remove iron ore from tag filter module recipe
  event.replaceInput({id: 'prettypipes:tag_filter_modifier'}, '#minecraft:iron_ores', 'minecraft:raw_iron')
})