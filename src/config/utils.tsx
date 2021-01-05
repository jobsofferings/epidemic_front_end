import { TablePaginationConfig } from 'antd/lib/table'
import { PaginationProps } from 'antd/lib/pagination'
import { PAGE_LIMIT } from './constants'

export const PAGINATION: Partial<PaginationProps> = {
  pageSize: PAGE_LIMIT,
  showSizeChanger: false,
  hideOnSinglePage: true,
}

export const TABLE_PAGINATION: Partial<TablePaginationConfig> = {
  ...PAGINATION,
  position: ['bottomLeft'],
}

export function dateFormat(date: Date, fmt: string) {
  let o: any = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  }
  let week: any = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d',
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    )
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? '/u661f/u671f'
          : '/u5468'
        : '') + week[date.getDay() + ''],
    )
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length),
      )
    }
  }
  return fmt
}

export const getPersistData = (key: string, needParse = false) => {
  try {
    const data = window.localStorage.getItem(key) || ''
    return needParse ? JSON.parse(data) : data
  } catch (error) {
    return null
  }
}
