import React from 'react'
import { Radio } from 'antd'
import { RadioProps } from 'antd/lib/radio'

export const dimensionRadioOptions = [
  { label: '按国家查看', value: 0 },
  { label: '按大洲查看', value: 1 },
]

interface DimensionRadioProps extends RadioProps {}

const DimensionRadio = ({ ...props }: DimensionRadioProps) => {
  return (
    <Radio.Group
      options={dimensionRadioOptions}
      defaultValue={dimensionRadioOptions[0].value}
      size="large"
      optionType="button"
      {...props}
    />
  )
}

export default DimensionRadio
