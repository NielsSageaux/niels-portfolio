// Import your SVG logos here
import ReactIcon from '../assets/icons/React-icon.svg';
import AngularIcon from '../assets/icons/Angular-icon.svg';
import JavaScriptIcon from '../assets/icons/Javascript-icon.svg';
import TypeScriptIcon from '../assets/icons/Typescript-icon.svg';
import CSSIcon from '../assets/icons/Css-icon.svg';
import ViteIcon from '../assets/icons/Vite-icon.svg';
import PythonIcon from '../assets/icons/Python-icon.svg';
import ElectronIcon from '../assets/icons/Electron-icon.svg';
import HTMLIcon from '../assets/icons/Html-icon.svg';
import CSharpIcon from '../assets/icons/Csharp-icon.svg';
import CPlusPlusIcon from '../assets/icons/Cplusplus-icon.svg';
import ParquetIcon from '../assets/icons/Parquet-icon.svg';
import CIcon from '../assets/icons/C-icon.svg';
import OCamlIcon from '../assets/icons/Ocaml-icon.svg';
import SQLIcon from '../assets/icons/Sql-icon.svg';
import OpenCVIcon from '../assets/icons/Opencv-icon.svg';
import UnityIcon from '../assets/icons/Unity-icon.svg';

export const BRANDS = {
  React: { 
    color: '#61DAFB', 
    short: 'R', 
    text: '#000',
    logo: ReactIcon 
  },
  JavaScript: { 
    color: '#f0db4f', 
    short: 'JS', 
    text: '#323330',
    logo: JavaScriptIcon 
  },
  TypeScript: { 
    color: '#007acc', 
    short: 'TS', 
    text: '#fff',
    logo: TypeScriptIcon
  },
  CSS: { 
    color: '#264de4', 
    short: 'C', 
    text: '#fff',
    logo: CSSIcon
  },
  Vite: { 
    color: '#BD34FF', 
    short: 'V', 
    text: '#fff',
    logo: ViteIcon
  },
  Angular: { 
    color: '#dd1b16', 
    short: 'A', 
    text: '#fff',
    logo: AngularIcon 
  },
  Python: { 
    color: '#4B8BBE', 
    short: 'P', 
    text: '#fff',
    logo: PythonIcon 
  },
  Electron: { 
    color: '#2B2E3A', 
    short: 'E', 
    text: '#fff',
    logo: ElectronIcon 
  },
  HTML: { 
    color: '#e34c26', 
    short: 'H', 
    text: '#fff',
    logo: HTMLIcon 
  },
  'C#': { 
    color: '#68207A', 
    short: 'C#', 
    text: '#fff',
    logo: CSharpIcon 
  },
  'C++': { 
    color: '#00599C', 
    short: 'C++', 
    text: '#fff',
    logo: CPlusPlusIcon 
  },
  Parquet: { 
    color: '#55ACEE', 
    short: 'P', 
    text: '#fff',
    logo: ParquetIcon 
  },
  C: { 
    color: '#03589C', 
    short: 'C', 
    text: '#fff',
    logo: CIcon 
  },
  OCaml: { 
    color: '#F29100', 
    short: 'O', 
    text: '#fff',
    logo: OCamlIcon 
  },
  SQL: { 
    color: '#00BCF2', 
    short: 'S', 
    text: '#fff',
    logo: SQLIcon 
  },
  OpenCV: { 
    color: '#01FF01', 
    short: 'O', 
    text: '#000',
    logo: OpenCVIcon 
  },
  Unity: { 
    color: '#000000', 
    short: 'U', 
    text: '#fff',
    logo: UnityIcon 
  }
};

export const getLogoSrc = (techName) => {
  const brand = BRANDS[techName];
  return brand?.logo || null;
};

export const getBrandInfo = (techName) => {
  return BRANDS[techName] || { 
    color: '#CBD5E1', 
    short: techName?.[0]?.toUpperCase() || '?', 
    text: '#333',
    logo: null 
  };
};
