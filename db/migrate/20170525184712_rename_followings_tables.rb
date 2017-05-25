class RenameFollowingsTables < ActiveRecord::Migration[5.0]
  def change
    rename_table :senator_followings, :users_senators
    rename_table :house_rep_followings, :users_house_reps
    rename_table :bill_followings, :users_bills
  end
end
