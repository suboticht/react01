import {TextField, Button} from '@mui/material';

const Search = () => {

    return <div className="search">
        <p className='uppercase mb-2 text-slate-500'>search</p>
        <div className='flex'>
            <div className='mr-3'>
                <TextField id="outlined-basic" label="" size='small' variant="outlined" className='w-96 mr-2' />
            </div>
            <div className='uppercase font-medium'>
                <Button variant="contained">Primary</Button>
            </div>
        </div>
    </div>
}
export default Search;