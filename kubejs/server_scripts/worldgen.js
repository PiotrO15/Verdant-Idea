// Worldgen scripts
ServerEvents.tags("worldgen/biome", (event) => {
  event.get("ae2:has_meteorites").removeAll()
  event.get("pneumaticcraft:has_surface_oil_lakes").removeAll()
  event.get("pneumaticcraft:has_underground_oil_lakes").removeAll()

  event.add('wasteland:is_plains', ['minecraft:plains', 'wasteland:plains'])
})