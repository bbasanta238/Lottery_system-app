class AddAttributeToDevise < ActiveRecord::Migration[7.0]
  def change
    add_column :users , :wallet_address , :string 
  end
end
