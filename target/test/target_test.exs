defmodule TargetTest do
  use ExUnit.Case
  doctest Target

  test "greets the world" do
    assert Target.hello() == :world
  end
end
