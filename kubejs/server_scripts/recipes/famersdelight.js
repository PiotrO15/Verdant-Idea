ServerEvents.recipes(event => {
  event.remove({output: 'farmersdelight:organic_compost'})

  function cuttingBoardRecipe(input, output) {
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": input
        }
      ],
      "result": [
        {
          "item": output
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      }
    })
  }

  event.remove({id: 'minecraft:red_dye_from_beetroot'})
  cuttingBoardRecipe('minecraft:beetroot', 'minecraft:red_dye')
})