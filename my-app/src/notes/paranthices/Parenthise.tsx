export const Parenthise=()=>{
  let hello="i m a vairiable"
  let test=()=>{
      return <h3>testing normal function in {}</h3>
  }
  let Test=()=>{
      return <h3>testing TSX function HEAR U HAVE FIRST LATTER CAPS</h3>
  }
      return <div>
          <center>
              <h1>im topic of parenthises in tsx</h1>
          </center>
          <h2>hello</h2>
          <h2>it displays the value of variable---{hello}</h2>
          <br />
          {test()}
  
          <Test></Test>
  
          {<h1>multiple</h1>}
          </div>
  }