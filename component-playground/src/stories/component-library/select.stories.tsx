import * as React from "react"
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../../../components/component-library/Select/Select';

const meta: Meta<typeof Select> = {
  title: "Component Library/Select",
  component: Select,
  argTypes: {
    size: {
      options: ["default", "small"],
      control: { type: 'inline-radio' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    size: "default",
    disabled: false
  }
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Main: Story = {
  render: (args) => (
    <div className="w-1/4">
      <Select {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select occurrence" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="weekly">Weekly</Select.Item>
          <Select.Item value="monthly">Monthly</Select.Item>
          <Select.Item value="yearly">Yearly</Select.Item>
        </Select.Content>
      </Select>
    </div>
  )
};

export const Grouped: Story = {
  render: (args) => (
    <div className="w-1/4">
      <Select  {...args}>
        <Select.Trigger>
          <Select.Value placeholder="Select" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruit</Select.Label>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="strawberry">Strawberry</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Vegetables</Select.Label>
            <Select.Item value="pepper">Pepper</Select.Item>
            <Select.Item value="cucumber">Cucumber</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  )
}

export const WithScrollIndicators: Story = {
  render: (args) => (
    <div className="w-1/4">
    <Select  {...args}>
      <Select.Trigger>
        <Select.Value placeholder="Select a timezone" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>North America</Select.Label>
          <Select.Item value="est">Eastern Standard Time (EST)</Select.Item>
          <Select.Item value="cst">Central Standard Time (CST)</Select.Item>
          <Select.Item value="mst">Mountain Standard Time (MST)</Select.Item>
          <Select.Item value="pst">Pacific Standard Time (PST)</Select.Item>
          <Select.Item value="akst">Alaska Standard Time (AKST)</Select.Item>
          <Select.Item value="hst">Hawaii Standard Time (HST)</Select.Item>
        </Select.Group>
        <Select.Group>
          <Select.Label>Europe & Africa</Select.Label>
          <Select.Item value="gmt">Greenwich Mean Time (GMT)</Select.Item>
          <Select.Item value="cet">Central European Time (CET)</Select.Item>
          <Select.Item value="eet">Eastern European Time (EET)</Select.Item>
          <Select.Item value="west">
            Western European Summer Time (WEST)
          </Select.Item>
          <Select.Item value="cat">Central Africa Time (CAT)</Select.Item>
          <Select.Item value="eat">East Africa Time (EAT)</Select.Item>
        </Select.Group>
        <Select.Group>
          <Select.Label>Asia</Select.Label>
          <Select.Item value="msk">Moscow Time (MSK)</Select.Item>
          <Select.Item value="ist">India Standard Time (IST)</Select.Item>
          <Select.Item value="cst_china">China Standard Time (CST)</Select.Item>
          <Select.Item value="jst">Japan Standard Time (JST)</Select.Item>
          <Select.Item value="kst">Korea Standard Time (KST)</Select.Item>
          <Select.Item value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </Select.Item>
        </Select.Group>
        <Select.Group>
          <Select.Label>Australia & Pacific</Select.Label>
          <Select.Item value="awst">
            Australian Western Standard Time (AWST)
          </Select.Item>
          <Select.Item value="acst">
            Australian Central Standard Time (ACST)
          </Select.Item>
          <Select.Item value="aest">
            Australian Eastern Standard Time (AEST)
          </Select.Item>
          <Select.Item value="nzst">New Zealand Standard Time (NZST)</Select.Item>
          <Select.Item value="fjt">Fiji Time (FJT)</Select.Item>
        </Select.Group>
        <Select.Group>
          <Select.Label>South America</Select.Label>
          <Select.Item value="art">Argentina Time (ART)</Select.Item>
          <Select.Item value="bot">Bolivia Time (BOT)</Select.Item>
          <Select.Item value="brt">Brasilia Time (BRT)</Select.Item>
          <Select.Item value="clt">Chile Standard Time (CLT)</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
    </div>
  )
}