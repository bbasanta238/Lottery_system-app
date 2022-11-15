class ApplicationController < ActionController::Base
    before_action :setGonData
    before_action :configure_permitted_parameters, if: :devise_controller?
    
    def setGonData
      gon.contractAddress= "0x3C3C693eFd433dbaa4ebd4395aBFdf9EA8f630CA"
    end

  protected
  
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email,:wallet_address])
  end
end
