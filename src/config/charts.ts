import echarts from 'echarts'

export const defaultEchartStyle: React.CSSProperties = {
  width: 1000,
  height: 400,
  background: 'white',
  padding: 10,
  boxSizing: 'border-box',
}

export const defaultSeries = (color: string, secondColor = '#ffe') => ({
  type: 'line',
  itemStyle: {
    color,
  },
  lineStyle: {
    color,
    width: 1,
  },
  areaStyle: getAreaStyle(color, secondColor),
})

export const getAreaStyle = (firstColor: string, secondColor: string) => ({
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: firstColor,
    },
    {
      offset: 1,
      color: secondColor,
    },
  ]),
})
