
const Header = () => {
    return (
        <div style={{
            backgroundImage: `url("/15.jpg")`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"100%",
        }}>
            <div className="flex gap-4 justify-center items-center">
                <img className="w-[72px] p-2" src="/logo1.png" alt="" />
                <h2 className="text-2xl md:text-4xl lg:text-4xl text-white">Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default Header;