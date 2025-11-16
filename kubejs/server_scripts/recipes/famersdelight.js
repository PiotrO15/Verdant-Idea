function cuttingBoardRecipe(event, input, output, tool) {
  event.custom({
    "type": "farmersdelight:cutting",
    "ingredients": [
      format_item(input)
    ],
    "result": Array.isArray(output)
      ? output.map(format_item)
      : [format_item(output)],
    "tool": format_item(tool)
  })
}

ServerEvents.recipes(event => {
  event.remove({id: 'minecraft:red_dye_from_beetroot'})
  cuttingBoardRecipe(event, 'minecraft:beetroot', 'minecraft:red_dye', '#forge:tools/knives')
})