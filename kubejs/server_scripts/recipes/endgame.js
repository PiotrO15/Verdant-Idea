ServerEvents.recipes(event => {
  // Tadpole/Frog unlock
  event.custom({
    "type": "ars_nouveau:summon_ritual",
    "augment": {
      "item": "tconstruct:sky_slime_ball"
    },
    "count": 3,
    "mobs": [
      {
        "mob": "minecraft:tadpole",
        "weight": 1
      }
    ],
    "source": "MOB_LIST"
  })

  // Heart of the sea recipe
  event.custom({
    "type": "ars_nouveau:crush",
    "input": {
      "item": "minecraft:beacon"
    },
    "output": [
      {
        "chance": 1.0,
        "count": 1,
        "item": "minecraft:heart_of_the_sea",
        "maxRange": 1
      }
    ],
    "skip_block_place": false
  })

  // Ochre Froglight
  event.custom({
    "type": "mekanism:purifying",
    "chemicalInput": {
      "amount": 1,
      "gas": "mekanism:oxygen"
    },
    "itemInput": {
      "ingredient": {
        "item": "minecraft:ochre_froglight"
      }
    },
    "output": {
      "item": "kubejs:ochre_shard"
    }
  })

  pressure_chamber(event, "kubejs:ochre_nucleus", 4.8, ["kubejs:ochre_prism"])

  event.custom({
    "type": "actuallyadditions:empowering",
    "base": {
      "item": "kubejs:ochre_shard"
    },
    "color": 2437779,
    "energy": 500000,
    "modifiers": [
      {
        "item": "mekanism:yellow_cake_uranium"
      },
      {
        "tag": "forge:plates/lumium"
      },
      {
        "item": "mekanism:yellow_cake_uranium"
      },
      {
        "tag": "forge:plates/lumium"
      }
    ],
    "result": {
      "item": "kubejs:ochre_prism"
    },
    "time": 500
  })

  // Pearlescent Froglight
  event.custom({
    "type": "ars_nouveau:crush",
    "input": {
      "item": "minecraft:pearlescent_froglight"
    },
    "output": [
      {
        "chance": 1.0,
        "count": 1,
        "item": "kubejs:pearlescent_shard",
        "maxRange": 1
      }
    ],
    "skip_block_place": false
  })

  event.custom({
    "type": "enchanted:distilling",
    "cookTime": 300,
    "ingredients": [
      {
        "item": "enchanted:diamond_vapour",
        "count": 3
      },
      {
        "item": "kubejs:pearlescent_shard"
      }
    ],
    "results": [
      {
        "item": "kubejs:pearlescent_prism"
      }
    ]
  })

  event.recipes.botania.terra_plate("kubejs:pearlescent_nucleus", ["kubejs:pearlescent_prism", "botania:terrasteel_ingot", "botania:life_essence", "enchanted:attuned_stone"], 250000)

  // Verdant Froglight
  event.recipes.thermal.pulverizer(['kubejs:verdant_shard'], 'minecraft:verdant_froglight')
    event.custom({
    "type": "mekanism:crushing",
    "input": {
      "ingredient": {
        "item": "minecraft:verdant_froglight"
      }
    },
    "output": {
      "item": "kubejs:verdant_shard"
    }
  })

  event.custom({
    "type": "thermal:insolator",
    "ingredient": {
      "item": "kubejs:verdant_shard"
    },
    "result": ["kubejs:verdant_prism"],
    "energy_mod": 5,
    "water_mod": 5
  })

  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "output": {
      "item": "kubejs:verdant_nucleus"
    },
    "pedestalItems": [
      {
        "item": {
          "tag": "minecraft:saplings"
        }
      },
      {
        "item": {
          "tag": "forge:mushrooms"
        }
      },
      {
        "item": {
          "tag": "forge:vegetables"
        }
      },
      {
        "item": {
          "tag": "minecraft:flowers"
        }
      }
    ],
    "reagent": [
      {
        "item": "kubejs:verdant_prism"
      }
    ],
    "sourceCost": 9000
  })

  // Final Verdant Essence recipe
  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:water"
    },
    "ingredients": [
      {
        "item": "kubejs:ochre_nucleus"
      },
      {
        "item": "kubejs:pearlescent_nucleus"
      },
      {
        "item": "kubejs:verdant_nucleus"
      }
    ],
    "result": {
      "item": "biomeblends:biome_blend",
      "nbt": {blend_type:"wasteland:verdant"}
    }
  })
})