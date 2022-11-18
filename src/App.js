import logo from './logo.svg';
import './App.css';
import { CardDemo} from './Components/CardDemo';
// import { SideBar } from './Components/SideBar';
// import {ConfigurationData} from './Components/ConfigurationData';
// import {ConfigurationDataam} from './Components/ConfigurationDataam'
// import { DocumentTable} from './Components/DocumentTable';
// import { DataTable } from 'primereact/datatable';
// import { MenubarDemo } from './Components/MenubarDemo';
// import { ProductService } from './Components/ProductService';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
// import Image from './Image/Logo.png';

function App() {
  return (
   <div className="App"> 
           <CardDemo/>
           {/* <MenubarDemo/> */}
           {/* <SideBar/> */}

           {/* <ConfigurationData/> */}
           {/* <ConfigurationDataam/> */}
           {/* <DocumentTable/> */}
           {/* <ProductService/> */}
           {/* <DataTable/> */}
           {/* <Image/> */}
   </div>
  );
}
export default App;