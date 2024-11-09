// 1. Reverse an Array
function reverseArray(arr) {
  return arr.reverse();
}

// 2. Find the Maximum Element in an Array
function findMax(arr) {
  return Math.max(...arr);
}

// 3. Check if a String is a Palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// 4. Fibonacci Sequence (Iterative)
function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// 5. Bubble Sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Swap
      }
    }
  }
  return arr;
}

// 6. Binary Search (Iterative)
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;  // Target not found
}

// 7. Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  // Concatenate remaining elements
  return result.concat(arr1.slice(i), arr2.slice(j));
}

// 8. Find the Missing Number (1 to N)
function findMissingNumber(arr, n) {
  const totalSum = (n * (n + 1)) / 2;  // Sum of numbers 1 to N
  const arrSum = arr.reduce((sum, num) => sum + num, 0);  // Sum of elements in the array
  return totalSum - arrSum;  // The difference is the missing number
}

// 9. Depth-First Search (DFS) on a Graph
function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  console.log(node);  // Visit the node
  graph[node].forEach(neighbor => dfs(graph, neighbor, visited));
}

// 10. Breadth-First Search (BFS) on a Graph
function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  
  while (queue.length) {
    let node = queue.shift();
    if (!visited.has(node)) {
      console.log(node);  // Visit the node
      visited.add(node);
      queue.push(...graph[node]);
    }
  }
}

// 11. Find All Pairs That Sum to a Target
function findPairs(arr, target) {
  const pairs = [];
  const seen = new Set();
  
  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  
  return pairs;
}

// 12. Two Sum
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  
  return [];
}

// Example Usages:
console.log("Reverse Array:", reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log("Max Element:", findMax([3, 5, 7, 2, 8])); // Output: 8
console.log("Palindrome Check:", isPalindrome('madam')); // Output: true
console.log("Fibonacci (10th):", fibonacci(10)); // Output: 55
console.log("Bubble Sort:", bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
console.log("Binary Search:", binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
console.log("Merge Sorted Arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log("Missing Number:", findMissingNumber([1, 2, 4, 5], 5)); // Output: 3
console.log("DFS:", dfs({1: [2, 3], 2: [1, 4], 3: [1, 5], 4: [2], 5: [3]}, 1)); // Output: 1, 2, 4, 3, 5
console.log("BFS:", bfs({1: [2, 3], 2: [1, 4], 3: [1, 5], 4: [2], 5: [3]}, 1)); // Output: 1, 2, 3, 4, 5
console.log("Find Pairs:", findPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
console.log("Two Sum:", twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
