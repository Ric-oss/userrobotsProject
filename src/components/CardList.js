import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
  return(
  <div>
   {  /* <Card id={robots[0].id} name={robots[0].name} email={robots[0].emailid}/>
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].emailid}/>
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].emailid}/>
  </div>*/}
  {
      robots.map((user,i)=>{
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].emailid}/> 
      })
  }
  </div>
  )
}
export default CardList;