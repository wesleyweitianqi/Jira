import React from "react";

const SearchPanel=({users, param, setParam}) => {

  return <form>
    <div>
      <input type='text' value = {param.name} onChange={e=> setParam({...param, name:e.target.value})} />

    </div>
    <select value ={param.personId} onChange={e=>setParam({
      ...param, personId: e.target.value
    })}>
    <option value="">User</option>
    {users.map(user=><option key={user.id} value={user.id}>{user.name}</option>)}
    </select>
  </form>
}

export default SearchPanel