// Add seed tier to AgriCraft seed tooltips
ItemEvents.tooltip(event => {
    const cropRegistry = Java.loadClass("com.blakebr0.mysticalagriculture.api.MysticalAgricultureAPI").getCropRegistry()

    event.addAdvanced(Item.of('agricraft:seed'), (item, advanced, text) => {
        if (!item?.nbt?.genes?.species?.dom) 
            return

        let namespace = item.nbt.genes.species.dom.split(':')[0]
        let crop = cropRegistry.getCropByName(item.nbt.genes.species.dom.split(':')[1])

        if (namespace == "mysticalagriculture") {
            let tierName = String(crop.getTier().getName())
            let capitalizedTierName = tierName.charAt(0).toUpperCase() + tierName.slice(1)

            text.add(1, [
                Text.translate("tooltip.mysticalagriculture.tier", 
                    Text.of(capitalizedTierName)
                        .color(crop.getTier().getTextColor())).gray()
            ])
        }
    })

    event.add(/matc:.*_crystal/, Text.gray('Infinite uses'))
})