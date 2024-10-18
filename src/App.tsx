import Header from '@/layouts/TheHeader';
import Footer from '@/layouts/TheFooter';
import Container from '@/components/Container';

function App() {
 return (
  <>
   <div className="relative min-h-dvh grid grid-cols-[minmax(300px,_1fr)] grid-rows-[auto_1fr_auto] overflow-hidden">
    <Header />
    <main>
     <section className="">
      <Container>
       <div className="">test</div>
      </Container>
     </section>
    </main>
    <Footer />
   </div>
  </>
 );
}

export default App;
