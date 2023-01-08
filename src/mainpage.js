import { NavBar } from "./navbar";
import { SideNav } from "./sidenav";
import {CardScroller} from "./cardscroller";
import { SplitLogin } from "./splitlogin";
export function MainPage() {
    return (
        <>
        <SideNav/>
        <NavBar/>
        <section>
        <CardScroller/>
        </section>
        <div className="main">
        </div>
        </>
    );
}