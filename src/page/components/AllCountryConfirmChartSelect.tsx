import React, { useEffect, useState } from 'react'
import { Row, Select } from 'antd'
import useBaseQuery from 'src/components/useBaseQuery'
import { countryAnddContinent } from 'src/fetch'

const { Option } = Select
const selectStyle = { width: 120, marginRight: '20px' }

interface AllCountryConfirmChartSelectProps {
  onChange?: (val?: string) => void
}

const AllCountryConfirmChartSelect = ({
  onChange,
}: AllCountryConfirmChartSelectProps) => {
  const { data } = useBaseQuery('countryAnddContinent', countryAnddContinent)

  useEffect(() => {
    const countryDataTemp: OPUtils.Record = {}
    ;(Array.isArray(data) ? data : []).map(({ name, continent }: any) => {
      const key = continent || '其他'
      if (countryDataTemp[key]) {
        countryDataTemp[key].push(name)
      } else {
        countryDataTemp[key] = [name]
      }
    })
    setContinentData(Object.keys(countryDataTemp) || [])
    setCountryData(countryDataTemp)
    setCountries(countryDataTemp[Object.keys(countryDataTemp)[0]] || [])
    setContinent(Object.keys(countryDataTemp)[0])
    onSecondCountryChange(countryDataTemp[Object.keys(countryDataTemp)[0]]?.[0])
  }, [data])

  const [continentData, setContinentData] = useState<string[]>([])
  const [countryData, setCountryData] = useState<OPUtils.Record>({})
  const [countries, setCountries] = useState(
    countryData[continentData[0]] || [],
  )
  const [continent, setContinent] = useState(continentData[0] || '')
  const [secondCountry, setSecondCountry] = useState(
    countryData[continentData[0]]?.[0],
  )

  const handleContinentChange = (value: any) => {
    setCountries(countryData[value])
    setContinent(value)
    setSecondCountry(undefined)
  }

  const onSecondCountryChange = (value: any) => {
    setSecondCountry(value)
    onChange && onChange(value)
  }

  console.log(continentData)
  console.log(countryData)
  console.log(countries)
  console.log(secondCountry)

  return (
    <Row style={{ padding: '0 20px' }} align="middle">
      <Select
        showSearch
        style={selectStyle}
        value={continent}
        onChange={handleContinentChange}
      >
        {continentData.map((continent) => (
          <Option value={continent} key={continent}>
            {continent}
          </Option>
        ))}
      </Select>
      <Select
        showSearch
        style={selectStyle}
        value={secondCountry}
        onChange={onSecondCountryChange}
      >
        {countries.map((country: any) => (
          <Option value={country} key={country}>
            {country}
          </Option>
        ))}
      </Select>
    </Row>
  )
}

export default AllCountryConfirmChartSelect
