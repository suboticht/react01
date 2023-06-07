import * as React from 'react';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Search from '../../components/Search';


export default function Dashboard() {
  const ite: GridColDef[] = [];
  console.log(ite);
  

  return <div>
        <Search />
        <div className='text-right mt-20 w-3/5'>
          <div className='uppercase font-medium'>
                <Button variant="contained">Create</Button>
          </div>
          <div className='mt-5'>
sdfsdf
          </div>
        </div>
      </div>;
}
