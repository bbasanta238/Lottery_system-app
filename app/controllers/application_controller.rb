class ApplicationController < ActionController::Base
    before_action :setGonData
    
    def setGonData
        gon.contractAddress= "0xAd346f3129CbD9034480b5319Cf272D06D8b2675"
    end
end
