class ApplicationController < ActionController::Base
    before_action :setGonData
    
    def setGonData
        gon.contractAddress= "0x3c277f12698d60f71cF74AFDDE0f4797dB6a2613"
    end
end
