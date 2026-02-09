//your JS code here. If required.
let promise1 = new Promise((resolve) => {
  const randomSec = Math.floor(Math.random() * 3) + 1;
  const delay = randomSec * 1000;
  setTimeout(() => {
    const result = { name: "Promise 1", delay: delay };
    resolve(result);
  }, delay);
});
let promise2 = new Promise((resolve) => {
  const randomSec = Math.floor(Math.random() * 3) + 1;
  const delay = randomSec * 1000;
  setTimeout(() => {
    const result = { name: "Promise 2", delay: delay };
    resolve(result);
  }, delay);
});
let promise3 = new Promise((resolve) => {
  const randomSec = Math.floor(Math.random() * 3) + 1;
  const delay = randomSec * 1000;
  setTimeout(() => {
    const result = { name: "Promise 3", delay: delay };
    resolve(result);
  }, delay);
});

Promise.all([promise1,promise2,promise3]).then((res)=>{
    const tableBody = document.getElementById("output");
    tableBody.innerHTML = "";
    res.forEach((item) => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const delayCell = document.createElement("td");
        nameCell.textContent = item.name;
        delayCell.textContent = item.delay / 1000 ;
        let total = item.delay / 1000;
        row.appendChild(nameCell);
        row.appendChild(delayCell);
        tableBody.appendChild(row);
    });
    const totalDelay = res.reduce((sum, item) => sum + item.delay / 1000, 0);
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    const totalDelayCell = document.createElement("td");
    totalCell.textContent = "Total";
    totalDelayCell.textContent = totalDelay.toFixed(3);
    totalRow.appendChild(totalCell);
    totalRow.appendChild(totalDelayCell);
    tableBody.appendChild(totalRow);
})
