module FontawesomeHelper
  def fa(name)
    return "<i class='fa fa-#{name}' aria-hidden='true'></i>"
  end
end
