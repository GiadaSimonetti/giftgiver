import React from "react";
import { shallow } from "enzyme";
// import setupTests from "./../setupTests";
// import tempPolyfills from "./../tempPolyfills";
import Gift from "./Gift";

describe("Gift", () => {
  const gift = shallow(< Gift />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes a person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: '', present: ''});
  });
});
