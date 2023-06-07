import React, {ReactNode} from 'react';
import Header from "./Header";
import SideBar from '../components/SideBar';

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({ children }: Props) {
    return <div className="defaultLayout flex">
        <div className='side-bar w-64 bg-orange-500'>
            <SideBar />
        </div>
        <div className='main-content flex-1 w-full'>
            <Header />
            {children}
        </div>
    </div>
}
