import { TablePaginationConfig } from 'antd/lib/table';
import { PaginationProps } from 'antd/lib/pagination';

export const PAGE_LIMIT = 10;

export const PAGINATION: Partial<PaginationProps> = {
  pageSize: PAGE_LIMIT,
  showSizeChanger: false,
  hideOnSinglePage: true,
};

export const TABLE_PAGINATION: Partial<TablePaginationConfig> = {
  ...PAGINATION,
  position: ['bottomLeft'],
};