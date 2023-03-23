
function Navbar() {
    return (
        <>
            {/*navbar start*/}
            <div className='navbar h-16 w-full z-20 bg-nav-white drop-shadow-3xl items-center flex justify-between px-10'>
                {/* logo wrapper start */}
                <div className='logo-wrapper'>
                    <p className="logo text-lg italic font-black">demo</p>
                </div>
                {/* logo wrapper end */}

                {/* user wrapper start */}
                <div className='user-wrapper grid grid-cols-3  place-content-between text-gray text-md'>
                    <div className="relative">
                        <span className='absolute right-[25px] top-[-2px] bg-[#fb756c] w-3 h-3 text-white text-[10px] rounded-full flex justify-center items-center font-bold'>3</span>
                        <i className="bi bi-bell"></i>
                    </div>
                    <i className="bi bi-person-circle"></i>
                    <p>User 1</p>
                </div>
                {/* user wrapper end */}

            </div>
            {/*navbar end*/}

        </>

    )
}

export default Navbar