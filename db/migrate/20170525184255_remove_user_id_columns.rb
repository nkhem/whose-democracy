class RemoveUserIdColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :senators, :user_id
    remove_column :house_reps, :user_id
    remove_column :bills, :user_id
  end
end
