StartupEvents.registry('fluid', event => {
  event.create('empowered_biodiesel')
    .thinTexture(0x743a34)
    .bucketColor(0x743a34)
    .displayName('Empowered Biodiesel')

  event.create('molten_dense_plastic')
    .thickTexture(0x777777)
    .bucketColor(0x777777)
    .displayName('Molten Dense Plastic')
  
  event.create('industrial_fertilizer_solution')
    .thinTexture(0xaa9c8d)
    .bucketColor(0xaa9c8d)
    .displayName('Industrial Fertilizer Solution')

  event.create('organic_fertilizer_solution')
    .thinTexture(0x228267)
    .bucketColor(0x228267)
    .displayName('Organic Fertilizer Solution')
})