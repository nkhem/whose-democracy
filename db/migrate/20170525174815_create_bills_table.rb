class CreateBillsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :bills_tables do |t|
      t.integer :user_id, null: false
      t.string :bill_slug, null: false
      t.integer :congress, null: false
    end
  end
end
