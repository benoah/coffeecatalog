export default function useTruncateName() {
  // Truncate the name string based on the defined logic
  const truncateName = (name: string): string => {
    // Remove the word "Featured" from the name
    let updatedName = name.replace("Featured", "");
    // Split the updated name using "®" as the delimiter and take the first part
    updatedName = updatedName.split("®")[0];
    // Remove any leading or trailing whitespace
    updatedName = updatedName.trim();
    
    // Split the updated name into an array of words
    const words = updatedName.split(" ");
    
    // Check the number of words in the array
    if (words.length > 2) {
      // If there are more than two words, return the first two words concatenated with a space
      return `${words[0]} ${words[1]}`;
    } else {
      // If there are two or fewer words, return the updated name as is
      return updatedName;
    }
  };

  // Return the truncateName function
  return { truncateName };
}
