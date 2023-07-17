import { useEffect, useState, useCallback } from "react";
import { ICoffeeItem } from "../ICoffeeItem";

const API_URL =
  "https://7r7t215usd.execute-api.us-east-1.amazonaws.com/coffee/coffee-drinks";

// Type guard function to check if an object is an array of ICoffeeItem
const isCoffeeItemArray = (obj: any): obj is ICoffeeItem[] =>
  Array.isArray(obj) &&
  obj.every(
    (item) =>
      typeof item === "object" &&
      "name" in item &&
      typeof item.name === "string"
  );

const useCoffeeItems = () => {
  const [coffeeItems, setCoffeeItems] = useState<ICoffeeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCoffeeItems = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      if (isCoffeeItemArray(jsonData)) {
        setCoffeeItems(jsonData);
      } else {
        console.error("Response format is incorrect:", jsonData);
        setError("Data format is incorrect. Please contact support.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(`Failed to fetch coffee items. ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch coffee items when the component mounts or fetchCoffeeItems function reference changes
  useEffect(() => {
    fetchCoffeeItems();
  }, [fetchCoffeeItems]);

  // Return coffeeItems, loading, error, and refresh function
  return { coffeeItems, loading, error, refresh: fetchCoffeeItems };
};

export default useCoffeeItems;
