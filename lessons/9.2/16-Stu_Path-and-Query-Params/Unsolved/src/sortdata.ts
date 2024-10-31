export interface Term {
  term: string;
  definition: string;
  url: string;
  category: string;
  relevance: number;
}

// Helper function to sort data based on key and type
const sortData = (firstKey: string, secondKey: string, type: string) => {
  switch (type) {
    case 'asc': {
      return (a: Term, b: Term) => {
        if (a[firstKey as keyof Term] < b[firstKey as keyof Term]) {
          return -1;
        }
        if (a[firstKey as keyof Term] > b[firstKey as keyof Term]) {
          return 1;
        }

        if (a[secondKey as keyof Term] < b[secondKey as keyof Term]) {
          return 1;
        }
        if (a[secondKey as keyof Term] > b[secondKey as keyof Term]) {
          return -1;
        }
        return 0;
      };
    }
    case 'dsc': {
      return (a: Term, b: Term) => {
        if (a[firstKey as keyof Term] > b[firstKey as keyof Term]) {
          return -1;
        }
        if (a[firstKey as keyof Term] < b[firstKey as keyof Term]) {
          return 1;
        }

        if (a[secondKey as keyof Term] > b[secondKey as keyof Term]) {
          return 1;
        }
        if (a[secondKey as keyof Term] < b[secondKey as keyof Term]) {
          return -1;
        }
        return 0;
      };
    }
    default:
      return undefined;
  }
};

export default sortData;
