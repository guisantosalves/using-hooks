#useState - mais simples, usado para mudar o estado de um componente

#useEffect - muito usado para requisições, onde ele tem 2 parâmetros sendo esses dois parâmetros 
uma função de callback com o que vai acontecer e outro passando em [] o componente que quando atualizar o estado
vai disparar o valor do callback do primeiro parâmetro

const [number, setNumber] = useState(1);

useEffect(()=>{
    setFatorial(calcFatorial(number))
  }, [number])  


#useRef - ele conta no objeto que é criado (count) a quantidade de vezes que houve a renderização do componente,
gerealmente se usa o useRef com o useEffect para que só conte a quantidade de vezes que determinado estado for mudado com o useState

const [value1, setValue1] = useState("");
const count = useRef(0);

  useEffect(()=>{
    count.current = count.current + 1
  }, [value1])

#useMemo - nada mais é que um valor em cache, onde ele faz uma determinada operação sem comprometer todo os estados das outras variáveis.
ele irá guardar o valor de retorno de uma função a partir dos valores de entrada (Parâmetros). Ou seja, se uma função de soma recebe os parâmetros 2 e 3 e retorna 5, 
esses valores serão armazenados e, 
quando essa função for chamada com os mesmos parâmetros, ela não precisará refazer o cálculo para obter o valor de retorno, já que este estará armazenado.

function sum(num1, num2){
    var n1 = parseInt(num1)
    var n2 = parseInt(num2)
    const future = Date.now() + 2000;
    while(Date.now() < future){} //espera 2s
    return n1 + n2
}

const result = useMemo(() => sum(n1, n2), [n1, n2])


#useCallback - The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function


#useReducer - 
The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
The useReducer Hook returns the current state and a dispatch method.
https://www.w3schools.com/react/react_usereducer.asp

#useContext -
State should be held by the highest parent component in the stack that requires access to the state.
To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling"
*React Context is a way to manage state globally.*

