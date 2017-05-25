class MergeSenatorAndHouseRepTables < ActiveRecord::Migration[5.0]
  def change
    drop_table :house_reps
    drop_table :users_house_reps

    rename_table :senators, :reps
    rename_table :users_senators, :users_reps
  end
end
