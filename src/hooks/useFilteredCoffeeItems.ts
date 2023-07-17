import { useState, ChangeEvent, useEffect } from "react";
import useCoffeeItems from "./useCoffeeItems";

export default function useFilteredCoffeeItems() {
  // Fetch coffeeItems using the useCoffeeItems custom hook
  const { coffeeItems } = useCoffeeItems();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a delay of 4 seconds before showing the data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Handle search input change event
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  // Filter coffeeItems based on the searchTerm
  const filteredCoffeeItems = coffeeItems.filter((item) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const lowercaseName = item.name.toLowerCase();
    const lowercaseFormCode = item.formCode.toLowerCase();

    return (
      lowercaseName.includes(lowercaseSearchTerm) ||
      lowercaseFormCode.includes(lowercaseSearchTerm)
    );
  });

  // Return filteredCoffeeItems, handleSearchChange, searchTerm, and loading
  return { filteredCoffeeItems, handleSearchChange, searchTerm, loading };
}
