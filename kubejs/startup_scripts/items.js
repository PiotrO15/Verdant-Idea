const BaseWateringCanItem = Java.loadClass('com.blakebr0.cucumber.item.BaseWateringCanItem')

StartupEvents.registry('item', event => {
  event.create('ender_alloy')

  event.createCustom('wooden_watering_can', () => new BaseWateringCanItem(3, 0.15))
  
  event.create('sawdust_soup').food(food => food.hunger(5).saturation(0.5).eaten(eaten => eaten.player.give('minecraft:bowl'))).maxStackSize(16)

  event.create('inconspicuous_visor')

  event.create('fish_bones')

  event.create('sky_steel')

  event.create('stale_cod').food(food => food.hunger(2).saturation(0.25).effect('hunger', 200, 0, 1))
  event.create('stale_salmon').food(food => food.hunger(2).saturation(0.25).effect('hunger', 200, 0, 1))

  event.create('ochre_shard')
  event.create('ochre_prism')
  event.create('ochre_nucleus')
  
  event.create('pearlescent_shard')
  event.create('pearlescent_prism')
  event.create('pearlescent_nucleus')
  
  event.create('verdant_shard')
  event.create('verdant_prism')
  event.create('verdant_nucleus')

  event.create('amethyst_fertilizer')
})