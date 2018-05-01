import React from "react";
import { shallow } from "enzyme";
import setupTests from "./../setupTests";
import tempPolyfills from "./../tempPolyfills";
import App from "./App";

describe("App", () => {

  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initilizes the `state` as a empty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking the `Add Gift` button", () => {

    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts : [] });
    });

    it("adds a new gift to `state`", () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it("adds a new gift to the rendered list", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });

    it("creates a Gift component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

  });

});
