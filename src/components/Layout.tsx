import Navbar from "./Navbar"

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            {/* <section className="gorh-full bg-white mb-20"> */}
                {children}
            {/* </section> */}
        </>
    )
}

export default Layout