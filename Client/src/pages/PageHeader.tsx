import React from 'react'
interface Props {
    title : string
    subTitle? : string
}

const PageHeader = ({subTitle,title}:Props) => {

  return (
    <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
    </div>
  ) 
}

export default PageHeader