class CreateHouseRepsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :house_reps_tables do |t|
      t.integer :user_id, null: false
      t.integer :official_member_id, null: false
      t.string :state_abbrev, null: false
      t.integer :district, null: false
    end
  end
end
