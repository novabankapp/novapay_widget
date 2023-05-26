import { h } from "preact"
import "./generateTRNFeedback.css"
import { useEffect } from "preact/hooks";
import { useNavigation } from "../layouts/Router";
export const GenerateTRNFeedback = () => {
    const {setRoute} = useNavigation()
    useEffect(
        () => {
          let timer1 = setTimeout(() => setRoute("/"), 2 * 1000);
    
          return () => {
            clearTimeout(timer1);
          };
        },
      
        []
      );
    
    return (
        <div className="bg-black text-white font-bold">Feedback</div>
    )
}