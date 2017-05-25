class CreateSenatorsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :senators_tables do |t|
      t.integer :user_id, null: false
      t.integer :official_member_id, null: false
      t.string :state_abbrev, null: false
    end
  end
end
