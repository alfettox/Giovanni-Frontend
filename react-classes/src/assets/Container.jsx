import React from 'react'


export default class Container extends React.Component {
    render() {
        const green="green"
        return (
        <div>
            <h1>Title</h1>
            <h2>This is the subtitle</h2>
            <main>
                <ul>
                    <li>This is point 1</li>
                    <li>This is point 2</li>
                    <li>This is point 3</li>
                    <li>This is point 4</li>
                    <li>This is point 5</li>
                    <li>This is point 6</li>
                    <p>{this.props.type}</p>
                    {this.props.id!=1?"same":<h1>different</h1>}
                    </ul>

            </main>
        </div>
        )
    }
}