import Button from "./Button";

const App = () =>  {
    return  <div>
    <h1>Myfirst website</h1>
     <p> Which website do you want to open </p>
    <Button name="google" link="https://google.com"/>
    <Button name="Facebook" link="https://facebook.com"/>
    <Button name="Github" link="https://github.com"/>
    <Button name="Youtube" link="https://youtube.com"/>
    </div>
}

export default App;