import { TablePaginationConfig } from 'antd/lib/table'
import { PaginationProps } from 'antd/lib/pagination'
import { PAGE_LIMIT } from './constants'
import { message as MessageAntd } from 'antd'

export const PAGINATION: Partial<PaginationProps> = {
  pageSize: PAGE_LIMIT,
  showSizeChanger: false,
  hideOnSinglePage: true,
}

export const TABLE_PAGINATION: Partial<TablePaginationConfig> = {
  ...PAGINATION,
  position: ['bottomLeft'],
}

export const getMonthEng = (month: number) =>
  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][month - 1]

export const abstractFn = (res: string) => {
  if (!res) {
    return ''
  } else {
    var str = res
      .replace(/(\*\*|__)(.*?)(\*\*|__)/g, '') //全局匹配内粗体
      .replace(/\!\[[\s\S]*?\]\([\s\S]*?\)/g, '') //全局匹配图片
      .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, '') //全局匹配连接
      .replace(/<\/?.+?\/?>/g, '') //全局匹配内html标签
      .replace(/(\*)(.*?)(\*)/g, '') //全局匹配内联代码块
      .replace(/`{1,2}[^`](.*?)`{1,2}/g, '') //全局匹配内联代码块
      .replace(/```([\s\S]*?)```[\s]*/g, '') //全局匹配代码块
      .replace(/\~\~(.*?)\~\~/g, '') //全局匹配删除线
      .replace(/[\s]*[-\*\+]+(.*)/g, '') //全局匹配无序列表
      .replace(/[\s]*[0-9]+\.(.*)/g, '') //全局匹配有序列表
      .replace(/(#+)(.*)/g, '') //全局匹配标题
      .replace(/(>+)(.*)/g, '') //全局匹配摘要
      .replace(/\r\n/g, '') //全局匹配换行
      .replace(/\n/g, '') //全局匹配换行
      .replace(/\s/g, '') //全局匹配空字符;
      .replace(/&emsp;/g, '')
    return str.slice(0, 155)
  }
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

export const safeParse = (str: string) => {
  try {
    return JSON.parse(str)
  } catch (error) {
    return {}
  }
}

interface DefaultMessageProps {
  flag: boolean
  message: string
}

export const defaultSendMessage = ({ flag, message }: DefaultMessageProps) => {
  if (flag) {
    MessageAntd.success(message)
  } else {
    MessageAntd.error(message)
  }
}

export const formatDateToString = (date: Date) =>
  `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
