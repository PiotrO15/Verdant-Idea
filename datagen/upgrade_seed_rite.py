import json

def maxed_seed(species):
    return {
        "id": "agricraft:seed",
        "Count": 1,
        "tag": {
            "genes": {
                "fertility": {"dom": 10, "rec": 10},
                "gain": {"dom": 10, "rec": 10},
                "growth": {"dom": 10, "rec": 10},
                "mutativity": {"dom": 10, "rec": 10},
                "resistance": {"dom": 10, "rec": 10},
                "species": {"dom": species, "rec": species},
                "strength": {"dom": 10, "rec": 10}
            }
        }
    }

def partial_seed(species):
    return {
        "id": "agricraft:seed",
        "Count": 1,
        "tag": {
            "genes": {
                "species": {"dom": species, "rec": species}
            }
        }
    }

def parse_input_item(item):
    if isinstance(item, str):
        count = 1
        if "x " in item:
            count, item_id = item.split("x ", 1)
            count = int(count)
        else:
            item_id = item

        return {"id": item_id, "Count": count}
    return item

def generate_rite(input_items, output_items, shapes, power):
    parsed_input_items = [
        parse_input_item(item) if isinstance(item, str) else item
        for item in input_items
    ]

    data = {
        "items": parsed_input_items,
        "shapes": shapes,
        "factory": {
            "type": "enchanted:create_item",
            "items": output_items
        },
        "power": power
    }

    output_filename = "output.json"
    if parsed_input_items:
        first_input_id = parsed_input_items[0]["tag"]["genes"]["species"]["dom"].split(":")[1]
        output_filename = f"upgrade_{first_input_id}_seeds.json"

    with open(output_filename, "w") as json_file:
        json.dump(data, json_file, indent=4)

    print(f"JSON file '{output_filename}' has been created.")
    return data

def upgrade_seed_rite(seed_type, parent1, parent2, shapes, power):
    generate_rite([partial_seed(seed_type), maxed_seed(parent1), maxed_seed(parent2)], [maxed_seed(seed_type)], shapes, power)


if __name__ == "__main__":
    power = 1000
    shapes = {
        "wasteland:basic_flower": "enchanted:ritual_chalk"
    }

    upgrade_seed_rite('mysticalagriculture:inferium', 'minecraft:sugar_cane', 'minecraft:pumpkin', shapes, power)

    power = 2000

    upgrade_seed_rite('mysticalagriculture:coal', 'minecraft:melon', 'minecraft:cactus', shapes, power)
    upgrade_seed_rite('mysticalagriculture:copper', 'minecraft:dandelion', 'minecraft:poppy', shapes, power)
    upgrade_seed_rite('mysticalagriculture:dye', 'minecraft:blue_orchid', 'minecraft:sweet_berries', shapes, power)
    upgrade_seed_rite('mysticalagriculture:iron', 'minecraft:dandelion', 'minecraft:pumpkin', shapes, power)
    upgrade_seed_rite('mysticalagriculture:nether', 'minecraft:sweet_berries', 'farmersdelight:tomato', shapes, power)
    upgrade_seed_rite('mysticalagriculture:skeleton', 'minecraft:sugar_cane', 'minecraft:pumpkin', shapes, power)
    upgrade_seed_rite('mysticalagriculture:zombie', 'minecraft:cactus', 'immersiveengineering:hemp', shapes, power)
    
    power = 3500
    shapes = {
        "wasteland:basic_flower": "enchanted:ritual_chalk",
        "wasteland:advanced_flower": "enchanted:nether_chalk"
    }
    
    upgrade_seed_rite('mysticalagriculture:air', 'minecraft:oxeye_daisy', 'minecraft:dandelion', shapes, power)
    upgrade_seed_rite('mysticalagriculture:earth', 'farmersdelight:onion', 'minecraft:bamboo', shapes, power)
    upgrade_seed_rite('mysticalagriculture:fire', 'minecraft:orange_tulip', 'minecraft:sweet_berries', shapes, power)
    upgrade_seed_rite('mysticalagriculture:water', 'minecraft:seagrass', 'minecraft:melon', shapes, power)
    upgrade_seed_rite('mysticalagriculture:experience', 'minecraft:bamboo', 'minecraft:cactus', shapes, power)
    upgrade_seed_rite('mysticalagriculture:lapis_lazuli', 'minecraft:blue_orchid', 'minecraft:cornflower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:nether_quartz', 'minecraft:white_tulip', 'minecraft:azure_bluet', shapes, power)
    upgrade_seed_rite('mysticalagriculture:redstone', 'minecraft:red_tulip', 'minecraft:poppy', shapes, power)
    upgrade_seed_rite('mysticalagriculture:spider', 'minecraft:white_tulip', 'minecraft:pink_tulip', shapes, power)
    upgrade_seed_rite('mysticalagriculture:silver', 'minecraft:blue_orchid', 'minecraft:oxeye_daisy', shapes, power)

    power = 5000

    upgrade_seed_rite('mysticalagriculture:blaze', 'botania:orange_mystical_flower', 'minecraft:torchflower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:creeper', 'botania:lime_mystical_flower', 'botania:gray_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:diamond', 'botania:light_blue_mystical_flower', 'mysticalagriculture:tin', shapes, power)
    upgrade_seed_rite('mysticalagriculture:emerald', 'botania:green_mystical_flower', 'botania:lime_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:end', 'botania:magenta_mystical_flower', 'botania:yellow_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:enderman', 'botania:purple_mystical_flower', 'botania:magenta_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:gold', 'botania:yellow_mystical_flower', 'botania:orange_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:aluminum', 'botania:pink_mystical_flower', 'botania:brown_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:tin', 'mysticalagriculture:iron', 'botania:light_gray_mystical_flower', shapes, power)

    power = 7000
    shapes = {
        "wasteland:basic_flower": "enchanted:ritual_chalk",
        "wasteland:advanced_flower": "enchanted:nether_chalk",
        "wasteland:master_flower": "enchanted:otherwhere_chalk"
    }

    upgrade_seed_rite('mysticalagriculture:nickel', 'botania:white_mystical_flower', 'botania:light_gray_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:certus_quartz', 'botania:light_blue_mystical_flower', 'enchanted:snowbell', shapes, power)
    upgrade_seed_rite('mysticalagriculture:fluorite', 'botania:purple_mystical_flower', 'botania:light_blue_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:ghast', 'botania:white_mystical_flower', 'minecraft:lily_of_the_valley', shapes, power)
    upgrade_seed_rite('mysticalagriculture:lead', 'botania:blue_mystical_flower', 'botania:gray_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:osmium', 'botania:cyan_mystical_flower', 'botania:light_gray_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:netherite', 'mysticalagriculture:gold', 'botania:brown_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:slime', 'botania:lime_mystical_flower', 'botania:green_mystical_flower', shapes, power)
    upgrade_seed_rite('mysticalagriculture:wither_skeleton', 'botania:black_mystical_flower', 'mysticalagriculture:skeleton', shapes, power)