import React from "react";
import renderer from "react-test-renderer";
import DragSortableView from "../DragSortableView";

test("renders correctly", () => {
  const tree = renderer.create(<DragSortableView />).toJSON();
  expect(tree).toMatchSnapshot();
});
