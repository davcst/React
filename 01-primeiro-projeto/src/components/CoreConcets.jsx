import CoreConcet from "./CoreConcet";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcets(){
    return (
        <section id="core-concepts"> 
        <h2>Time to get started!</h2>
        <ul>

          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcet key = {conceptItem.title} {...conceptItem}/>
          ))}
        </ul>        
        </section>
    );
}