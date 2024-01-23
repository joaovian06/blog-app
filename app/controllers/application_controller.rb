class ApplicationController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken

    before_action :ensure_json_request
    before_action :configure_permitted_parameters, if: :devise_controller?
    
    protected
    
        def configure_permitted_parameters
            devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
        end

        def ensure_json_request
            return if request.headers["Accept"] =~ /application\/json/
            render nothing: true, status: :not_acceptable
        end
end
