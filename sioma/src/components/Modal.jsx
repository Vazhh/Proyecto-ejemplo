export default function Modal({setModal, item}) {
  return (
    <div className="bg-slate-500 w-screen h-screen absolute inset-0 flex justify-center items-center bg-opacity-60 z-10">
        <div className="border-2 border-solid h-[400px] w-[300px] flex flex-col justify-center items-center rounded-md bg-orange-400">
            <h1 className="hover:cursor-pointer hover:scale-110 text-xl font-semibold self-end mr-6" onClick={()=> setModal(false)}>X</h1>
            <img className="w-52 hover:cursor-pointer hover:scale-110" src={item.imageUrl} alt="" />
            <h1 className="text-3xl font-semibold">{item.name}</h1>
            <h2>TYPE: {item.type}</h2>
            <div className="border-2 w-[90%] p-2 rounded-md">
                <h2>Description</h2>
                <p>{item.description}</p>
            </div>
        </div>
      
    </div>
  )
}
