class ShoppingList
  attr_accessor :items

  def initialize()
    @items = []
  end

  def add_item(item)
    @items << item
  end

  def display_items
    @items.each_with_index do |item, index|
      puts "#{index+1}. #{item}"
    end
  end
end

list = ShoppingList.new
list.add_item 'Milk'
list.add_item 'Orange juice'
list.add_item 'Cheese'
list.add_item 'Peanuts'
list.add_item 'Half a dozen onions'

list.display_items