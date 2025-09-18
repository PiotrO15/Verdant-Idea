// priority: 10

function pressure_chamber(event, output, pressure, input) {
  const processedInput = input.map(pneumaticcraft_format)

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: processedInput,
    pressure: pressure,
    results: [{ item: output }]
  })
}

function pneumaticcraft_format(item) {
  let count = {}
    if (item.match(/^(\d+)x /)) {
      count = {
        count: parseInt(item.match(/^(\d+)x /)[1]),
        type: "pneumaticcraft:stacked_item"
      }
      item = item.replace(/^(\d+)x /, "")
    }

    if (item.startsWith('#')) {
      item = { 
        tag: item.substring(1)
      }
    } else {
      item = { 
        item: item
      }
    }

    for (var key in count) {
      item[key] = count[key]
    }

    return item
}

ServerEvents.recipes(event => {
  function explosion_crafting(input, loss_rate, output) {
    event.custom({
      type: "pneumaticcraft:explosion_crafting",
      input: {
        "tag": input
      },
      loss_rate: loss_rate,
      results: [{
        item: output
      }]
    })
  }

  function assembly(output, input, program) {
    event.custom(
      {
        type: "pneumaticcraft:assembly_laser",
        input: pneumaticcraft_format(input),
        program: program,
        result: pneumaticcraft_format(output)
      }
    )
  }
  
  

  // Compressed Iron
  event.remove({id: "pneumaticcraft:explosion_crafting/compressed_iron_ingot"})
  event.remove({id: "pneumaticcraft:explosion_crafting/compressed_iron_block"})
  event.remove({id: "pneumaticcraft:pressure_chamber/compressed_iron_ingot"})
  event.remove({id: "pneumaticcraft:pressure_chamber/compressed_iron_block"})

  explosion_crafting("forge:ingots/steel", 20, "pneumaticcraft:ingot_iron_compressed")
  explosion_crafting("forge:storage_blocks/steel", 20, "pneumaticcraft:compressed_iron_block")
  pressure_chamber(event, "pneumaticcraft:ingot_iron_compressed", 2.0, ["#forge:ingots/steel"])
  pressure_chamber(event, "pneumaticcraft:compressed_iron_block", 2.0, ["#forge:storage_blocks/steel"])

  // Remove duplicate fluids
  event.remove({id: 'pneumaticcraft:fluid_mixer/biodiesel'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_sugar'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_poisonous_potato'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_potato'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_sweet_berries'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_apple'})
  event.remove({id: 'pneumaticcraft:thermo_plant/ethanol_from_melon'})
  event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_crops'})
  event.remove({id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds'})


  // Amadron
  event.remove({id: 'pneumaticcraft:amadron/emerald_to_oil'})
  event.remove({id: 'pneumaticcraft:amadron/emerald_to_lubricant'})
  event.remove({id: 'pneumaticcraft:amadron/oil_to_emerald'})
  event.remove({id: 'pneumaticcraft:amadron/gasoline_to_emerald'})
  event.remove({id: 'pneumaticcraft:amadron/lpg_to_emerald'})
  event.remove({id: 'pneumaticcraft:amadron/kerosene_to_emerald'})
  event.remove({id: 'pneumaticcraft:amadron/diesel_to_emerald'})
  
  // Remove default PCB recipes
  event.remove({id: 'pncepcb:pressure_chamber/high_temp_empty_pcb'})
  event.remove({id: 'pncepcb:pressure_chamber/high_power_empty_pcb'})
  
  event.remove({id: 'pncepcb:pressure_chamber/radiation_hardened_empty_pcb'})
  event.remove({id: 'pncepcb:pressure_chamber/bio_compatible_empty_pcb'})
  event.remove({id: 'pncepcb:pressure_chamber/nano_empty_pcb'})
  event.remove({id: 'pncepcb:pressure_chamber/quantum_empty_pcb'})
  event.remove({id: 'pncepcb:pressure_chamber/waterproof_empty_pcb'})
  event.remove({id: 'pncepcb:pressure_chamber/flexible_empty_pcb'})
  event.remove({id: 'pncepcb:pressure_chamber/primitive_empty_pcb'})
  event.remove({id: 'pncepcb:pressure_chamber/primitive_substrate'})
  event.remove({id: 'pncepcb:pressure_chamber/flexible_substrate'})
  event.remove({id: 'pncepcb:pressure_chamber/microcontroller_empty_pcb'})
  event.remove({id: 'pncepcb:pressure_chamber/crystal_clear_empty_pcb'})

  // High Temperature PCB
  pressure_chamber(event, "pncepcb:high_temp_empty_pcb", 2.5, ['2x thermal:cured_rubber', '3x immersiveengineering:ingot_hop_graphite', '#forge:plates/copper', 'pneumaticcraft:unassembled_pcb'])
  assembly("pncepcb:high_temp_unassembled_pcb", 'pncepcb:high_temp_empty_pcb', 'laser')

  // High Power PCB
  pressure_chamber(event, "pncepcb:high_power_empty_pcb", 3.5, ['3x mekanism:alloy_infused', '2x mekanism:basic_control_circuit', '#forge:plates/enderium', 'pncepcb:high_temp_unassembled_pcb'])
  assembly("pncepcb:high_power_unassembled_pcb", 'pncepcb:high_power_empty_pcb', 'laser')
  event.remove({id: 'pncepcb:crafting_table/high_power_finished_pcb'})
  event.custom(
    {
      "type": "actuallyadditions:empowering",
      "base": {
        "item": "pncepcb:high_power_unassembled_pcb"
      },
      "color": 0,
      "energy": 40000,
      "modifiers": [
        {
          "item": "pneumaticcraft:transistor"
        },
        {
          "item": "pneumaticcraft:capacitor"
        },
        {
          "item": "pneumaticcraft:transistor"
        },
        {
          "item": "pneumaticcraft:capacitor"
        }
      ],
      "result": {
        "item": "pncepcb:high_power_finished_pcb"
      },
      "time": 30
    }
  )

  // Crystal Clear PCB
  assembly("pncepcb:crystal_clear_unassembled_pcb", 'pncepcb:crystal_clear_empty_pcb', 'laser')
  event.remove({id: 'pncepcb:crafting_table/crystal_clear_finished_pcb'})
  event.custom({
    "type": "ae2:inscriber",
    "ingredients": {
      "bottom": {
        "item": "ae2:formation_core"
      },
      "middle": {
        "item": "pncepcb:crystal_clear_unassembled_pcb"
      },
      "top": {
        "item": "ae2:annihilation_core"
      }
    },
    "mode": "press",
    "result": {
      "item": "pncepcb:crystal_clear_finished_pcb"
    }
  })

  // Radiation Hardened PCB
  assembly("pncepcb:radiation_hardened_unassembled_pcb", 'pncepcb:radiation_hardened_empty_pcb', 'laser')
  event.remove({id: 'pncepcb:crafting_table/radiation_hardened_finished_pcb'})
  event.custom(
    {
      "type": "actuallyadditions:empowering",
      "base": {
        "item": "pncepcb:radiation_hardened_unassembled_pcb"
      },
      "color": 0,
      "energy": 160000,
      "modifiers": [
        {
          "item": "pneumaticcraft:transistor"
        },
        {
          "item": "pneumaticcraft:capacitor"
        },
        {
          "item": "pneumaticcraft:transistor"
        },
        {
          "item": "pneumaticcraft:capacitor"
        }
      ],
      "result": {
        "item": "pncepcb:radiation_hardened_finished_pcb"
      },
      "time": 30
    }
  )

  // Hide diesel recipes
  event.remove({id: 'pneumaticcraft:thermo_plant/plastic_from_lpg'})
  event.remove({id: 'pneumaticcraft:thermo_plant/lubricant_from_diesel'})
  event.remove({id: 'pneumaticcraft:thermo_plant/lpg'})
  event.remove({id: 'pneumaticcraft:thermo_plant/gasoline'})
  event.remove({id: 'pneumaticcraft:thermo_plant/kerosene'})

  // Fix speed upgrade recipe
  event.remove({id: 'pneumaticcraft:speed_upgrade'})
  event.shaped(
    'pneumaticcraft:speed_upgrade',
    [
      "PSP",
      "SLS",
      "PSP"
    ],
    {
      L: 'pneumaticcraft:lubricant_bucket',
      P: '#pneumaticcraft:upgrade_components',
      S: 'minecraft:sugar'
    }
  )
})