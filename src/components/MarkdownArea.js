import React from 'react';
import marked from 'marked';

class MarkdownArea extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            content: 
            `
Heading
=======
Sub-heading
-----------
            
### Another deeper heading
            
Paragraphs are separated
 by a blank line.
    
Leave 2 spaces at the end of a line to do a  
line break
    
Text attributes *italic*, **bold**, 
monospace, ~~strikethrough~~ .
    
Shopping list:
* apples
* oranges
* pears
    
Numbered list:
1. 
apples
2. oranges
3. pears
    
The rain---not the reign---in
Spain.
    
*[Jarno Härkönen](https://github.com/jarnowatts)* 
            `
        };
        this.handleChange = this.handleChange.bind(this);
        this.rawMarkup = this.rawMarkup.bind(this);
       
    }
    rawMarkup() {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,

        })
    
        var rawMarkup = marked(this.state.content, {sanitize: true})
        
        return {
            __html: rawMarkup
        }
    }
    handleChange(event) {
        this.setState({content: event.target.value});
    }
    
    render() {
        return (
            <form>
                <label>
                <textarea id="markdown" defaultValue={this.state.content} onChange={this.handleChange}/>
                <div id="markdown" dangerouslySetInnerHTML={this.rawMarkup()}></div>
                </label>
            </form>
        );
    }
};
export default MarkdownArea;
