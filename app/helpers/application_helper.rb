module ApplicationHelper
  def generate_session_id
    SecureRandom.hex(16)
  end
end
