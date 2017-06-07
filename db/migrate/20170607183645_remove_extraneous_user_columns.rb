class RemoveExtraneousUserColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :street_address
    remove_column :users, :city
    remove_column :users, :state_abbrev
    remove_column :users, :zip_code
    remove_column :users, :prefix
    remove_column :users, :phone_number
  end
end
