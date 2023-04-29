const HomeScreen = () => {

    const changeRoute = () => {
        window.location.pathname = '/contact'
    }
    
    return (
        <>
            <>I am from HomeScreen</>
            <button onClick={changeRoute}>Change Rout</button>
        </>
    );
}

export default HomeScreen;