import * as C from './styled'
import poweredImg from './assets/images/powered.png';
import { Siders } from './components/Siders';
import { GridItem } from './components/GridItem/GridItem';


function App () {
  return (
    <C.Container>
      <header className='headerArea'>
        <div className='logoArea'>
          <img src={poweredImg} alt="" />
        </div>
      </header>
      <div className="mainArea">
        <Siders />
      </div>
    </C.Container>
  );
}

export default App;