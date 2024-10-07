interface ApiResponse<T> {
  data: T;
  status: number;
  error?: string;
}

function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  return fetch(url)
    .then(response => response.json())
    .then(data => ({
      data: data as T,
      status: 200
    }))
    .catch(error => ({
      data: {} as T,
      status: 500,
      error: error.message
    }));
}

// Uso con un tipo specifico
interface User {
  id: number;
  name: string;
}

fetchData<User[]>("https://jsonplaceholder.typicode.com/users").then(response => {
  console.log(response.data[0].name); 
  console.log(response.status);
  console.log(response.error);
});


