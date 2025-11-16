const resourcePlantTypes = ['air', 'aluminum', 'blaze', 'certus_quartz', 'coal', 'copper', 'creeper', 'diamond', 'earth', 'emerald', 'enderman', 'end', 'experience', 'fire', 'fluorite', 'ghast', 'gold', 'inferium', 'iron', 'lapis_lazuli', 'lead', 'netherite', 'nether_quartz', 'nether', 'nickel', 'osmium', 'redstone', 'silver', 'skeleton', 'tin', 'water', 'wither_skeleton', 'zombie']
const flowerTypes = ['allium', 'azure_bluet', 'blue_orchid', 'cornflower', 'dandelion', 'lily_of_the_valley', 'oxeye_daisy', 'poppy', 'red_tulip', 'white_tulip', 'orange_tulip', 'pink_tulip', 'torchflower', 'wither_rose']
const tallFlowerTypes = ['sunflower', 'lilac', 'rose_bush', 'peony']

ServerEvents.recipes(event => {
  function cloche(input, output, render_type, model, soil, time) {
    event.custom({
      "type": "immersiveengineering:cloche",
      "input": input,
      "render": {
        "type": render_type,
        "block": model
      },
      "results": output,
      "soil": {
        "item": soil
      },
      "time": time
    })
  }

  function agriCloche(species, output, render_type, model, soil, time) {
    cloche({
        "type": "forge:partial_nbt",
        "item": "agricraft:seed",
        "nbt": {
          "genes": {
            "species": {
              "dom": species,
              "rec": species
            }
          }
        }
      },
      output,
      render_type,
      model,
      soil,
      time
    )
  }

  event.remove({type: 'immersiveengineering:cloche'})

  resourcePlantTypes.forEach(type => {
    agriCloche(
      `mysticalagriculture:${type}`,
      [
        {
          "item": `mysticalagriculture:${type}_essence`
        }
      ],
      'crop',
      `mysticalagriculture:${type}_crop`,
      'farmersdelight:rich_soil',
      800
    )
  })

  flowerTypes.forEach(type => {
    agriCloche(
      `minecraft:${type}`,
      [
        {
          "item": `minecraft:${type}`
        }
      ],
      'generic',
      `minecraft:${type}`,
      'minecraft:podzol',
      480
    )
  })
  
  tallFlowerTypes.forEach(type => {
    cloche(
      {
        "item": `minecraft:${type}`
      },
      [
        {
          "item": `minecraft:${type}`
        }
      ],
      'generic',
      `minecraft:${type}`,
      'minecraft:dirt',
      480
    )
  })

  colors.forEach(color => {
    agriCloche(
      `botania:${color}_mystical_flower`,
      [
        {
          "item": `botania:${color}_mystical_flower`
        }
      ],
      'generic',
      `botania:${color}_mystical_flower`,
      'farmersdelight:rich_soil',
      480
    )
  }),

  agriCloche(
    'minecraft:wheat',
    [
        {
            "item": 'minecraft:wheat'
        }
    ],
    'crop',
    'minecraft:wheat',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'minecraft:beetroot',
    [
        {
            "item": 'minecraft:beetroot',
            "count": 2
        }
    ],
    'crop',
    'minecraft:beetroots',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'minecraft:carrot',
    [
        {
            "item": 'minecraft:carrot',
            "count": 2
        }
    ],
    'crop',
    'minecraft:carrots',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'minecraft:potato',
    [
        {
            "item": 'minecraft:potato',
            "count": 2
        }
    ],
    'crop',
    'minecraft:potatoes',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'minecraft:nether_wart',
    [
        {
            "item": 'minecraft:nether_wart',
            "count": 2
        }   
    ],
    'crop',
    'minecraft:nether_wart',
    'minecraft:soul_sand',
    800
  )

  agriCloche(
    'minecraft:cactus',
    [
        {
            "item": 'minecraft:cactus',
            "count": 2
        }
    ],
    'generic',
    'minecraft:cactus',
    'minecraft:sand',
    800
  )

  agriCloche(
    'minecraft:sugar_cane',
    [
        {
            "item": 'minecraft:sugar_cane',
            "count": 2
        }
    ],
    'generic',
    'minecraft:sugar_cane',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'minecraft:bamboo',
    [
        {
            "item": 'minecraft:bamboo',
            "count": 2
        }
    ],
    'generic',
    'minecraft:bamboo',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'minecraft:sweet_berries',
    [
        {
            "item": 'minecraft:sweet_berries',
            "count": 2
        }
    ],
    'crop',
    'minecraft:sweet_berry_bush',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'minecraft:seagrass',
    [
        {
            "item": 'minecraft:seagrass'
        }
    ],
    'generic',
    'minecraft:seagrass',
    'minecraft:clay',
    800
  )

  agriCloche(
    'minecraft:sea_pickle',
    [
        {
            "item": 'minecraft:sea_pickle'
        }
    ],
    'generic',
    'minecraft:sea_pickle',
    'minecraft:clay',
    800
  )

  agriCloche(
    'minecraft:kelp',
    [
        {
            "item": 'minecraft:kelp'
        }
    ],
    'generic',
    'minecraft:kelp',
    'minecraft:clay',
    800
  )

  agriCloche(
    'minecraft:pumpkin',
    [
        {
            "item": 'minecraft:pumpkin'
        }
    ],
    'stem',
    'minecraft:pumpkin',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'minecraft:melon',
    [
        {
            "item": 'minecraft:melon_slice',
            "count": 3
        }
    ],
    'stem',
    'minecraft:melon',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'minecraft:brown_mushroom',
    [
        {
            "item": 'minecraft:brown_mushroom'
        }
    ],
    'generic',
    'minecraft:brown_mushroom',
    'minecraft:mycelium',
    800
  )

  agriCloche(
    'minecraft:red_mushroom',
    [
        {
            "item": 'minecraft:red_mushroom'
        }
    ],
    'generic',
    'minecraft:red_mushroom',
    'minecraft:mycelium',
    800
  )

  agriCloche(
    'minecraft:warped_fungus',
    [
        {
            "item": 'minecraft:warped_fungus'
        }
    ],
    'generic',
    'minecraft:warped_fungus',
    'minecraft:warped_nylium',
    800
  )

  agriCloche(
    'minecraft:crimson_fungus',
    [
        {
            "item": 'minecraft:crimson_fungus'
        }
    ],
    'generic',
    'minecraft:crimson_fungus',
    'minecraft:crimson_nylium',
    800
  )

  agriCloche(
    'enchanted:belladonna',
    [
        {
            "item": 'enchanted:belladonna_flower'
        }
    ],
    'crop',
    'enchanted:belladonna',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'enchanted:mandrake',
    [
        {
            "item": 'enchanted:mandrake_root'
        }
    ],
    'crop',
    'enchanted:mandrake',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'enchanted:garlic',
    [
        {
            "item": 'enchanted:garlic'
        }
    ],
    'crop',
    'enchanted:garlic',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'enchanted:wolfsbane',
    [
        {
            "item": 'enchanted:wolfsbane_flower'
        }
    ],
    'crop',
    'enchanted:wolfsbane',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'enchanted:snowbell',
    [
        {
            "item": "minecraft:snowball"
        },
        {
            "item": 'enchanted:icy_needle'
        }
    ],
    'crop',
    'enchanted:snowbell',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'enchanted:water_artichoke',
    [
        {
            "item": 'enchanted:water_artichoke'
        }
    ],
    'crop',
    'enchanted:water_artichoke',
    'minecraft:clay',
    800
  )

  agriCloche(
    'immersiveengineering:hemp',
    [
        {
            "item": "immersiveengineering:hemp_fiber",
            "count": 2
        }
    ],
    'hemp',
    'immersiveengineering:hemp',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'actuallyadditions:canola',
    [
        {
            "item": "actuallyadditions:canola",
            "count": 2
        }
    ],
    'crop',
    'actuallyadditions:canola',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'actuallyadditions:coffee',
    [
        {
            "item": "actuallyadditions:coffee_beans",
            "count": 2
        }
    ],
    'crop',
    'actuallyadditions:coffee',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'farmersdelight:onion',
    [
        {
            "item": "farmersdelight:onion",
            "count": 2
        }
    ],
    'crop',
    'farmersdelight:onions',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'farmersdelight:rice',
    [
        {
            "item": "farmersdelight:rice_panicle",
            "count": 2
        }
    ],
    'crop',
    'farmersdelight:rice',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'farmersdelight:cabbage',
    [
        {
            "item": "farmersdelight:cabbage",
            "count": 2
        }
    ],
    'crop',
    'farmersdelight:cabbages',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'farmersdelight:tomato',
    [
        {
            "item": "farmersdelight:tomato",
            "count": 2
        }
    ],
    'crop',
    'farmersdelight:tomatoes',
    'minecraft:dirt',
    800
  )

  agriCloche(
    'ars_nouveau:magebloom',
    [
        {
            "item": "ars_nouveau:magebloom"
        }
    ],
    'crop',
    'ars_nouveau:magebloom_crop',
    'minecraft:dirt',
    800
  )
})