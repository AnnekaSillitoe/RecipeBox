import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

test("Header renders correctly", () => {
  const header = shallow(<Header />);
  expect(header).toMatchSnapshot();
});
