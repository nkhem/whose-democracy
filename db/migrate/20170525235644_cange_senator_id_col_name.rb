class CangeSenatorIdColName < ActiveRecord::Migration[5.0]
  def change
    rename_column :users_reps, :senator_id, :rep_id
  end
end
