import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

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
      <div>
        <IdCard users={idArray[0]} />
      </div>
      <div>
        <IdCard users={idArray[1]} />
      </div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
