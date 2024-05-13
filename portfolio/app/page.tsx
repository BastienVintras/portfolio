import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Spacing } from "./_components/spacing";
import { Status } from "./_components/status";

export default function Home() {
  return (
    <main >
<Header/>

<Spacing size="md"/>

<Hero/>

<Spacing size="lg"/>


<Status/>
    </main>
  );
}
