var Dictionaries;
(function (Dictionaries) {
    Dictionaries["permanent"] = "permanent";
    Dictionaries["expire"] = "__expire__";
})(Dictionaries || (Dictionaries = {}));

// expire 过期时间   permanet永久不过期
// 进行类型约束 
var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.prototype.set = function (key, value, expire) {
        var _a;
        if (expire === void 0) { expire = Dictionaries.permanent; }
        var data = (_a = {
                value: value
            },
            _a[Dictionaries.expire] = expire //存放过期时间
        ,
            _a);
        console.log('设置成功');
        localStorage.setItem(key, JSON.stringify(data));
    };
    Storage.prototype.get = function (key) {
        var res = localStorage.getItem(key);
        if (res) {
            var data = JSON.parse(res);
            var now = new Date().getTime();
            // 如果设置了过期时间，并且设置的时间小于现在的时间，表示已经过期了
            if (typeof data.__expire__ == 'number' && data.__expire__ < now) {
                this.remove(key);
                return {
                    message: "\u60A8\u7684".concat(key, "\u5DF2\u7ECF\u8FC7\u671F"),
                    value: null
                };
            }
            else {
                return {
                    message: '成功',
                    value: data.value
                };
            }
        }
        else {
            return {
                message: 'error',
                value: null
            };
        }
    };
    Storage.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    Storage.prototype.clear = function () {
        localStorage.clear();
    };
    return Storage;
}());

export { Storage };
