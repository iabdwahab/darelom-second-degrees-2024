const tableEl = document.querySelector('.table');

fetch('https://iabdwahab.me/darelom-second-degrees-2024/data.json').then(res => res.json()).then(data => {

  data.forEach(student => {
    student.total = 0;
    
    if (typeof student.degrees !== 'string') {
      for (let i = 0; i < student.degrees.length; i++) {
        let degree = student.degrees[i];
        if (i === 1) {
          continue;
        }

        if (degree.startsWith('/')) {
          degree = degree.substring(1);
        }

        if (!isNaN(Number(degree))) {
          student.total += Number(degree);
        }
      }
    } 
  })

  data.sort((a, b) => {
    return b.total - a.total;
  });


  let i = 0;

  let idInterval = setInterval(() => {
    if (!typeof data[i].degrees !== 'string') {
      tableEl.innerHTML += `
        <tr id="student-${i}">
          <td class="order-el">${i + 1}</td>
          <td class="id-el">${data[i].id}</td>
          <td class="name-el">${data[i].name}</td>
          <td class="term-2 out-degree">${data[i].degrees[0] || 0}</td>
          <td class="term-2 out-degree">${data[i].degrees[1] || 0}</td>
          <td class="term-2">${data[i].degrees[2] || 0}</td>
          <td class="term-2">${data[i].degrees[3] || 0}</td>
          <td class="term-1">${data[i].degrees[4] || 0}</td>
          <td class="term-2">${data[i].degrees[5] || 0}</td>
          <td class="term-1">${data[i].degrees[6] || 0}</td>
          <td class="term-2">${data[i].degrees[7] || 0}</td>
          <td class="term-1">${data[i].degrees[8] || 0}</td>
          <td class="term-2">${data[i].degrees[9] || 0}</td>
          <td class="term-1">${data[i].degrees[10] || 0}</td>
          <td class="term-1">${data[i].degrees[11] || 0}</td>
          <td class="term-2">${data[i].degrees[12] || 0}</td>
          <td class="term-2">${data[i].degrees[13] || 0}</td>
          <td class="term-2">${data[i].degrees[14] || 0}</td>

          <td class="total-el">${data[i].total}</td>
          <td class="percentage-el">${(data[i].total * 100 / 1400).toFixed(2)}%</td>
        </tr>
      `;
    }

    i++;

    if (i >= data.length) {
      clearInterval(idInterval)
    }
    
  }, 0);
});