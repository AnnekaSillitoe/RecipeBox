import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test.skip("App renders without crashing", () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
