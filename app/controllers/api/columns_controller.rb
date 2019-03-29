class Api::ColumnsController < Api::BaseController
  def index
    @columns = Column.all
    render json: ColumnSerializer.new(@columns).serialized_json
  end
end
