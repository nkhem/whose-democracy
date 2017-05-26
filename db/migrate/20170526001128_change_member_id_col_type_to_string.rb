class ChangeMemberIdColTypeToString < ActiveRecord::Migration[5.0]
  def change
    change_column :reps, :official_member_id, :string
  end
end
