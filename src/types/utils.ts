export interface UpdateItem {
  path: string;
  value: any;
}

/**
 * reducer 自定义payload类型
 */
export type Payload = UpdateItem | Array<UpdateItem>;