import React from "react";
import { shallow } from "enzyme";
import InputField from "../Inputs/InputField";

const mockEvent = jest.fn();
const props = {
  onChange: mockEvent,
  value: "A New Recipe",
  id: "recipe"
};

test("InputField renders correctly", () => {
  const input = shallow(<InputField {...props} />);

  expect(input).toMatchSnapshot();
});

describe("Props are displayed when passed to InputField", () => {
  test("A placeholder is displayed", () => {
    const input = shallow(<InputField {...props} placeholder="This is placeholder text"/>);

    expect(input.props().placeholder).toBe("This is placeholder text");
  });

  test("An id prop is available", () => {
    const input = shallow(<InputField {...props} id="new id"/>);

    expect(input.props().id).toBe("new id");
  });

  test("An class prop is included", () => {
    const input = shallow(<InputField {...props} inputClasses="blue"/>);

    expect(input.props().className).toEqual(expect.stringContaining("blue"));
  });
});

test("onChange has been called", () => {
    const input = shallow(<InputField {...props}/>);

    expect(input.props().onChange).not.toHaveBeenCalled();
    input.find('input').simulate('change');
    expect(input.props().onChange).toHaveBeenCalled();
});
