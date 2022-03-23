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
                    <Route path='/About' element={<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis natus cum dicta nostrum saepe reprehenderit omnis repudiandae fugiat consequatur veritatis!</p>} />

                </Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}


export default Router;

