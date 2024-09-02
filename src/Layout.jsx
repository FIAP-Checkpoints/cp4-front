import AppRoutes from "./routes/AppRoutes";
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function Layout() {
    return (
        <>
            <Nav />
            <AppRoutes />
            <Footer />
        </>
    )
}