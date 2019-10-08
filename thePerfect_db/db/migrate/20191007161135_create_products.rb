class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :picture
      t.string :price
      t.string :color

      t.timestamps
    end
  end
end
