document.getElementById('app').textContent = 'Hello from Webpack!';

fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(data => {
    console.log('Данные получены:', data);
    const container = document.getElementById('data');
    data.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `ID: ${item.id}, Title: ${item.title}, Author: ${item.author}`;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Ошибка при получении данных:', error));

fetch('http://localhost:3000/comments')
  .then(response => response.json())
  .then(data => {
    console.log('Данные получены:', data);
    const container = document.getElementById('data');
    data.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `ID: ${item.id}, Body: ${item.body}, postId: ${item.postId}`;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Ошибка при получении данных:', error));

fetch('http://localhost:3000/profile')
  .then(response => response.json())
  .then(data => {
    console.log('Данные получены:', data);
    const container = document.getElementById('data');
    data.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `Name: ${item.name}`;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Ошибка при получении данных:', error));
