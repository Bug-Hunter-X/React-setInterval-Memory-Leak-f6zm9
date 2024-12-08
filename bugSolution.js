```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id); // Cleanup on unmount
  }, []);

  return <div>Count: {count}</div>;
}
```