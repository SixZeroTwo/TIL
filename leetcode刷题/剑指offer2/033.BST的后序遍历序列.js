/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  //终止条件
  if (!postorder.length || postorder.length == 1) return true
  //最后一个节点为界，寻找左子树的边界和右子树的边界
  const len = postorder.length
  let mid = postorder[len - 1]
  let leftStart = 0, leftEnd = 0, rightStart = 0, rightEnd = 0
  let flag = 0
  //在mid节点之前确定左右子树边界
  for (let i = 0; i < len - 1; i++) {
    if (flag == 0) {
      if (postorder[i] < mid) leftEnd = i + 1
      else {
        flag = 1
        rightStart = i
      }
    }
    else {
      if (postorder[i] < mid) {
        return false
      }
      else {
        rightEnd = i + 1
      }
    }
  }
  let left = verifyPostorder(postorder.slice(leftStart, leftEnd))
  let right = verifyPostorder(postorder.slice(rightStart, rightEnd))
  return left && right
};

console.log(verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3]
));