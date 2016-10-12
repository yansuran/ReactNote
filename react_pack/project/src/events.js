    /**
     * @ nicky yan
     * @ react simple demos
     */
    var React = require('react');
    var ReactDOM = require('react-dom');

    /**
     *  @ a simple example1
     */
    var Hello = React.createClass({
        handlerClick:function(event){

            event.target.style.color = '#ff8888' ;
            event.target.style.fontSize = '30px' ;
        },
        render: function() {

            var styleObj ={
                color: 'green' ,
                fontWeight: 'bold' ,
                marginTop: '100px'
            };
            var titlePage = document.getElementsByTagName('title')[0].innerHTML ;

            return(
                <div>
                    <h1>{titlePage}</h1>
                    <div className='box' style={{color:'red'}}  style={styleObj}  onClick={this.handlerClick} >
                        Hello {this.props.name}
                    </div>
                </div>
            )
        }
    });

    ReactDOM.render(
        <Hello name="World" />,
        document.getElementById('example_1')
    );


    /**
     *  @ a simple example2 ,  props vs state(多变)
     */
    var Mount = React.createClass({
        getInitialState:function(){
            console.log('getInitialState init');
            return{
               opacity: 1.0 ,
               fontSize: '40px'
            }
        },
        render:function(){ // style={this.state}
            console.log('render ing');
            return (
               <h2 style={{opacity:this.state.opacity , fontSize:this.state.fontSize}}> Hello {this.props.name}</h2>
            )
        },
        componentWillMount:function(){
            console.log('componentWillMount will');
        },
        componentDidMount:function(){
            console.log('componentDidMount did');
            //var _self = this ;
            window.setTimeout(function(){
                this.setState({
                    opacity: .5 ,
                    fontSize: '60px' ,
                    color: 'pink'
                })
            }.bind(this), 4000);
        }
    });
    ReactDOM.render(
        <Mount name='mount'/> ,
        document.getElementById('example_2')
    );


    /**
     *  @ a simple example3
     */
     var TestClickComponent = React.createClass({
        
        handleClick:function(event){

            var tipE = this.refs.tip; //取到span
            console.log(tipE);
            
            if(tipE.style.display === 'none')
           	   tipE.style.display = 'inline' ;
            else
           	   tipE.style.display = 'none' ;

            event.stopPropagation();
            event.preventDefault();
           //alert('1')
        },
     	render: function() { //通过给元素设置ref属性来找到该元素
     		return (
     			<div>
                   <button onClick={this.handleClick} >显示｜隐藏</button><span ref='tip'>测试文本内容</span>
     			</div>
     		);
     	}
     
     });

     var TestInputComponent = React.createClass({
         getInitialState: function() {
            return {
                inputContent: ''
            };
         },
         changeHandler: function(event){

            this.setState({
                inputContent:event.target.value
            });


            event.stopPropagation();
            event.preventDefault();



         },

         render: function() {
            return (
                <div>
                   <input type='text' onChange={this.changeHandler} /><span>{this.state.inputContent}</span>
                </div>
            );
         }
    
    });
    
     ReactDOM.render(
        <div>
            <TestClickComponent/> 
            <br/><br/>
            <TestInputComponent/>
        </div>,
        document.getElementById('container')
     );