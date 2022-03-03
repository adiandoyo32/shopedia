import { useLocation, useNavigate } from 'react-router-dom'
import { IoCart, IoCartOutline, IoHome, IoHomeOutline, IoPerson, IoPersonOutline } from 'react-icons/io5';
import classNames from 'classnames';
import ProfileService from '../services/auth-service';
import { useAuth } from '../redux/hooks';

export const BottomNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const isAuth = useAuth()
    const { pathname } = location

    const tabs = [
        {
            path: '/',
            title: 'Home',
            activeIcon: IoHome,
            icon: IoHomeOutline
        },
        {
            path: '/cart',
            title: 'Cart',
            activeIcon: IoCart,
            icon: IoCartOutline,
        },
        {
            path: '/profile',
            title: 'Profile',
            activeIcon: IoPerson,
            icon: IoPersonOutline,
        },
    ]

    const setRouteActive = (path: string) => {
        if (path == '/profile' && !isAuth) {
            navigate('/login')
            return
        }
        navigate(path);
    }

    return (
        <div className='flex flex-row items-center justify-around p-1'>
            {tabs.map((tab, index) => {
                return <div key={index} className='flex flex-col items-center cursor-pointer' onClick={() => setRouteActive(tab.path)}>
                    {pathname === tab.path ? <tab.activeIcon size={24} className='mb-1 text-green-600' /> : <tab.icon size={24} className='mb-1 text-gray-400' />}
                    <span className={classNames('text-gray-400 text-xs tracking-wide', { 'text-green-600': pathname == tab.path, 'font-bold': pathname === tab.path })}>
                        {tab.title}
                    </span>
                </div>
            })}
        </div>
    )
}