import { Dictionaries } from "../enum"


export interface StorageClass {
  get: <T> (key: Key) => void
  set: <T>(key: Key, value: T, expire: Expire) => void
  remove: (key: Key) => void
  clear: () => void
}

export interface Data<T> {
  value: T,
  [Dictionaries.expire]: Expire
}

// 定义一下返回的数据格式
export interface Result<T> {
  message: string,
  value: T | null

}

export type Key = string

export type Expire = Dictionaries.permanent | number  // 可以是永久的字符串，或者是时间戳