import React from "react";
import { shallow } from "enzyme";
import setupTests from "./../setupTests";
import tempPolyfills from "./../tempPolyfills";

import App from "./App";

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initilizes the 'state' as a empty list of gifts", () => {
  expect(app.state().gifts).toEqual([]);
});

it("adds a new gift to 'state' when click 'Add Gift' button", () => {
  app.find(".btn-add").simulate("click");
  expect(app.state().gifts).toEqual([{ id: 1 }]);
});
