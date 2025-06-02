function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   const textAreaRef = document.querySelector("textarea"); 
   const bestRestaurantRef = document.querySelector("#bestRestaurant p");
   const bestWorkersRef = document.querySelector("#workers p");
 
   function onClick () {
      let data = textAreaRef.value;
      let restaurantData = JSON.parse(data);
      
      let result = {};
 
      for (let el of restaurantData) { //PizzaHut - Peter 500, George 300, Mark 800
         let [name, workers] = el.split(" - ");
 
         if (!result.hasOwnProperty(name)) {
            result[name] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            }
         }
 
         let workersData = workers.split(", ");
         let workerList = createWorkerList(workersData);
         result[name].workers = concatWorkerList(result[name].workers, workerList);
 
         let salaryData = calculateRestaurantSalaryData(result[name].workers);
 
         result[name].bestSalary = salaryData.bestSalary;
         result[name].avgSalary = salaryData.avgSalary;
      }
      
      const [bestRestaurantName, bestRestaurantData ]= findBestRestaurant(result);
      bestRestaurantRef.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantData.avgSalary.toFixed(2)} Best Salary: ${bestRestaurantData.bestSalary.toFixed(2)}`
 
      let buff = "";
 
      bestRestaurantData.workers.sort((a, b) => b.salary - a.salary).forEach(worker => {
         return buff += `Name: ${worker.name} With Salary: ${worker.salary} `
      });
 
      bestWorkersRef.textContent = buff.trim();
   }
 
   function findBestRestaurant(restaurantData) {
      return Object.entries(restaurantData).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
   }
 
   function calculateRestaurantSalaryData(list) {
 
      const result = {
         avgSalary: 0,
         bestSalary: 0
      }
 
      let sum = 0;
 
      for (let worker of list) {
         let {name, salary} = worker;
 
         sum += salary;
         if (result.bestSalary < salary) {
            result.bestSalary = salary;
         }
      }
      result.avgSalary = sum / list.length
 
      return result;
   }
 
   function createWorkerList (data) {
      let result = [];
 
      for (let el of data) {
         let [name, salary] = el.split(" ");
         salary = Number(salary);
 
         result.push({
            name,
            salary
         })
      }
      return result;
   }
 
   function concatWorkerList (oldList, newList) {
      return oldList.concat(newList);
   }
}