class CreateBillsSenatorsHouseRepsTables < ActiveRecord::Migration[5.0]
  def change
    drop_table :bill_followings
    drop_table :bills_tables
    drop_table :house_rep_followings
    drop_table :house_reps_tables
    drop_table :senator_followings
    drop_table :senators_tables
    
    create_table :senators do |t|
      t.integer :user_id, null: false
      t.integer :official_member_id, null: false
    end

    create_table :house_reps do |t|
      t.integer :user_id, null: false
      t.integer :official_member_id, null: false
    end

    create_table :bills do |t|
      t.integer :user_id, null: false
      t.string :bill_slug, null: false
      t.integer :congress, null: false
    end

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
