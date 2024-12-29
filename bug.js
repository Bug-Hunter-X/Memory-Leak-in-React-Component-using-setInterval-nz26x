```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The function passed to setInterval
    // needs to return a cleanup function to prevent memory leaks.
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Missing cleanup function
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```