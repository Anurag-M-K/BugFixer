  import React from 'react'
import { useSelector } from 'react-redux'
import BugFixer from '../../components/UserComponents/BugFixer'
import Header from '../../components/UserComponents/Header/Header'


function Home() {
  const {userDetails} = useSelector(state => state.user)
  return (
    <div>
     
      <Header/>
    <BugFixer/>
    </div>
  )
}

export default Home