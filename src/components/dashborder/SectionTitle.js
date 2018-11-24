import React, { Component } from 'react'

class SectionTitleComponet extends Component {
    constructor(props) {
        super(props)
        this.state={
            subtitle:this.props.subtitle,
            title:this.props.title,
            isWhite:this.props.white
        }

    }
     
    render() {
        console.log('iswhite-----',this.state.isWhite,this.state.title)
        // let { subtitle, title } = this.props;
        return (
            <div className="section-title">
                <span className={'subtitle ' +(this.state.isWhite ? 'whiteFont' : '')} >{this.state.subtitle}</span>
                <h2 className={'title '+ (this.state.isWhite ? 'whiteFont' : '')} >{this.state.title}</h2>
            </div>
        )
    }
}
export default SectionTitleComponet;