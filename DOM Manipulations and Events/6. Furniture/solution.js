function solve() {
  const [input, output] = document.querySelectorAll('textarea');
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const table = document.querySelector('tbody');

  const products = [];

  generateBtn.addEventListener('click', () => {
    const data = JSON.parse(input.value);

    for (let record of data) {
      const row = createRow(record);
      table.appendChild(row.element);
      products.push(row);
    }
  });

  buyBtn.addEventListener('click', () => {
    let selected = products.filter(p => p.isChecked()).map(p => p.record);

    let price = selected.reduce((a, c) => a + Number(c.price), 0);
    let decFactor = selected.reduce((a, c) => a + Number(c.decFactor), 0);

    let result = [
      `Bought furniture: ${selected.map(p => p.name).join(', ')}`,
      `Total price: ${price.toFixed(2)}`,
      `Average decoration factor: ${selected.length > 0 ? decFactor / selected.length : 0}`
    ];

    output.value = result.join('\n');
  });

  function createRow(record) {
    const checkBox = html('input', { type: 'checkbox' });

    const row = {
      element: html('tr', {}, [
        html('td', {}, [
          html('img', { src: record.img })
        ]),
        html('td', {}, [
          html('p', {}, [record.name])
        ]),
        html('td', {}, [
          html('p', {}, [record.price])
        ]),
        html('td', {}, [
          html('p', {}, [record.decFactor])
        ]),
        html('td', {}, [
          checkBox
        ])
      ]),
      record,
      isChecked
    };

    return row;

    function isChecked() {
      return checkBox.checked;
    }
  }

  function html(tagName, attr = {}, content = []) {
    let element = document.createElement(tagName);
    Object.assign(element, attr);

    for (let item of content) {
      if (typeof item !== 'object') {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }

    return element;
  }
}