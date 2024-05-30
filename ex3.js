let yearList = document.getElementById('world-cup-years');

for (let year = 2022; year <= 2050; year += 4) {
  let listItem = document.createElement('Li');
  listItem.textContent = year;
  yearList.appendChild(listItem);
}
