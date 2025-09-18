ServerEvents.recipes(event => {
  event.custom({
    "type": "enchanted:witch_cauldron",
    "cookingColor": [
      92,
      35,
      0
    ],
    "finalColor": [
      153,
      52,
      0
    ],
    "ingredients": [
      {
        "item": "minecraft:netherrack"
      },
      {
        "item": "minecraft:crimson_fungus"
      },
      {
        "item": "minecraft:bone_meal"
      }
    ],
    "power": 0,
    "result": {
      "item": "minecraft:crimson_nylium"
    }
  })

  event.custom({
    "type": "enchanted:witch_cauldron",
    "cookingColor": [
      92,
      35,
      0
    ],
    "finalColor": [
      153,
      52,
      0
    ],
    "ingredients": [
      {
        "item": "minecraft:netherrack"
      },
      {
        "item": "minecraft:warped_fungus"
      },
      {
        "item": "minecraft:bone_meal"
      }
    ],
    "power": 0,
    "result": {
      "item": "minecraft:warped_nylium"
    }
  })

  // Remove refined evil recipe that uses demon heart (unavailable item)
  event.remove({id: 'enchanted:distilling/demon_heart_diamond_vapour'})

  // Update recipes
  event.replaceInput({id: 'enchanted:distillery'}, "enchanted:clay_jar", "enchanted:odour_of_purity")
  event.replaceInput({id: 'enchanted:distillery'}, "minecraft:iron_ingot", "#forge:plates/steel")
  event.replaceInput({id: 'enchanted:distillery'}, "enchanted:attuned_stone", "minecraft:campfire")
  event.replaceInput({id: 'enchanted:distillery'}, "minecraft:gold_nugget", "enchanted:alder_log")

  // Silver distilling recipe
  event.custom({
    "type": "enchanted:distilling",
    "cookTime": 300,
    "ingredients": [
      {
        "item": "enchanted:tear_of_the_goddess"
      },
      {
        "count": 3,
        "item": "minecraft:raw_copper"
      }
    ],
    "results": [
      {
        "count": 3,
        "item": "thermal:silver_nugget"
      },
      {
        "count": 2,
        "item": "thermal:copper_dust"
      }
    ]
  })

  event.replaceInput({id: 'enchanted:chalice'}, 'enchanted:attuned_stone', '#forge:ingots/silver')

  // Weak essence recipe
  event.custom({
    "type": "enchanted:distilling",
    "cookTime": 300,
    "ingredients": [
      {
        "item": "enchanted:hint_of_rebirth"
      },
      {
        "count": 3,
        "item": "tconstruct:amethyst_bronze_ingot"
      }
    ],
    "results": [
      {
        "item": "biomeblends:biome_blend",
        "nbt": {blend_type:"wasteland:weak"}
      }
    ]
  })
})