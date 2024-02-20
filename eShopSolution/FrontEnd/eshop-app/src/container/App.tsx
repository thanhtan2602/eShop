import { Route, Routes, useLocation } from "react-router-dom"
import { SignIn, SignUp } from "../components/pages/user"
import Home from "../components/pages/Home"
import { Footer, Header } from "../components/layout";



export default function App() {

    const location = useLocation();
    const isNeedRenderLayout = location.pathname !== '/sign-in' && location.pathname !== '/sign-up' && location.pathname !== '/404'

    return (
        <div>
            {isNeedRenderLayout && <Header />}
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/sign-up' element={<SignUp />}></Route>
                <Route path='/sign-in' element={<SignIn />}></Route>
            </Routes>
            {isNeedRenderLayout && <Footer />}
        </div>
    )
}