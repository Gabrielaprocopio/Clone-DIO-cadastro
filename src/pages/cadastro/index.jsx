import React from "react";
import './styles.js'
import { Header } from "../../components/Header";
import { Column, Container, Title, SubTitle, Text, Wrapper, TextContainer, TextConta } from "./styles.js";
import { Criar } from "../../components/buttons/index.jsx";
import { Input } from "../../components/input";




const Cadastro = () => {
    return(<>
        <Header />
        <Container>
        <TextContainer>
        A plataforma para você aprender com experts, 
        <br/>
        dominar as principais tecnologias e entrar
        <br />
         mais rápido nas 
         <br/>
         empresas mais
         <br />
          desejadas.  
        </TextContainer>
        <Column>
        <Wrapper>
        <Title> Comece agora grátis </Title>
        <SubTitle> Crie sua conta e make the change. </SubTitle>
        <form>
        <Input placeholder="Nome completo" />
        <Input placeholder="E-mail" type="password"  />
        <Input placeholder="Password" type="password"/>
        </form>
        <Criar name="Criar minha conta" />
        <Text>
        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
        </Text>
        <TextConta>
        Já tenho conta.Fazer login
        </TextConta>
        </Wrapper>
        </Column>
        </Container>

        </>

    )
}

export { Cadastro }