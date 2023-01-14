import Joke from "./Joke.js";

export default function App() {
    return (
        <div>
            <Joke
                setup="setup of joke1"
                punchline="punchline1"
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{author: "", body: "", title: ""}]}
            />
                        <Joke
                setup="setup of joke2"
                punchline="punchline2"
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{author: "", body: "", title: ""}]}
            />
                        <Joke
                setup="setup of joke3"
                punchline="punchline3"
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{author: "", body: "", title: ""}]}
            />
                        <Joke
                setup="setup of joke4"
                punchline="punchline4"
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{author: "", body: "", title: ""}]}
            />
                        <Joke
                setup="setup of joke5"
                punchline="punchline5"
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{author: "", body: "", title: ""}]}
            />



        </div >
    )
    }