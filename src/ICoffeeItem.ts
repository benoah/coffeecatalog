export interface ICoffeeItem {
    name: string;
    formCode: string;
    category: string;
    id: number;
    assets: {
      fullSize: {
        uri: string;
      };
      masterImage: {
        uri: string;
      };
      thumbnail: {
        large: {
          uri: string;
        };
      };
    };
  }
  
  export interface CoffeeListProps {
    item: ICoffeeItem;
  }
  