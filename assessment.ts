import axios from 'axios';

// 1. TypeScript Interface: Defines the "Shape" of the data
interface Shift {
  id: number;
  title: string;
  completed: boolean;
}

async function runAssessment() {
  try {
    // 2. Fetch data (Simulating fetching from the web API) [cite: 16]
    console.log("Fetching data...");
    const response = await axios.get<Shift[]>('https://jsonplaceholder.typicode.com/todos');
    const allShifts = response.data;

    // 3. Filter: Keep only "Urgent" (completed === false)
    const urgentShifts = allShifts.filter(shift => !shift.completed);

    // 4. Transform: Keep only ID and Title
    const result = urgentShifts.map(shift => ({
      id: shift.id,
      title: shift.title
    }));

    // 5. Log the final list [cite: 16]
    console.log("Urgent Shifts Found:", result.slice(0, 3)); // Showing first 3
  } catch (error) {
    console.error("Error during fetch:", error);
  }
}

runAssessment();