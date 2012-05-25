::Refinery::Application.routes.draw do
  resources :event_calendars, :only => [:index] do
   collection do
     post :get_events
   end
  end

  scope(:path => 'refinery', :as => 'admin', :module => 'admin') do
    resources :event_calendars, :except => :show do
      collection do
        post :update_positions
      end
    end
  end
end
