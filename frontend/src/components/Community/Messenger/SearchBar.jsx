import React, { useEffect, useState } from 'react';
import './Searchbar.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { setAllUsersDetails } from '../../../redux/features/userSlice';
import { getAllUsers } from '../../../helper/UsersChatHelper';
import { setClickedUserDetails } from '../../../redux/features/chatLeftSideClickedUserSlice';

function SearchBar() {
    const { tokenData ,allUsersDetails } = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const  [ filterData , setFilterData ] = useState([])

    const [ displayUsers , setDisplayUsers ] = useState(true)

    const [ displayBox , setDisplayBox ]  = useState(true)


   

    useEffect(()=>{
        (async()=>{
            const users = await getAllUsers(tokenData)
            dispatch(setAllUsersDetails(users))
        })()
    },[])


    //filter username  logic
    const handleFilter = (event)=>{
        setDisplayBox(true)
       const searchWord =  event.target.value
        const newFIlter = allUsersDetails.filter((value)=>{
            return value.firstName.toLowerCase().includes(searchWord.toLowerCase())
             
        });w
        setFilterData(newFIlter )
    }

    //get clicked user  details 
    const onClickUser = (userId)=>{
        const filteredUserData =  allUsersDetails.filter((value)=>value._id == userId)
         dispatch(setClickedUserDetails(filteredUserData))
         setDisplayUsers(false)
         setDisplayBox(false)
    }

 

  return (
    <div className='search'>
        <div className="searchInputs">
            <input type="text" placeholder='Search for users' onChange={handleFilter} />
            <div className="searchIcon"><BiSearchAlt2/>
            </div>
        </div>
        <div className="dataBox">
            
       {displayBox && 
        <div  className="dataBox">
{ filterData.length != 0  && (
        <div className="dataResult">
                {filterData.slice(0,15).map((value,key)=>{
                    return <a className='dataItem' onClick={()=>onClickUser(value._id)}>
                        <p>{value?.firstName}</p>
                        </a>
                })}
        </div>
    )}    
    
    </div>
    
    
            }      
     </div>
            
    </div>

  )
}

export default SearchBar