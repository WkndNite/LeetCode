/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let startX = startY = 0;
    let loop = Math.floor(n / 2); // 旋转圈数
    let mid = Math.floor(n / 2); // 中间位置
    let count = 1; // 更新填充数字
    let offset = 1; // 控制每一层填充元素个数
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0)); // 初始化结果数组


    while (loop--) {
        let row = startX, col = startY;
        // 从左到右
        for(;col < n-offset;col++){
            res[row][col] = count++;
        }
        // 从上到下
        for(;row < n-offset;row++){
            res[row][col] = count++;
        }
        // 从右到左
        for(;col > startY;col--){
            res[row][col] = count++;
        }
        // 从下到上
        for(;row > startX;row--){
            res[row][col] = count++;
        }

        // 更新起始位置
        startX++;
        startY++;
        // 更新偏移量
        offset++;

    }

    if(n%2==1){
        res[mid][mid] = count;
    }

    return res;
};
// @lc code=end

