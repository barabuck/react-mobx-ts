import { Spin } from 'antd'
import React, { FC } from 'react'

import './spinner.scss'

const Spinner: FC = () => {
    return (
        <div className='spinner'>
            <Spin />
        </div>
    )
}

export default Spinner
