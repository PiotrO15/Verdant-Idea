const BaseWateringCanItem = Java.loadClass('com.blakebr0.cucumber.item.BaseWateringCanItem')
const FakeBlock = Java.loadClass('wasteland.block.FakeBlock')
const BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const Properties = Java.loadClass('net.minecraft.world.item.Item$Properties')

let floral_dinner
let overflowing_nectar

StartupEvents.registry('block', event => {
  floral_dinner = event.createCustom('floral_dinner', () => new FakeBlock())
  overflowing_nectar = event.createCustom('overflowing_nectar', () => new FakeBlock())
})

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
  event.create('industrial_fertilizer')
  event.create('organic_fertilizer')

  event.create('organic_binder')
  event.create('iron_scrap')

  event.createCustom('floral_dinner', () => new BlockItem(floral_dinner.get(), new Properties()))
  event.createCustom('overflowing_nectar', () => new BlockItem(overflowing_nectar.get(), new Properties()))
})