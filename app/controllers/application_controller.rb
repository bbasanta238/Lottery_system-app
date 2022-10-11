class ApplicationController < ActionController::Base
    before_action :setGonData
    
    def setGonData
        gon.contractAddress= "0x86215A622796C8d93fff2795f3b43E50d902951C"
    end
end
