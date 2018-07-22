import React from "react";
import { shallow } from "enzyme";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const mockEvent = jest.fn();
const props = {
  onClick: mockEvent,
  buttonText: "Recipes"
};

test("ButtonPrimary renders correctly", () => {
  const button = shallow(<ButtonPrimary {...props} />);

  expect(button).toMatchSnapshot();
});

test("When clicking the button, it triggers the onClick", () => {
  const button = shallow(<ButtonPrimary {...props}  />);

  button.simulate("click");

  expect(mockEvent.mock.calls.length).toEqual(1);
});


it("renders text passed through text prop", () => {
  const button = shallow(<ButtonPrimary {...props}  />);
  expect(button.text()).toBe("Recipes");
});

test("handles classNames passed in through props", () => {
  const button = shallow(<ButtonPrimary {...props} buttonClasses="blue" />);
  expect(button.props().className).toEqual(expect.stringContaining("blue"));
});
