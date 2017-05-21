class RenameUsersStateColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :state, :state_abbrev
  end
end
