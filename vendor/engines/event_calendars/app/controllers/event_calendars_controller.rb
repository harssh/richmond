class EventCalendarsController < ApplicationController

  def index
    # you can use meta fields from your model instead (e.g. browser_title)
    # by swapping @page for @event_calendar in the line below:
    present(@page)
  end

protected

end
