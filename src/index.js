import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './main';

ReactDOM.render(
    <BrowserRouter>
        <Main/>
    </BrowserRouter>, 
    document.getElementById('root')
);