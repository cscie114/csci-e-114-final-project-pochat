// This test ensures the Navbar's title remains unchanged. 

import { it, expect, describe } from "vitest";
import { mount } from '@vue/test-utils';

import NavBar from "../NavBar.vue";

describe('NavBar', () => {
  it('Component renders the correct header', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.text()).toEqual("Mario's Youtube")
  })
})