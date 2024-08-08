
const TogBtn = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen((prev)=>!prev)}>Button
      
    </button>
  )
}

export default TogBtn
