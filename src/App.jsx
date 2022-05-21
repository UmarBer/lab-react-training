import IdCard from './components/IdCard';

import './App.css';

function App() {
  const idArray = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date(1992, 6, 14),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date(1993, 4, 11),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];
  return (
    <div className="App">
      <div className="user-card">
        <IdCard users={idArray[0]} />
      </div>
      <div className="user-card">
        <IdCard users={idArray[1]} />
      </div>
    </div>
  );
}

export default App;
