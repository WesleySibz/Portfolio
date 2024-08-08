

const Links = () => {

    const items =["HomePage","Projects","About","Contact"];

  return (
    <div className="links">
        {items.map(item=>(
            <a href={`#${item}`} key={item}>{item}</a>
        ))}
    </div>
  )
}

export default Links
