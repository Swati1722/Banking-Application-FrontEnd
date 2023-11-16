import React from 'react'


// import Table from './Table/Table'
import '../../Style.css'

const PageSize = ({ pageSize,setPageSize, setNumberOfPages,totalNumberOfRecords}) => {

  return (
   <>
     <div style ={{"margin-top": "2rem"}}>
        <div className=" s-blur1" style={{ background: "#ABF1FF94" }}></div>
            <select className="form-select" aria-label="Default select example"  onChange={
                    (e) => {
                        setPageSize(e.target.value)
                        setNumberOfPages(Math.ceil(totalNumberOfRecords/ e.target.value))
                    }
            }>
                <option selected >Page Size</option>
                <option value="2" selected={2==pageSize}>2</option>
                <option value="5" selected={3==pageSize}>5</option>
                <option value="10" selected={4==pageSize}>10</option>
            </select>
        <div className=" s-blur2" style={{ background: "#ABF1FF94" }}></div>
     </div>
        
    
    
   </>
  )
}

export default PageSize
