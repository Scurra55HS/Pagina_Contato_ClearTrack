import styled from 'styled-components';

export const FriendlyText = styled.p`
  color: #0A8282;
  font-size: 16px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 700px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
    margin-top: 30px;
    max-width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 90px auto;
  padding: 20px;
  background-color: #fdf3f3;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin: 50px auto;
    padding: 15px;
    max-width: 90%;
  }
`;

export const FormGroup = styled.div`
`;

export const GroupButtom = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Main = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Englob = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icons = styled.div`
`;

export const Img = styled.img`
  width: 30px;

  @media (max-width: 768px) {
    width: 25px;
  }
`;

export const Img2 = styled.img`
  display: flex;
  width: 400px;
  height: 400px;
  margin-top: 70px;
  margin-right: 250px;
  margin-left: 10px;
  padding: 60px 0px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin: 20px auto;
    padding: 20px 0;
  }
`;

export const Img3 = styled.img`
  margin-left: 50px;
  width: 45px;

  @media (max-width: 768px) {
    margin-left: 20px;
    width: 35px;
  }
`;

export const TitleForm = styled.h1`
  margin-bottom: 50px;
  text-align: center;
  color: #01223E;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    font-size: 1.5rem;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color: #01223E;

  @media (max-width: 768px) {
    margin-bottom: 6px;
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: #0D63AC;
  color: aliceblue;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid var(--medium-blue);
  border-radius: 20px;
  border-top-left-radius: 0px;
  transition: border-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 12px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid var(--medium-blue);
  border-radius: 20px;
  border-top-left-radius: 0px;
  transition: border-color 0.3s ease;
  resize: vertical;
  background-color: #0D63AC;
  color: aliceblue;

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 12px;
  }
`;

export const Button = styled.button`
  background-color: #003C70;
  color: #ffffff;
  border-radius: 20px;
  width: 110px;
  padding: 10px;
  font-weight: bolder;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90px;
    padding: 8px;
  }
`;

export const Link = styled.a`
`;
