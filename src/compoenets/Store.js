import {configureStore} from '@reduxjs/toolkit'

import  Slicereducer from './Reducer'
export const store=configureStore({

    reducer:Slicereducer
})