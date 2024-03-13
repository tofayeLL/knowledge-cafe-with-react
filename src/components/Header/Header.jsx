import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className=' container mx-auto px-20 '>
            <div className='border-b-2 flex justify-between items-center  py-8'>
            <h1 className='text-2xl font-bold'>React Knowledge Cafe</h1>
            <img src={profile} alt="" />
            </div>
            
        </div>
    );
};

export default Header;