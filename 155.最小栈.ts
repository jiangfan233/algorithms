/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start

// 解法三
// type Pair = {
//     value: number;
//     minValue: number;
// };

class MinStack {
    // 解法一、二
    //   list: number[];
    //   pointer: number;

    // 解法三
    //   pairs: Pair[];

    // 解法四
    diffs : number[];
    minVal: number;
    constructor() {
        // 解法一、二
        // this.list = [];
        // this.pointer = -1;
        // 解法三
        // this.pairs = [];

        this.diffs = [];
        this.minVal = 0;
    }

    push(val: number): void {
        // 解法一
        // if(this.pointer === -1 || val <= this.list[this.pointer]) {
        //     this.pointer = 0;
        // } else {
        //     this.pointer ++;
        // }
        // this.list.unshift(val);
        // 解法二
        // if(this.pointer === -1 || val <= this.list[this.pointer]) {
        //     this.pointer = this.list.length;
        // }
        // this.list.push(val);
        // 解法三
        // if (this.pairs.length === 0) {
        //   this.pairs.push({ value: val, minValue: val });
        //   return;
        // }
        // // 每次push都保留当前pairs下的最小值
        // this.pairs.push({
        //   value: val,
        //   minValue: Math.min(val, this.getLast().minValue),
        // });
    
        if(this.diffs.length === 0) {
            this.diffs.push(0);
            this.minVal = val;
            return;
        }
        const diff = val - this.minVal;
        this.diffs.push(diff);
        if(diff < 0) {
            this.minVal = val;
        }
    }

    pop(): void {
        // 解法一
        // this.list.shift();
        // if(this.pointer === 0) {
        //     this.pointer = this.list.indexOf(Math.min(...this.list));
        // } else {
        //     this.pointer--;
        // }
        // 解法二
        // this.list.pop();
        // if(this.pointer === this.list.length) {
        //     this.pointer = this.list.reduce((idx, item, i, arr) => {
        //         if(item <= arr[idx]) {
        //             idx = i;
        //         }
        //         return idx;
        //     }, 0)
        // }
        // 解法三
        // this.pairs.pop();
    
        const diff = this.diffs.pop()!;
        if(diff < 0) {
            this.minVal -= diff;
        }
        if(this.diffs.length === 0) {
            this.minVal = 0;
        } 
    }

    top(): number {
        // 解法一
        // return this.list[0];
        // 解法二
        // return this.list[this.list.length - 1];
        // 解法三
        // return this.getLast().value;
        
        // 解法四
        // diff是value与minValue的差值，如果diff < 0, 说明value === minValue
        const diff = this.diffs[this.diffs.length - 1];
        return diff >= 0 ? this.minVal + diff : this.minVal;
    }

    getMin(): number {
        // 解法一、二
        // return this.list[this.pointer];
        // 解法三
        // return this.getLast().minValue;

        return this.minVal;
    }

    // 解法三
    // getLast(): Pair {
    //     // return this.pairs[this.pairs.length - 1];
    // }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

const minStack = new MinStack();
minStack.push(2147483648);
minStack.push(2147483648);

minStack.push(-2147483648);
console.log(minStack.top());
minStack.pop();
console.log(minStack);
