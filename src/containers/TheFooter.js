import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://www.ynet.co.il" target="_blank" rel="noopener noreferrer">Ynet</a>
        <span className="ml-1">&copy; 2020 Full Stack Course 2019</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by FullStack Course Beer Sheva</span>
        <a href="https://www.int-college.co.il/" target="_blank" rel="noopener noreferrer">Int College</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
