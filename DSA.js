// 1. Reverse an Array
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap
        start++;
        end--;
    }
    return arr;
}

// 2. Check if a String is a Palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// 3. Rotate an Array by k Positions
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;  // To handle cases where k > n
    return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

// 4. Reverse a Singly Linked List
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

// 5. Detect Cycle in a Linked List (Floyd’s Tortoise and Hare)
function hasCycle(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    return false; // No cycle
}

// 6. Implement Stack using Two Queues
class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    
    push(x) {
        this.queue1.push(x);
    }
    
    pop() {
        if (this.queue1.length === 0) return null;
        
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        
        const poppedElement = this.queue1.shift();
        
        // Swap the queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        
        return poppedElement;
    }
    
    top() {
        if (this.queue1.length === 0) return null;
        return this.queue1[this.queue1.length - 1];
    }
    
    empty() {
        return this.queue1.length === 0;
    }
}

// 7. Implement Queue using Two Stacks
class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(x) {
        this.stack1.push(x);
    }
    
    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
    
    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// 8. Inorder Traversal of a Binary Tree (Recursive)
function inorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (node === null) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    return result;
}

// 9. Check if a Binary Tree is Balanced
function isBalanced(root) {
    function height(node) {
        if (node === null) return 0;
        
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1; // Not balanced
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    return height(root) !== -1;
}

// 10. Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i), right.slice(j));
}

// 11. Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 12. Depth First Search (DFS)
function dfs(graph, start) {
    const visited = new Set();
    
    function explore(node) {
        if (!node) return;
        visited.add(node);
        
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                explore(neighbor);
            }
        }
    }
    
    explore(start);
    return visited;
}

// 13. Breadth First Search (BFS)
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (!visited.has(node)) {
            visited.add(node);
            queue.push(...graph[node]);
        }
    }
    return visited;
}

// 14. Check if a Number is Prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 15. Calculate the Greatest Common Divisor (GCD)
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 16. Sieve of Eratosthenes - Find All Primes Up to N
function sieveOfEratosthenes(n) {
    const primes = Array(n + 1).fill(true);
    primes[0] = primes[1] = false;
    
    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }
    
    const result = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i]) result.push(i);
    }
    
    return result;
}

// Testing the functions

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

const head = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
console.log(reverseLinkedList(head)); // 3 -> 2 -> 1

console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6])); // [1, 1, 2, 3, 4, 5, 6, 9]
console.log(quickSort([3, 1, 4, 1, 5, 9, 2, 6])); // [1, 1, 2, 3, 4, 5, 6, 9]

console.log(isPrime(7)); // true
console.log(gcd(48, 18)); // 6
console.log(sieveOfEratosthenes(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

