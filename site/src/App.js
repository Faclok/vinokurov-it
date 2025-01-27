import { useState } from 'react';
import './App.css';
import { ReactComponent as Icon } from './logo.svg';

function App() {

  const [words] = useState([
    'Мы начинаем писать первую строку кода... Следите за обновлениями.',
    'Эта страница станет частью истории. Скоро.',
    'Бренд для тех, кто создает будущее. Подготовьтесь.',
    'Первый экземпляр уже создается. Откроем доступ скоро.',
    'Каждый элемент — часть твоей уникальности.',
    '404? Нет, это начало чего-то большого.',
    'Кофта компилируется. Подождите немного.',
    'Чистый CSS и никакого хлама. Скоро увидимся.'
  ]);
  const [index, setIndex] = useState(Math.floor(Math.random()* words.length));

  return (
    <div>
      <div className="wrapper">
        <div className="text">{words[index]}</div>
      </div>
      <Icon fill='white' className='iconMain' onClick={() => setIndex(words.length - 1 > index ? index + 1 : 0)}/>
      <span style={{color: 'gray'}}>{'< - - - нажми'}</span>
    </div>
  );
}

export default App;
