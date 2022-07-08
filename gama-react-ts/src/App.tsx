import React from 'react';

//importantando componentes
// import FunctionComponents from './components/FunctionComponents';
// import ClassComponents from './components/ClassComponents';
// import PartOne from './components/Hooks';
import Router from './routes/routes';
// import ButtonProps from './components/Props/Component';



// /////// importa do React dependências
// ////// Todas as importações de componentes ou até mesmo arquivos devem ser feita neste trecho


// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// const App: React.FC = () => {
// //   //// O React.FC functional component e a tipagem do TS
//   return (
//    <div>
//       <h1>Listando os nossos primeiros componentes!</h1>
//       <FunctionComponents />
//       <ClassComponents />
//       <PartOne />

//       <ButtonProps name="Botão 1" />
//       <ButtonProps name="Botão 2" />
//       {/* invocando os componentes */}
// {/* //       <Hello /> importando adicionando ao código os componentes
// {/* //    </div>
// //   );
// // } */}
const App: React.FC = () => {
  return <Router />;
} 



//     </div>
//   );
// }
// //       <button
//         onClick={Hello} > Clique aqui</button>
//       </div>
//   );
 
// }

  // exportando o nosso componente]
   export default App;

