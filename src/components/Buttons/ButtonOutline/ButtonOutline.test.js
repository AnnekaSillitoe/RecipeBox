import React from "react";
import { shallow } from "enzyme";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

const mockEvent = jest.fn();
const props = {
  onClick: mockEvent,
  buttonText: "Recipes"
};
test("ButtonPrimary renders correctly", () => {
  const button = shallow(<ButtonOutline {...props} />);

  expect(button).toMatchSnapshot();
});

test("When clicking the button, it triggers the onClick", () => {
  const button = shallow(<ButtonOutline {...props} />);

  button.simulate("click");

  expect(mockEvent.mock.calls.length).toEqual(1);
});

test("Renders text passed through buttonText prop", () => {
  const button = shallow(<ButtonOutline {...props} />);
  expect(button.text()).toBe("Recipes");
});

test("handles classNames passed in through props", () => {
  const button = shallow(<ButtonOutline {...props} buttonClasses="blue" />);
  expect(button.props().className).toEqual(expect.stringContaining("blue"));
});
