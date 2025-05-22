JEIAddedEvents.registerCategories((event) => {
    const guiHelper = event.data.jeiHelpers.guiHelper
    event.custom("wasteland:grow_from_compost", (category) => {
        category.title("Compost")
                .background(guiHelper.createBlankDrawable(120, 68))
                .icon(guiHelper.createDrawableItemStack(Item.of('wasteland:compost')))
                .isRecipeHandled((recipe) => {
                    return global["verifyRecipe"](category.jeiHelpers, recipe);
                })
                .handleLookup((builder, recipe, focuses) => {
                    global["handleLookup"](category.jeiHelpers, builder, recipe, focuses);
                })
                .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                    global["renderCompost"](category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY);
                })
    })
})

global["verifyRecipe"] = (jeiHelpers, recipe) => {
    if (!recipe) return false;
    if (!recipe.data) return false;

    return !!recipe.data.item;
}

global["handleLookup"] = (jeiHelpers, builder, recipe, focuses) => {
    builder.addSlot("INPUT", 27, 35).addItemStack(Item.of('minecraft:grass')).setSlotName("input")
    builder.addInvisibleIngredients("INPUT").addItemStack(Item.of('wasteland:compost'))
    builder.addSlot("OUTPUT", 76, 35).addItemStack(Item.of(recipe.data.item)).setSlotName("output")
}

global["renderCompost"] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
    guiGraphics.drawWordWrap(Client.font, Text.darkGray('Use compost to grow plants from grass.'), 10, 10, 120, 0);
    guiGraphics.blit("wasteland:textures/gui/compost_particles.png", 53, 36, 0, 0, 16, 16, 16, 16)
}

let compost_growable = [
    "minecraft:oak_sapling",
    "minecraft:spruce_sapling",
    "minecraft:birch_sapling",
    "minecraft:jungle_sapling",
    "minecraft:acacia_sapling",
    "minecraft:dark_oak_sapling",
    "minecraft:mangrove_propagule",
    "minecraft:cherry_sapling",
    "minecraft:fern",
    "minecraft:moss_carpet",
    "farmersdelight:sandy_shrub"
]

JEIAddedEvents.registerRecipes((event) => {
    compost_growable.forEach(block => {
        event.custom("wasteland:grow_from_compost").add({item: block})
    })
})
