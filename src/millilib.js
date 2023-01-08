import Helmet from 'react-helmet';
export function MilligramHeaders(){
  return <Helmet>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />

  <meta charSet="utf-8" />
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
}


export function UseMilligram({children})

{
  console.log({children})
  if (children!==undefined){
    return <><MilligramHeaders/>
    {children}
    </>
  }

  return <MilligramHeaders/>        
}
