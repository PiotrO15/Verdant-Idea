ServerEvents.tags('item', event => {
  event.add('ars_nouveau:magic_saplings', ['ars_nouveau:blue_archwood_sapling', 'ars_nouveau:green_archwood_sapling', 'ars_nouveau:purple_archwood_sapling', 'ars_nouveau:red_archwood_sapling'])
  event.add('ars_nouveau:golem/shard', ['ae2:certus_quartz_crystal'])
})

ServerEvents.tags('block', event => {
  event.add('ars_nouveau:golem/cluster', ['ae2:quartz_cluster'])
  event.add('ars_nouveau:golem/budding', ['ae2:damaged_budding_quartz', 'ae2:chipped_budding_quartz', 'ae2:flawed_budding_quartz', 'ae2:flawless_budding_quartz'])
})

ServerEvents.recipes(event => {
  event.replaceInput({id: 'ars_nouveau:dowsing_rod'}, 'minecraft:gold_ingot', 'botania:mana_powder')
  event.replaceInput({id: 'ars_nouveau:dowsing_rod'}, 'ars_nouveau:archwood_planks', 'botania:livingwood_twig')

  event.remove({id: 'ars_nouveau:magebloom_fiber'})
  event.custom({
    "type": "enchanted:wheel",
    "duration": 300,
    "ingredients": [
      {
        "item": "ars_nouveau:magebloom"
      }
    ],
    "power": 5000,
    "result": {
      "item": "ars_nouveau:magebloom_fiber",
      "count": 4
    }
  })

  event.recipes.botania.petal_apothecary("ars_nouveau:blue_archwood_sapling", ["ars_nouveau:frostaya_pod", "botania:rune_water", "botania:blue_petal", "botania:blue_petal", "enchanted:rowan_sapling"])
  event.recipes.botania.petal_apothecary("ars_nouveau:green_archwood_sapling", ["ars_nouveau:mendosteen_pod", "botania:rune_earth", "botania:green_petal", "botania:green_petal", "enchanted:rowan_sapling"])
  event.recipes.botania.petal_apothecary("ars_nouveau:purple_archwood_sapling", ["ars_nouveau:bastion_pod", "botania:rune_air", "botania:purple_petal", "botania:purple_petal", "enchanted:rowan_sapling"])
  event.recipes.botania.petal_apothecary("ars_nouveau:red_archwood_sapling", ["ars_nouveau:bombegranate_pod", "botania:rune_fire", "botania:red_petal", "botania:red_petal", "enchanted:rowan_sapling"])

  event.replaceInput({id: 'ars_nouveau:worn_notebook'}, 'minecraft:lapis_lazuli', '#ars_nouveau:magic_saplings')

  event.custom({
    "type": "ars_nouveau:budding_conversion",
    "id": "ae2:budding_quartz",
    "input": "ae2:quartz_block",
    "result": "ae2:damaged_budding_quartz"
  })

  event.replaceInput({id: 'ars_nouveau:sourcestone'}, '#forge:stone', 'botania:livingrock')

  event.custom({
    "type": "ars_nouveau:summon_ritual",
    "augment": {
      "item": "minecraft:bone"
    },
    "count": 1,
    "mobs": [
      {
        "mob": "ars_nouveau:drygmy",
        "weight": 1
      }
    ],
    "source": "MOB_LIST"
  })

  event.custom({
    "type": "ars_nouveau:summon_ritual",
    "augment": {
      "item": "botania:golden_seeds"
    },
    "count": 1,
    "mobs": [
      {
        "mob": "ars_nouveau:starbuncle",
        "weight": 1
      }
    ],
    "source": "MOB_LIST"
  })

  event.custom({
    "type": "ars_nouveau:summon_ritual",
    "augment": {
      "item": "minecraft:moss_block"
    },
    "count": 1,
    "mobs": [
      {
        "mob": "ars_nouveau:whirlisprig",
        "weight": 1
      }
    ],
    "source": "MOB_LIST"
  })

  event.remove({id: 'ars_nouveau:novice_spell_book'})

  event.remove({id: 'ars_nouveau:imbuement_amethyst'})
  event.remove({id: 'ars_nouveau:imbuement_amethyst_block'})
  event.remove({id: 'ars_nouveau:imbuement_lapis'})
  
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": "actuallyadditions:empowered_palis_crystal"
    },
    "output": "ars_nouveau:source_gem",
    "pedestalItems": [],
    "source": 500
  })

  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "item": "actuallyadditions:empowered_palis_crystal_block"
    },
    "output": "ars_nouveau:source_gem_block",
    "pedestalItems": [],
    "source": 4000
  })

  // Increase source gem block cost
  event.remove({id: 'ars_nouveau:source_gem_block'})
  event.remove({id: 'ars_nouveau:source_gem_block_2'})

  event.shapeless('9x ars_nouveau:source_gem', ['ars_nouveau:source_gem_block'])
  event.shaped('ars_nouveau:source_gem_block', 
    ['AAA', 'AAA', 'AAA'], 
    {
    A: 'ars_nouveau:source_gem'
  })

  // Reworked arcane essences
  event.remove({id: 'ars_nouveau:imbuement_air_essence'})
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "tag": "forge:gems/source"
    },
    "output": "ars_nouveau:air_essence",
    "pedestalItems": [
      {
        "item": {
          "item": "botania:rune_air"
        }
      },
      {
        "item": {
          "item": "ars_nouveau:wilden_wing"
        }
      },
      {
        "item": {
          "item": "mysticalagriculture:air_essence"
        }
      }
    ],
    "source": 2000
  })
  
  event.remove({id: 'ars_nouveau:imbuement_earth_essence'})
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "tag": "forge:gems/source"
    },
    "output": "ars_nouveau:earth_essence",
    "pedestalItems": [
      {
        "item": {
          "item": "botania:rune_earth"
        }
      },
      {
        "item": {
          "tag": "forge:ingots/imperium"
        }
      },
      {
        "item": {
          "item": "mysticalagriculture:earth_essence"
        }
      }
    ],
    "source": 2000
  })
  
  event.remove({id: 'ars_nouveau:imbuement_fire_essence'})
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "tag": "forge:gems/source"
    },
    "output": "ars_nouveau:fire_essence",
    "pedestalItems": [
      {
        "item": {
          "item": "botania:rune_fire"
        }
      },
      {
        "item": {
          "item": "minecraft:gunpowder"
        }
      },
      {
        "item": {
          "item": "mysticalagriculture:fire_essence"
        }
      }
    ],
    "source": 2000
  })
  
  event.remove({id: 'ars_nouveau:imbuement_water_essence'})
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 1,
    "input": {
      "tag": "forge:gems/source"
    },
    "output": "ars_nouveau:water_essence",
    "pedestalItems": [
      {
        "item": {
          "item": "botania:rune_water"
        }
      },
      {
        "item": {
          "item": "minecraft:kelp"
        }
      },
      {
        "item": {
          "item": "mysticalagriculture:water_essence"
        }
      }
    ],
    "source": 2000
  })

  event.shapeless('ars_nouveau:ritual_animal_summon', ['ars_nouveau:purple_archwood_log', 'minecraft:nether_star', 'botania:life_essence', 'enchanted:hint_of_rebirth', 'actuallyadditions:empowered_palis_crystal_block'])
})