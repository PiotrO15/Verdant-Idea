ServerEvents.tags('item', event => {
  event.remove('minecraft:flowers', ['minecraft:cherry_leaves', 'minecraft:flowering_azalea_leaves', 'minecraft:flowering_azalea', 'minecraft:mangrove_propagule'])
})

ServerEvents.tags('block', event => {
  event.add('minecraft:enderman_holdable', ['wasteland:cracked_sand'])

  event.remove('minecraft:flowers', ['minecraft:cherry_leaves', 'minecraft:flowering_azalea_leaves', 'minecraft:flowering_azalea', 'minecraft:mangrove_propagule'])
})

ServerEvents.compostableRecipes(event => {
  event.add('minecraft:rotten_flesh', 0.5)
  event.add('minecraft:spider_eye', 0.5)
  event.add('minecraft:poisonous_potato', 0.3)
  event.add('thermal:sawdust', 0.3)
  event.add('chipped:muddy_mangrove_roots', 0.3)
})