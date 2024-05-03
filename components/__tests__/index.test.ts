// This test ensures the home page renders the RandomYT component. Otherwise, the page is blank.

import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IndexPage from '@/pages/index.vue'
import RandomYT from '~/components/youtube-channels/RandomYT.vue'

describe('Index Page', () => {
  test('renders RandomYT component', async () => {
    const wrapper = await mount(IndexPage)

    // Ensure that RandomYT component is rendered
    expect(wrapper.findComponent(RandomYT).exists()).toBe(true)
  })
})
