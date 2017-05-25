class CreateFollowingsJoinsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :senator_followings do |t|
      t.integer :user_id, null: false
      t.integer :senator_id, null: false
    end

    create_table :house_rep_followings do |t|
      t.integer :user_id, null: false
      t.integer :house_rep_id, null: false
    end

    create_table :bill_followings do |t|
      t.integer :user_id, null: false
      t.integer :bill_id, null: false
    end
  end
end
