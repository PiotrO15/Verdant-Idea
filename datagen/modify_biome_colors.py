import json
import os

GRASS_COLOR = 12365982
FOLIAGE_COLOR = 12365982
W1_FOLIAGE = 2/3
W2_FOLIAGE = 1/3

SKY_COLOR = 10331044
FOG_COLOR = 13490392
WATER_COLOR = 4471598
WATER_FOG_COLOR = 3419166
W1_SKY_FOG = 5/10
W2_SKY_FOG = 5/10

add_particles = False

grass_colors = {'badlands': 9470285, 'bamboo_jungle': 5884220, 'beach': 9551193, 'birch_forest': 8960871, 'cherry_grove': 11983713, 'cold_ocean': 9353585, 'dark_forest': 5274162, 'deep_cold_ocean': 9353585, 'deep_dark': 9551193, 'deep_frozen_ocean': 9353585, 'deep_lukewarm_ocean': 9353585, 'deep_ocean': 9353585, 'desert': 12564309, 'dripstone_caves': 9551193, 'eroded_badlands': 9470285, 'flower_forest': 7979098, 'forest': 7979098, 'frozen_ocean': 8434839, 'frozen_peaks': 8434839, 'frozen_river': 8434839, 'grove': 8434839, 'ice_spikes': 8434839, 'jagged_peaks': 8434839, 'jungle': 5884220, 'lukewarm_ocean': 9353585, 'lush_caves': 9353585, 'mangrove_swamp': 6975545, 'meadow': 8633197, 'mushroom_fields': 5622079, 'ocean': 9353585, 'old_growth_birch_forest': 8960871, 'old_growth_pine_taiga': 8829055, 'old_growth_spruce_taiga': 8828803, 'plains': 9551193, 'river': 9353585, 'savanna': 12564309, 'savanna_plateau': 12564309, 'snowy_beach': 8631699, 'snowy_plains': 8434839, 'snowy_slopes': 8434839, 'snowy_taiga': 8434839, 'sparse_jungle': 6604607, 'stony_peaks': 10141259, 'stony_shore': 9090697, 'sunflower_plains': 9551193, 'swamp': 6975545, 'taiga': 8828803, 'warm_ocean': 9353585, 'windswept_forest': 9090697, 'windswept_gravelly_hills': 9090697, 'windswept_hills': 9090697, 'windswept_savanna': 12564309, 'wooded_badlands': 9470285}
foliage_colors = {'badlands': 10387789, 'bamboo_jungle': 3193611, 'beach': 7842607, 'birch_forest': 7055681, 'cherry_grove': 11983714, 'cold_ocean': 7448397, 'dark_forest': 5877296, 'deep_cold_ocean': 7448397, 'deep_dark': 7842607, 'deep_frozen_ocean': 7448397, 'deep_lukewarm_ocean': 7448397, 'deep_ocean': 7448397, 'desert': 11445290, 'dripstone_caves': 7842607, 'eroded_badlands': 10387789, 'flower_forest': 5877296, 'forest': 5877296, 'frozen_ocean': 6332795, 'frozen_peaks': 6332795, 'frozen_river': 6332795, 'grove': 6332795, 'ice_spikes': 6332795, 'jagged_peaks': 6332795, 'jungle': 3193611, 'lukewarm_ocean': 7448397, 'lush_caves': 7448397, 'mangrove_swamp': 9285927, 'meadow': 6531400, 'mushroom_fields': 2865935, 'ocean': 7448397, 'old_growth_birch_forest': 7055681, 'old_growth_pine_taiga': 6858079, 'old_growth_spruce_taiga': 6857828, 'plains': 7842607, 'river': 7448397, 'savanna': 11445290, 'savanna_plateau': 11445290, 'snowy_beach': 6595192, 'snowy_plains': 6332795, 'snowy_slopes': 6332795, 'snowy_taiga': 6332795, 'sparse_jungle': 4110351, 'stony_peaks': 8563742, 'stony_shore': 7185259, 'sunflower_plains': 7842607, 'swamp': 6975545, 'taiga': 6857828, 'warm_ocean': 7448397, 'windswept_forest': 7185259, 'windswept_gravelly_hills': 7185259, 'windswept_hills': 7185259, 'windswept_savanna': 11445290, 'wooded_badlands': 10387789}

def mix_colors(c1, c2, w1 = 2/3, w2 = 1/3):
    # Extract RGB components
    r1, g1, b1 = (c1 >> 16) & 0xFF, (c1 >> 8) & 0xFF, c1 & 0xFF
    r2, g2, b2 = (c2 >> 16) & 0xFF, (c2 >> 8) & 0xFF, c2 & 0xFF

    # Weighted average
    r = int(r1 * w1 + r2 * w2)
    g = int(g1 * w1 + g2 * w2)
    b = int(b1 * w1 + b2 * w2)

    # Recombine into a single integer
    return (r << 16) | (g << 8) | b

biomes_dir = os.path.join(os.path.dirname(__file__), 'biomes')

for filename in os.listdir(biomes_dir):
    if filename.endswith('.json'):
        biome_name = os.path.splitext(filename)[0]
        grass = grass_colors.get(biome_name)
        foliage = foliage_colors.get(biome_name)

        filepath = os.path.join(biomes_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Modify grass and foliage colors
        if grass or foliage:
            effects = data.get('effects', {})
            if grass:
                effects['grass_color'] = mix_colors(grass, GRASS_COLOR, w1=W1_FOLIAGE, w2=W2_FOLIAGE)
            if foliage:
                effects['foliage_color'] = mix_colors(foliage, FOLIAGE_COLOR, w1=W1_FOLIAGE, w2=W2_FOLIAGE)
            data['effects'] = effects

            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)

        # Add particles
        if add_particles:
            data['effects']['particle'] = {
                "probability": 0.0035,
                "options": {
                    "type": "minecraft:white_ash"
                }
            }

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)

        # Modify sky, water and fog colors
        effects = data.get('effects', {})
        sky_color = effects.get('sky_color')
        fog_color = effects.get('fog_color')
        water_color = effects.get('water_color')
        water_fog_color = effects.get('water_fog_color')

        if sky_color:
            sky_color = mix_colors(sky_color, SKY_COLOR, w1=W1_SKY_FOG, w2=W2_SKY_FOG)
        if fog_color:
            fog_color = mix_colors(fog_color, FOG_COLOR, w1=W1_SKY_FOG, w2=W2_SKY_FOG)
        if water_color:
            water_color = mix_colors(water_color, WATER_COLOR, w1=W1_SKY_FOG, w2=W2_SKY_FOG)
        if water_fog_color:
            water_fog_color = mix_colors(water_fog_color, WATER_FOG_COLOR, w1=W1_SKY_FOG, w2=W2_SKY_FOG)

        effects['sky_color'] = sky_color
        effects['fog_color'] = fog_color
        effects['water_color'] = water_color
        effects['water_fog_color'] = water_fog_color
        data['effects'] = effects

        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
