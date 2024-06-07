import { FriendlyText, Form, FormGroup, TitleForm, Label, Input, TextArea, Img, Img2, Img3,  Button, GroupButtom, Main, Englob, Icons, Link } from "../Styles/Contato"
import logo from '../../img/logo.jpg.png'
import atendente from '../../img/atendente.png'

const Contato = () => {
  return (
    <>
      <FriendlyText>
        Olá! Ficamos felizes em receber a sua mensagem. <br/> Preencha o formulário abaixo e entraremos em contato em breve.
      </FriendlyText>
    <Main>
      <Form>
        <FormGroup>
          <TitleForm> <Img src={logo}/> Entre em contato conosco</TitleForm>
          <Label>Nome:</Label>
          <Input type="text" id="name" placeholder="Digite seu nome" required/>
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" id="email" placeholder="Digite seu e-mail" required/>
        </FormGroup>
        <FormGroup>
          <Label>Mensagem:</Label>
          <TextArea id="message" placeholder="Digite sua mensagem" required></TextArea>
        </FormGroup>
        <GroupButtom>
          <Button type="submit">ENVIAR</Button>
        </GroupButtom>
      </Form>
      <Englob>
          <Img2 src={atendente}/>
        <Icons>
          <Link href="https://www.instagram.com/ab.lins__/" target="blank"><Img3 src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-logo"/></Link>
          <Link href="https://www.google.com" target="blank"><Img3 src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/></Link>
          <Link href="https://wa.me/5582987194208" target="blank"><Img3 src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp-logo"/></Link>
          <Link href="https://github.com/Scurra55HS" target="blank"><Img3 src="https://img.icons8.com/fluency/48/github.png" alt="github-logo"/></Link>
        </Icons>
      </Englob>
    </Main>
    </>
  );
};

export default Contato;