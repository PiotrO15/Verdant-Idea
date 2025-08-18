const BaseWateringCanItem = Java.loadClass('com.blakebr0.cucumber.item.BaseWateringCanItem')

StartupEvents.registry('item', event => {
  event.create('ender_alloy')

  event.createCustom('wooden_watering_can', () => new BaseWateringCanItem(3, 0.15))
  
  event.create('sawdust_soup').food(food => food.hunger(5).saturation(0.5).eaten(eaten => eaten.player.give('minecraft:bowl'))).maxStackSize(16)

  event.create('inconspicuous_visor')

  event.create('fish_bones')

  event.create('sky_steel')
})