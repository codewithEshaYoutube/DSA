# DSA
# Data Structures and Algorithms (DSA) Problems in JavaScript

This repository contains solutions to a variety of **Data Structures and Algorithms (DSA)** problems, all implemented in **JavaScript**. These problems cover a wide range of topics, from basic array manipulations to advanced tree and graph algorithms.

## Table of Contents
- [Array and String Problems](#array-and-string-problems)
- [Linked List Problems](#linked-list-problems)
- [Stack and Queue Problems](#stack-and-queue-problems)
- [Tree Problems](#tree-problems)
- [Sorting Algorithms](#sorting-algorithms)
- [Graph Algorithms](#graph-algorithms)
- [Mathematics and Number Theory](#mathematics-and-number-theory)
- [Testing the Functions](#testing-the-functions)

## Array and String Problems

1. **Reverse an Array**
    - Problem: Reverse the given array.
    - Solution: A simple two-pointer approach to swap elements.
    
2. **Check if a String is a Palindrome**
    - Problem: Check whether a string is a palindrome, considering only alphanumeric characters and ignoring case.
    - Solution: Remove non-alphanumeric characters, convert to lowercase, and check if it matches the reversed string.

3. **Rotate an Array by `k` Positions**
    - Problem: Rotate the elements of an array to the right by `k` positions.
    - Solution: Use array slicing to perform the rotation.

---

## Linked List Problems

1. **Reverse a Singly Linked List**
    - Problem: Reverse the given linked list.
    - Solution: Use a three-pointer approach to reverse the list.

2. **Detect Cycle in a Linked List (Floyd’s Tortoise and Hare)**
    - Problem: Detect if there is a cycle in a linked list.
    - Solution: Use two pointers, one moving twice as fast as the other, to detect the cycle.

---

## Stack and Queue Problems

1. **Implement Stack Using Two Queues**
    - Problem: Implement a stack using two queues.
    - Solution: Use two queues and simulate the behavior of a stack.

2. **Implement Queue Using Two Stacks**
    - Problem: Implement a queue using two stacks.
    - Solution: Use two stacks to simulate the behavior of a queue.

---

## Tree Problems

1. **Inorder Traversal of a Binary Tree (Recursive)**
    - Problem: Perform inorder traversal on a binary tree.
    - Solution: Recursively visit the left subtree, the node, and then the right subtree.

2. **Check if a Binary Tree is Balanced**
    - Problem: Check if a binary tree is height-balanced.
    - Solution: Calculate the height of each subtree and ensure the difference in height is at most 1.

---

## Sorting Algorithms

1. **Merge Sort**
    - Problem: Sort an array using merge sort algorithm.
    - Solution: Recursively split the array and merge the sorted halves.

2. **Quick Sort**
    - Problem: Sort an array using quick sort algorithm.
    - Solution: Use the divide-and-conquer approach, selecting a pivot and partitioning the array.

---

## Graph Algorithms

1. **Depth First Search (DFS)**
    - Problem: Traverse a graph using Depth First Search.
    - Solution: Use recursion or a stack to explore each node and its neighbors.

2. **Breadth First Search (BFS)**
    - Problem: Traverse a graph using Breadth First Search.
    - Solution: Use a queue to explore nodes level by level.

---

## Mathematics and Number Theory

1. **Check if a Number is Prime**
    - Problem: Check if a given number is prime.
    - Solution: Check divisibility up to the square root of the number.

2. **Calculate the Greatest Common Divisor (GCD)**
    - Problem: Find the greatest common divisor of two numbers.
    - Solution: Use the Euclidean algorithm to calculate GCD.

3. **Sieve of Eratosthenes - Find All Primes Up to N**
    - Problem: Find all prime numbers up to a given limit `n`.
    - Solution: Implement the Sieve of Eratosthenes algorithm to mark non-prime numbers.

---

## Testing the Functions

Here are a few tests you can run to validate the solutions:

```javascript
// Test Array and String Functions
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// Test Linked List Functions
const head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
console.log(reverseLinkedList(head)); // 3 -> 2 -> 1

// Test Sorting Functions
console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6])); // [1, 1, 2, 3, 4, 5, 6, 9]
console.log(quickSort([3, 1, 4, 1, 5, 9, 2, 6])); // [1, 1, 2, 3, 4, 5, 6, 9]

// Test Graph Algorithms
const graph = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 5],
    4: [2],
    5: [3]
};

console.log(dfs(graph, 1)); // Set { 1, 2, 3, 4, 5 }
console.log(bfs(graph, 1)); // Set { 1, 2, 3, 4, 5 }
