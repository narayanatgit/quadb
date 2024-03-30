
import { useEffect } from 'react';
import './style.css'
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import List from './List';

function App() {

 
  return (
    <div class="main">

<div class="box" id="heading">
		
		<h1 class="day">TODAY</h1>

   

		
    </div>
    <div class='box'>
    <TaskList/>
    <TaskInput/>
<List/>

		</div>
      </div>
  );
}

export default App;
