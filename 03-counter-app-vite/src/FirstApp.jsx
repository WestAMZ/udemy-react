
const getMessage = ()=>{
    return {
        message: 'This is a Message',
        title : 'Hello World'
    };
}

export const FirstApp = () => {
  return (
    <>
        <h1>FirstApp</h1>
        {/* <code>{JSON.stringify(getMessage())}</code> */}
        <p>Soy un subtitulo</p>
    </>
    
  )
}
