import { Routes, Route } from 'react-router-dom';
import { About, Home, Page404 } from '..';
import { Navbar } from '../../ui';

export const HomeRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path='home' element={ <Home /> }/>
                    <Route path='about' element={ <About /> }/>

                    <Route path='*' element={ <Page404 /> }/>
                </Routes>
            </div>
        </>
    )
}
