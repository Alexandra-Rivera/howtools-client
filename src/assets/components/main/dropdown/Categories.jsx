// import CategoriesList from "./CategoriesList";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai';

const categoriesList = [
  "Seguridad",
  "Bases de datos", 
  "Programacion orientada a objetos",
  "Arquitectura de computadoras",
  "Reparacion de computadoras",
  "Robotica",
  "Ofimatica",
  "Desarrollo movil",
  "Desarrollo web"
]

function Categories() {
    const [IsOpen, setIsOpen] = useState(false);

    return(
        <>
            
<button onClick={() => setIsOpen((prev) => !prev)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 gap-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover  

{/* <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg> */}

{
  !IsOpen ? (
    <AiOutlineCaretDown className="h-8" />
  ) : (
    <AiOutlineCaretUp className="h-8" />
  )
}
</button>

  {/* { IsOpen && (
    <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
        {categoriesList.map((category) => {
          <li key={category}>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{category}</a>
          </li>
        })}
        </ul>
      </div>
  )} */}

  {
    IsOpen && (
      <div className="bg-blue-400 absolute">
        {categoriesList.map((item) => {
          <div key={item}>
            <h3>{item}</h3>
          </div>
        })}
      </div>
    )
  }
        </>
    )
}

export default Categories;