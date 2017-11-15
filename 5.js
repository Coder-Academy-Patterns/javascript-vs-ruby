class ShoppingList {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
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

list.displayItems()

/*

Challenges:
1. Add a `removeItem(item)` method
2. Add a `sortItems()` method to sort alphabetically

*/