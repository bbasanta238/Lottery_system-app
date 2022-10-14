class ApplicationController < ActionController::Base
    before_action :setGonData
    
    def setGonData
        gon.contractAddress= "0x3C3C693eFd433dbaa4ebd4395aBFdf9EA8f630CA"
    end
end
