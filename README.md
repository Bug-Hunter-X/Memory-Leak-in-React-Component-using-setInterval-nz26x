# React setInterval Memory Leak

This repository demonstrates a common error in React applications: a memory leak caused by the improper use of `setInterval` within the `useEffect` hook.

## Problem

The `MyComponent` component uses `setInterval` to update the count every second. However, it fails to provide a cleanup function to clear the interval when the component unmounts. This leads to a memory leak because the interval continues to run even after the component is no longer needed.

## Solution

The solution involves returning a cleanup function from the `useEffect` hook that uses `clearInterval` to stop the interval when the component unmounts.  This ensures that the interval is properly cleaned up, preventing memory leaks.