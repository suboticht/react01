import {Link} from 'react-router-dom';
import routes from '../../routes';

export default function SideBar() {
    return <div className="side-bar text-white font-medium uppercase h-screen">
        <div className='border-b border-slate-300 py-3'>
            <h2 className='ml-3'>Bài Test</h2>
        </div>
        <ul className="list-menu pl-7 mt-4">
            {routes.map((route, i) => {
                return <li key={route.key} className='mb-2'>
                    <Link to={route.path}>{route.name}</Link>
                </li>
            })}
        </ul>
    </div>
}