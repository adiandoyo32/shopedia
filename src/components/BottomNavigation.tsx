import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import {
    AppOutline,
    ShopbagOutline,
    UserOutline,
} from 'antd-mobile-icons'

export const BottomNavigation: FC = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { pathname } = location

    const tabs = [
        {
            key: '/',
            title: 'Home',
            icon: <AppOutline />,
        },
        {
            key: '/about',
            title: 'about',
            icon: <ShopbagOutline />,
            badge: '5',
        },
        {
            key: '/user',
            title: 'Profile',
            icon: <UserOutline />,
        },
    ]

    const setRouteActive = (path: string) => {
        navigate(path);
    }

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}