// Worldgen scripts

let biome_types = ['wasteland', 'recovering', 'minecraft']

let overworld_biomes = ['badlands', 'bamboo_jungle', 'beach', 'birch_forest', 'cherry_grove', 'cold_ocean', 'dark_forest', 'deep_cold_ocean', 'deep_dark', 'deep_frozen_ocean', 'deep_lukewarm_ocean', 'deep_ocean', 'desert', 'dripstone_caves', 'eroded_badlands', 'flower_forest', 'forest', 'frozen_ocean', 'frozen_peaks', 'frozen_river', 'grove', 'ice_spikes', 'jagged_peaks', 'jungle', 'lukewarm_ocean', 'lush_caves', 'mangrove_swamp', 'meadow', 'mushroom_fields', 'ocean', 'old_growth_birch_forest', 'old_growth_pine_taiga', 'old_growth_spruce_taiga', 'plains', 'river', 'savanna', 'savanna_plateau', 'snowy_beach', 'snowy_plains', 'snowy_slopes', 'snowy_taiga', 'sparse_jungle', 'stony_peaks', 'stony_shore', 'sunflower_plains', 'swamp', 'taiga', 'warm_ocean', 'windswept_forest', 'windswept_gravelly_hills', 'windswept_hills', 'windswept_savanna', 'wooded_badlands']
let water_biomes = ['river', 'frozen_river', 'ocean', 'deep_ocean', 'warm_ocean', 'lukewarm_ocean', 'deep_lukewarm_ocean', 'cold_ocean', 'deep_cold_ocean', 'frozen_ocean', 'deep_frozen_ocean']

// let overworld_biomes = [, , 'beach', , , , 'deep_ocean', , 'dripstone_caves', , 'lush_caves', 'ocean', 'river', 'stony_shore']

let cold_biomes = ['cold_ocean', 'deep_cold_ocean', 'deep_dark', 'deep_frozen_ocean', 'frozen_ocean', 'frozen_peaks', 'frozen_river', 'grove', 'ice_spikes', 'jagged_peaks', 'old_growth_pine_taiga', 'old_growth_spruce_taiga', 'snowy_beach', 'snowy_plains', 'snowy_slopes', 'snowy_taiga', 'stony_peaks', 'taiga', 'windswept_forest', 'windswept_gravelly_hills', 'windswept_hills']
let temperate_biomes = ['birch_forest', 'dark_forest', 'forest', 'mushroom_fields', 'old_growth_birch_forest', 'plains', 'sunflower_plains', 'swamp']
let tropical_biomes = ['bamboo_jungle', 'mangrove_swamp', 'jungle', 'sparse_jungle']
let warm_biomes = ['badlands', 'desert', 'eroded_badlands', 'savanna', 'savanna_plateau', 'windswept_savanna', 'wooded_badlands', 'deep_lukewarm_ocean', 'lukewarm_ocean', 'warm_ocean']
let floral_biomes = ['cherry_grove', 'flower_forest', 'meadow']

let structure_biomes = ['badlands', 'bamboo_jungle', 'birch_forest', 'cherry_grove', 'dark_forest', 'desert', 'eroded_badlands', 'flower_forest', 'forest', 'ice_spikes', 'jungle', 'mangrove_swamp', 'meadow', 'old_growth_birch_forest', 'old_growth_pine_taiga', 'old_growth_spruce_taiga', 'plains', 'savanna', 'savanna_plateau', 'snowy_plains', 'snowy_taiga', 'sparse_jungle', 'sunflower_plains', 'swamp', 'taiga', 'windswept_forest', 'windswept_gravelly_hills', 'windswept_hills', 'windswept_savanna', 'wooded_badlands']

function forAllTypes(biomes) {
  return biome_types.reduce((acc, type) => acc.concat(biomes.map(biome => `${type}:${biome}`)), [])
}

ServerEvents.tags("worldgen/biome", (event) => {
  event.get("ae2:has_meteorites").removeAll()
  event.get("pneumaticcraft:has_surface_oil_lakes").removeAll()
  event.get("pneumaticcraft:has_underground_oil_lakes").removeAll()

  event.add('wasteland:is_plains', ['minecraft:plains', 'wasteland:plains'])

  event.add('wasteland:ruined_biomes', overworld_biomes.map(biome => `wasteland:${biome}`))
  event.add('wasteland:recovering_biomes', overworld_biomes.map(biome => `recovering:${biome}`))
  event.add('wasteland:verdant_biomes', overworld_biomes.map(biome => `minecraft:${biome}`))

  event.add('wasteland:has_structure/oil_rig', ['wasteland:deep_ocean', 'wasteland:deep_lukewarm_ocean', 'wasteland:deep_cold_ocean', 'wasteland:deep_frozen_ocean'])
  event.add('wasteland:has_structure/ruins', structure_biomes.map(biome => `wasteland:${biome}`))

  event.add('wasteland:is_water', forAllTypes(water_biomes))

  event.add('wasteland:is_cold', forAllTypes(cold_biomes))
  event.add('wasteland:is_temperate', forAllTypes(temperate_biomes))
  event.add('wasteland:is_tropical', forAllTypes(tropical_biomes))
  event.add('wasteland:is_warm', forAllTypes(warm_biomes))
  event.add('wasteland:is_floral', forAllTypes(floral_biomes))

  event.add('minecraft:spawns_cold_variant_frogs', forAllTypes(cold_biomes))
  
  event.add('minecraft:spawns_warm_variant_frogs', forAllTypes(warm_biomes))
  event.add('minecraft:spawns_warm_variant_frogs', forAllTypes(tropical_biomes))
})