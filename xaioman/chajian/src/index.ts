// expire 过期时间   permanet永久不过期


import { StorageClass, Key, Expire, Data, Result } from './type'
import { Dictionaries } from './enum'

// 进行类型约束 
export class Storage implements StorageClass {

  set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    const data = {
      value: value,
      [Dictionaries.expire]: expire //存放过期时间

    }
    console.log('设置成功');
    localStorage.setItem(key, JSON.stringify(data))
  }


  get<T>(key: Key): Result<T | null> {
    const res = localStorage.getItem(key)
    if (res) {
      const data: Data<T> = JSON.parse(res)
      const now = new Date().getTime();

      // 如果设置了过期时间，并且设置的时间小于现在的时间，表示已经过期了
      if (typeof data.__expire__ == 'number' && data.__expire__ < now) {
        this.remove(key)
        return {
          message: `您的${key}已经过期`,
          value: null,
        }
      } else {
        return {
          message: '成功',
          value: data.value
        }
      }
    } else {
      return {
        message: 'error',
        value: null,
      }
    }
  }


  remove(key: Key) {
    localStorage.removeItem(key)
  }

  clear() {// 清空
    localStorage.clear();
  }

}