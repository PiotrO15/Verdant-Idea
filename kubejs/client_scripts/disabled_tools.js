ItemEvents.tooltip(event => {
    global.disabled_tools.forEach(item => {
        event.addAdvanced(item, (item, advanced, text) => {
            text.add(1, Text.red("This item breaks instantly! Only use in crafting."))
        })
    })
})