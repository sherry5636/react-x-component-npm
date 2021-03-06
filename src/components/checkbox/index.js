import React, { Component } from 'react';
// import './index.scss';
import PropTypes from 'prop-types';
import XIcon from '../icon';

class XCheckbox extends Component {

    static propTypes = {
        selectedValueList: PropTypes.array,
        checkboxList:PropTypes.array
    };
    
    constructor(props){
        super(props)
        this.state={
            selectedValueList:props.selectedValueList||[],
            selectedList:[],
            checkboxList:props.checkboxList
        }
    }

    componentDidMount(){
        let arr= [];
        this.state.checkboxList.map(item=>{
            this.state.selectedValueList.map(item_=>{
                if(item.value==item_){
                    item.selected=true;
                    arr.push(item);
                }
            })
        })
        this.setState({
            selectedList:arr
        })
        
    }

    render(){
        return (
            <div className="x-checkbox">
                {
                    this.state.checkboxList.map((item,index)=>{
                        return (
                            <div key={item.label+index} className={`x-checkbox-li ${item.selected?'active-checkbox':null} ${item.disable==true?'checkbox-disable':null}`} onClick={()=>{

                                if(item.disable){
                                    return
                                }
                                
                                let arr = JSON.parse(JSON.stringify(this.state.selectedList))
                                let selected = false;
                                let selected_index;
                                arr.length&&arr.map((item_,index)=>{
                                    if(item_.value==item.value&&item_.label==item.label){
                                        selected = true;
                                        selected_index = index
                                    }
                                })

                                // let arr = JSON.parse(JSON.stringify(this.state.selectedList))
                                if(selected){
                                    item.selected = false;
                                    arr.splice(selected_index,1)
                                    this.setState({
                                        selectedList:arr
                                    })
                                }else{
                                    item.selected = true;
                                    arr.push(item);
                                    this.setState({
                                        selectedList: arr
                                    })
                                }
                               
                                this.props.onChange(arr)
                            }}>
                            {
                                item.selected==true?
                                <XIcon type='checkbox-selected'></XIcon> : <XIcon type='checkbox'></XIcon>
                            }
                            {item.label}
                            
                            </div>    
                        )
                    })
                }
            </div>
        )
    }
}

export default XCheckbox;