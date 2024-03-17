
import Route from './Components/Route';
import Sidebar from './Components/Sidebar';
import AccordionPage from './Pages/AccordionPage';
import DropdownPage from './Pages/DropdownPage';
import ButtonPage from './Pages/ButtonPage';
import ModalPage from './Pages/ModalPage';
import TablePage from './Pages/TablePage';

function App() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar/>
        <div className='col-span-5'>
          <Route path={'/accordion'}>
            <AccordionPage />
          </Route>

          <Route path={'/'}>
            <DropdownPage />
          </Route>

          <Route path={'/button'}>
            <ButtonPage/>
          </Route>

          <Route path={'/modal'}>
            <ModalPage/>
          </Route>

          <Route path={'/table'}>
            <TablePage/>
          </Route>
        </div>
      </div>
    </>
  )
}

export default App;
