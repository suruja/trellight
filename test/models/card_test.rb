require 'test_helper'

class CardTest < ActiveSupport::TestCase
  test "card move to beginning of same column" do
    cards(:echo).move(new_column: columns(:two), new_position: 0)

    assert_equal([cards(:echo), cards(:charlie), cards(:delta)], columns(:two).cards.to_a)
    assert_equal([0, 1, 2], columns(:two).cards.pluck(:position))
  end

  test "card move to end of same column" do
    cards(:charlie).move(new_column: columns(:two), new_position: 2)

    assert_equal([cards(:delta), cards(:echo), cards(:charlie)], columns(:two).cards.to_a)
    assert_equal([0, 1, 2], columns(:two).cards.pluck(:position))
  end

  test "card move to middle of same column" do
    cards(:charlie).move(new_column: columns(:two), new_position: 1)

    assert_equal([cards(:delta), cards(:charlie), cards(:echo)], columns(:two).cards.to_a)
    assert_equal([0, 1, 2], columns(:two).cards.pluck(:position))
  end

  test "card move to beginning of another column" do
    cards(:alpha).move(new_column: columns(:two), new_position: 0)

    assert_equal([cards(:bravo)], columns(:one).cards.to_a)
    assert_equal([0], columns(:one).cards.pluck(:position))

    assert_equal([cards(:alpha), cards(:charlie), cards(:delta), cards(:echo)], columns(:two).cards.to_a)
    assert_equal([0, 1, 2, 3], columns(:two).cards.pluck(:position))
  end

  test "card move to end of another column" do
    cards(:alpha).move(new_column: columns(:two), new_position: 3)

    assert_equal([cards(:bravo)], columns(:one).cards.to_a)
    assert_equal([0], columns(:one).cards.pluck(:position))

    assert_equal([cards(:charlie), cards(:delta), cards(:echo), cards(:alpha)], columns(:two).cards.to_a)
    assert_equal([0, 1, 2, 3], columns(:two).cards.pluck(:position))
  end

  test "card move to middle of another column" do
    cards(:alpha).move(new_column: columns(:two), new_position: 2)

    assert_equal([cards(:bravo)], columns(:one).cards.to_a)
    assert_equal([0], columns(:one).cards.pluck(:position))

    assert_equal([cards(:charlie), cards(:delta), cards(:alpha), cards(:echo)], columns(:two).cards.to_a)
    assert_equal([0, 1, 2, 3], columns(:two).cards.pluck(:position))
  end
end
