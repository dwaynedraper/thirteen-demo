import Footer from "@/components/composite/Footer";
import NavBar from "@/components/composite/NavBar";
// TODO: Footer links should be converted back to props.links once everything is working

export default function Layout(props) {
  return (
    // <div className='min-vh-100 d-flex flex-column justify-content-between bg-brand-rev text-brand'>
    <div className='min-h-screen flex flex-col justify-between'>
      <NavBar />
      <main>{props.children}</main>
      <Footer links={props.links} />
    </div>
  );
}
