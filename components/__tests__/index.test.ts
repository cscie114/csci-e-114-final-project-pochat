import { it, expect, describe } from "vitest";
import { mount } from '@vue/test-utils';

import HelloWorld from '../../components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('Component renders hello world', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).toContain('Hello world')
  })
})