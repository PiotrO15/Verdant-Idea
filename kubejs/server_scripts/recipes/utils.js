function format_item(item) {
  let count = 1
    if (item.match(/^(\d+)x /)) {
      count = parseInt(item.match(/^(\d+)x /)[1])
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

    if (count > 1) {
      item['count'] = count
    }

    return item
}