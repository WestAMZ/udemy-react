
const getMessage = ()=>{
    return {
        message: 'This is a Message',
        title : 'Hello World'
    };
}

export const FirstApp = () => {
  return (
    <>
        <div>FirstApp</div>
        <code>{JSON.stringify(getMessage())}</code>
    </>
    
  )
}
