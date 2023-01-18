import {useState} from 'react';

import {Helmet} from 'react-helmet';


import {SplitLogin} from './splitlogin';
import { UseMilligram } from './millilib';


export function Form(){
    return <>
    <UseMilligram/>
    <label for="nameField">Name</label>
    <input type="text" placeholder="CJ Patoilo" id="nameField"></input>
    
    </>

}