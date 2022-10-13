class ApplicationController < ActionController::Base
    before_action :setGonData
    
    def setGonData
        gon.contractAddress= "0x72BA6FDDA56453ACbbf71D3E213F2F25b307FF16"
    end
end
