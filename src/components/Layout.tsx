import Navbar from "./Navbar"

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <section className="grow flex flex-col content bg-white mb-20">
                {children}
            </section>
        </>
    )
}

export default Layout