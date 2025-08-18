ServerEvents.recipes(event => {
  // Remove sawdust paper recipe (we have a better one)
  event.remove({id: 'mekanism:paper'})

  // Replace steel casing recipe
  event.remove({id: 'mekanism:steel_casing'})
  event.shaped(
    'mekanism:steel_casing',
    [
      'SCS',
      'GPG',
      'SCS'
    ],
    {
      C: 'mekanism:basic_control_circuit',
      G: '#forge:glass/silica',
      P: 'pncepcb:high_power_finished_pcb',
      S: '#forge:plates/steel'
    }
  )

  // Replace glowstone with lumium in refined glowstone recipe
  event.remove({id: 'mekanism:processing/refined_glowstone/ingot/from_dust'})
  event.custom({
    "type": "mekanism:compressing",
    "chemicalInput": {
      "amount": 1,
      "gas": "mekanism:osmium"
    },
    "itemInput": {
      "ingredient": {
        "item": "thermal:lumium_dust"
      }
    },
    "output": {
      "item": "mekanism:ingot_refined_glowstone"
    }
  })

  // Simplify configurator recipe
  event.remove({id: 'mekanism:configurator'})
  event.shaped(
    'mekanism:configurator',
    [
      ' L ',
      ' T ',
      ' S '
    ],
    {
      L: 'minecraft:lapis_lazuli',
      T: '#forge:ingots/signalum',
      S: 'minecraft:stick'
    }
  )

  // Rework metallurgic infuser recipe
  event.remove({id: 'mekanism:metallurgic_infuser'})
  event.shaped(
    'mekanism:metallurgic_infuser',
    [
      'POP',
      'RCR',
      'POP'
    ],
    {
      C: 'thermal:upgrade_augment_3',
      O: 'mekanism:ingot_osmium',
      P: '#forge:plates/steel',
      R: 'thermal:rf_coil'
    }
  )

  // Update Antimatter pellet cost
  event.remove({id: 'mekanism:processing/lategame/antimatter/from_pellet'})
  event.custom({
    "type": "mekanism:oxidizing",
    "input": {
      "ingredient": {
        "tag": "forge:pellets/antimatter"
      }
    },
    "output": {
      "amount": 100,
      "gas": "mekanism:antimatter"
    }
  })

  event.remove({id: 'mekanism:processing/lategame/antimatter_pellet/from_gas'})
  event.custom({
    "type": "mekanism:crystallizing",
    "chemicalType": "gas",
    "input": {
      "amount": 100,
      "gas": "mekanism:antimatter"
    },
    "output": {
      "item": "mekanism:pellet_antimatter"
    }
  })

  event.remove('mekanism:transmitter/universal_cable/basic')
  event.shaped(
    '8x mekanism:basic_universal_cable',
    [
      ' P ',
      'RXR',
      ' P '
    ],
    {
      P: '#forge:plates/signalum',
      R: '#forge:rods/aluminum',
      X: 'minecraft:redstone'
    }
  )

  event.remove('mekanism:transmitter/mechanical_pipe/basic')
  event.shaped(
    '8x mekanism:basic_mechanical_pipe',
    [
      ' P ',
      'RXR',
      ' P '
    ],
    {
      P: '#forge:plates/signalum',
      R: '#forge:rods/aluminum',
      X: 'minecraft:bucket'
    }
  )

  event.remove('mekanism:transmitter/pressurized_tube/basic')
  event.shaped(
    '8x mekanism:basic_pressurized_tube',
    [
      ' P ',
      'RXR',
      ' P '
    ],
    {
      P: '#forge:plates/signalum',
      R: '#forge:rods/aluminum',
      X: '#forge:glass'
    }
  )

  event.remove('mekanism:transmitter/logistical_transporter/basic')
  event.shaped(
    '8x mekanism:basic_logistical_transporter',
    [
      ' P ',
      'RXR',
      ' P '
    ],
    {
      P: '#forge:plates/signalum',
      R: '#forge:rods/aluminum',
      X: 'minecraft:iron_ingot'
    }
  )

  event.remove('mekanism:transmitter/thermodynamic_conductor/basic')
  event.shaped(
    '8x mekanism:basic_thermodynamic_conductor',
    [
      ' P ',
      'RXR',
      ' P '
    ],
    {
      P: '#forge:plates/signalum',
      R: '#forge:rods/aluminum',
      X: 'minecraft:copper_ingot'
    }
  )

  // HDPE Processing Chain
  event.custom({
    "type": "pneumaticcraft:fluid_mixer",
    "fluid_output": {
      "amount": 50,
      "fluid": "kubejs:empowered_biodiesel"
    },
    "input1": {
      "type": "pneumaticcraft:fluid",
      "amount": 30,
      "tag": "forge:biodiesel"
    },
    "input2": {
      "type": "pneumaticcraft:fluid",
      "amount": 20,
      "fluid": "actuallyadditions:empowered_oil"
    },
    "pressure": 4.0,
    "time": 600
  })

  event.custom({
    "type": "pneumaticcraft:thermo_plant",
    "exothermic": false,
    "fluid_input": {
      "type": "pneumaticcraft:fluid",
      "amount": 200,
      "fluid": "kubejs:empowered_biodiesel"
    },
    "fluid_output": {
      "amount": 1000,
      "fluid": "kubejs:molten_dense_plastic"
    },
    "item_input": {
      "item": "mekanism:enriched_carbon"
    },
    "temperature": {
      "min_temp": 373
    }
  })

  event.remove({id: 'mekanism:reaction/substrate/ethene_oxygen'})
  event.custom({
    "type": "mekanism:reaction",
    "duration": 60,
    "energyRequired": 1000,
    "fluidInput": {
      "amount": 250,
      "fluid": "kubejs:molten_dense_plastic"
    },
    "gasInput": {
      "amount": 50,
      "gas": "mekanism:ethene"
    },
    "itemInput": {
      "ingredient": {
        "item": "mekanism:substrate"
      }
    },
    "itemOutput": {
      "item": "mekanism:hdpe_pellet"
    }
  })
})