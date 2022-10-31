import logo from './logo.svg';
import './App.css';
import Materia from './components/materia';
function App() {
  return (
    <div className="App">
      <Materia nombre=' Taller de Investigación' emoji='👓' desc='Lun-jue de 4:00pm-5:00pm'/>
      <Materia nombre='Matematicas Discretas' emoji='📖' desc='Lun-vie de 5:00pm-6:00pm'/>
      <Materia nombre='Precalculo' emoji='📟' desc='Lun-vie de 6:00pm-7:00pm'/>
      <Materia nombre='Ética' emoji='👨‍⚖️' desc='Lun-vie de 7:00pm-8:00pm'/>
      <Materia nombre='Taller de Administración' emoji='📝' desc='Lun-vie de 8:00pm-9:00pm'/>
      <Materia nombre='Fundamentos de programación' emoji='💻' desc='Lun-vie de 9:00pm-10:00pm'/>
    </div>
  );
}

export default App;
