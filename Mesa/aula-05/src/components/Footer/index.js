import './style.css';

function Footer({empresa}) {
  return (
    <>
      {empresa.name} - {empresa.cnpj}
    </>
  );
}

export default Footer;