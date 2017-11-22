class ShoppingList {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  removeItem(item) {
    const index = this.items.indexOf(item)
    if (index === -1) {
      // `item` was not found
      return
    }

    this.items.splice(index, 1)
  }

  sortItems() {
    this.items.sort()
  }

  displayItems() {
    this.items.forEach((item, index) => {
      console.log(`${index+1}. ${item}`)
    })
  }
}

list = new ShoppingList
list.addItem('Milk')
list.addItem('Orange juice')
list.addItem('Cheese')
list.addItem('Peanuts')
list.addItem('Half a dozen onions')

list.sortItems()

list.displayItems()

/*

Challenges:
1. Add a `removeItem(item)` method
2. Add a `sortItems()` method to sort alphabetically

*/