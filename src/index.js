import React from 'react';
import reactDom from 'react-dom';
// let n=0;
// function numberFormat(n){
//     return n.toString().padStart(4,'0');
// }
// const elements=[
//     'liste 1',
//     'liste 2',
//     'liste 3'
// ]
// const lis=elements.map((item,k)=><li key={k}>{item}</li>)
// function render(){
//     const title=<> <h1>bonjours les gens <span>{n%2 ? numberFormat(n):null}</span></h1> 
    
//     <ul>
//         {lis}
//     </ul>
// </>
// reactDom.render(title,document.querySelector('#root'))
// }
// render()
// window.setInterval(() => {
//     n++;
//     render()
    
// }, 1000);


////Les composants 


function WelcomeFunc({name,children}){
   
    return <> <h1> Hello {name} </h1>
    <p>{children}</p>
    </>
}
function Home(){
    return <div>
    <Welcome name='gims'/>
    <Welcome name='dadju'/>
    <Clok/>
    <Incrementation start={10} step={10}/>
    <Incrementation start={10}/>
    </div>
}
class Incrementation extends React.Component{
    constructor(props){
        super(props);
        this.state={n:props.start};
        this.timer=null;
    }
    componentDidMount(){
        window.setInterval(this.increment.bind(this),1000)
    }
    componentWillUnmount(){
        window.clearInterval(this.timer)
    }
    render(){
       
        return <>
                <p>Valeurs est : {this.state.n}</p>
              
        </>
    }
    increment(){
        this.setState(function(state,props){
            return {n:this.state.n +props.step}
        })
    }
}
Incrementation.defaultProps={
    start:0,
    step:1
    }

class Clok extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()}
        this.timer=null;
    }
    componentDidMount(){
        this.timer=window.setInterval(this.tick.bind(this),1000)
    }
    tick(){
        this.setState({date:new Date()})
    }
    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    render(){
        return  <div> il est {this.state.date.toLocaleDateString()}{' '}{this.state.date.toLocaleTimeString()}
        </div>
    }
}
class Welcome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <> <h1> Hello {this.props.name} </h1>
    <p>{this.props.children}</p>
    </>
    }
} 


reactDom.render(<Home/>,document.querySelector('#root'))
