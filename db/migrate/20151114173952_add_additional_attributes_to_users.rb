class AddAdditionalAttributesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :bio, :text
    add_column :users, :age, :integer
    add_column :users, :gender, :string
    add_column :users, :blog, :string
    add_column :users, :dob, :string
    add_column :users, :website, :string
  end
end
