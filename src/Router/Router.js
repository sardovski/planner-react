import { BrowserRouter,Routes, Route, Outlet } from 'react-router-dom';
import Home from '../Pages/Home';
import Planner from '../Pages/Planner';
import Welcome from '../Pages/Welcome';



function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Home/>}>
                <Route path='/' element={ <Outlet />}>
                    <Route index element={<Welcome/>} />
                    <Route path='/Tasks' element={<Planner/>} />
                    <Route path='/About' element={<h1>About</h1>} />

                </Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}


export default Router;

