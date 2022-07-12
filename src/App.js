import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Destination from "./pages/destination/Destination"
import Crew from "./pages/crew/Crew"
import Technology from "./pages/technology/Technology"
import Nav from "./components/nav/Nav"

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default App
