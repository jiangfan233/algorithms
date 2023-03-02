/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start


class LRUCache {
    map: Map<number, number>;
    cap: number;
    
    constructor(capacity: number) {
        this.map = new Map();
        this.cap = capacity;
    }

    get(key: number): number {
        const value = this.map.get(key);
        if(value === undefined) return -1;
        
        // Map 对象保存键值对，并且能够记住键的原始插入顺序
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    put(key: number, value: number): void {
        
        if(this.map.size >= this.cap && !this.map.has(key)) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }
        this.map.delete(key);
        this.map.set(key, value);

    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end


var obj = new LRUCache(2)
obj.put(2,1);
// console.log(obj.get(2));
obj.put(3,2);
obj.put(4,4);
obj.put(4,5);
obj.put(5,55);
console.log(obj.get(2));
console.log(obj);



// obj.put(3,3);
// console.log(obj.get(2));
// console.log(obj);

