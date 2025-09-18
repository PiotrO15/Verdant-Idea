// Worldgen scripts

let overworld_biomes = ['badlands', 'bamboo_jungle', 'beach', 'birch_forest', 'cherry_grove', 'cold_ocean', 'dark_forest', 'deep_cold_ocean', 'deep_dark', 'deep_frozen_ocean', 'deep_lukewarm_ocean', 'deep_ocean', 'desert', 'dripstone_caves', 'eroded_badlands', 'flower_forest', 'forest', 'frozen_ocean', 'frozen_peaks', 'frozen_river', 'grove', 'ice_spikes', 'jagged_peaks', 'jungle', 'lukewarm_ocean', 'lush_caves', 'mangrove_swamp', 'meadow', 'mushroom_fields', 'ocean', 'old_growth_birch_forest', 'old_growth_pine_taiga', 'old_growth_spruce_taiga', 'plains', 'river', 'savanna', 'savanna_plateau', 'snowy_beach', 'snowy_plains', 'snowy_slopes', 'snowy_taiga', 'sparse_jungle', 'stony_peaks', 'stony_shore', 'sunflower_plains', 'swamp', 'taiga', 'warm_ocean', 'windswept_forest', 'windswept_gravelly_hills', 'windswept_hills', 'windswept_savanna', 'wooded_badlands']
let water_biomes = ['river', 'frozen_river', 'ocean', 'deep_ocean', 'warm_ocean', 'lukewarm_ocean', 'deep_lukewarm_ocean', 'cold_ocean', 'deep_cold_ocean', 'frozen_ocean', 'deep_frozen_ocean']

// let overworld_biomes = [, , 'beach', , , 'cold_ocean', , 'deep_cold_ocean', 'deep_dark', 'deep_frozen_ocean', 'deep_lukewarm_ocean', 'deep_ocean', , 'dripstone_caves', , 'frozen_ocean', 'frozen_river', 'lukewarm_ocean', 'lush_caves', 'ocean', 'river', 'stony_shore', 'warm_ocean']

let cold_biomes = ['frozen_peaks', 'grove', 'ice_spikes', 'jagged_peaks', 'old_growth_pine_taiga', 'old_growth_spruce_taiga', 'snowy_beach', 'snowy_plains', 'snowy_slopes', 'snowy_taiga', 'taiga', 'windswept_forest', 'windswept_gravelly_hills', 'windswept_hills']
let temperate_biomes = ['birch_forest', 'dark_forest', 'forest', 'mushroom_fields', 'old_growth_birch_forest', 'plains', 'stony_peaks', 'sunflower_plains', 'swamp']
let tropical_biomes = ['bamboo_jungle', 'mangrove_swamp', 'jungle', 'sparse_jungle']
let warm_biomes = ['badlands', 'desert', 'eroded_badlands', 'savanna', 'savanna_plateau', 'windswept_savanna', 'wooded_badlands']
let floral_biomes = ['cherry_grove', 'flower_forest', 'meadow']

ServerEvents.tags("worldgen/biome", (event) => {
  event.get("ae2:has_meteorites").removeAll()
  event.get("pneumaticcraft:has_surface_oil_lakes").removeAll()
  event.get("pneumaticcraft:has_underground_oil_lakes").removeAll()

  event.add('wasteland:is_plains', ['minecraft:plains', 'wasteland:plains'])

  event.add('wasteland:ruined_biomes', overworld_biomes.map(biome => `wasteland:${biome}`))
  event.add('wasteland:recovering_biomes', overworld_biomes.map(biome => `recovering:${biome}`))
  event.add('wasteland:verdant_biomes', overworld_biomes.map(biome => `minecraft:${biome}`))

  event.add('wasteland:is_water', water_biomes.map(biome => `wasteland:${biome}`).concat(water_biomes.map(biome => `minecraft:${biome}`)) )
})