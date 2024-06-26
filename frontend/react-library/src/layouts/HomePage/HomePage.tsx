import {Carousel} from "./components/Carousel";
import {ExploreTopBooks} from "./components/ExploreTopBooks";
import {Heros} from "./components/Hero";
import {LibraryServices} from "./components/LibraryServices";

export const  HomePage=()=> {
   return (
      <>
         <ExploreTopBooks />
         <Carousel />
         <Heros />
         <LibraryServices />
      </>
   );
}
