
import React, { Component, Fragment} from 'react'
import dolphin from '../../assets/images/team/team-dolphin.png'
import fe_logo from '../../assets/images/team/front-end-logo.png'
import web_design_logo from '../../assets/images/team/web-design.png'
import infra_logo from '../../assets/images/team/infra.png'
import game_design_logo from '../../assets/images/team/game-design.png'
import game_dev_logo from '../../assets/images/team/game-dev.png'
import styled from 'styled-components'

const Button = styled.div`
    color : ${props => props.color};
    cursor : pointer;
    font-size : 12px;
    border : 2px solid ${props => props.color};
    padding : 10px;
    text-align : center;
    margin : 20px 0 0 0;
    font-family : "Itim-Regular";
    border-radius : 9px;
    margin : 20px 0;
    width : ${props => props.width};
    :hover {
        color : black;
        background-color : ${props => props.color};
        transition : .4s ease;
        box-shadow :  0px 0px 10px 1px ${props => props.shadow};
    }
`
const Container = styled.div`
    background-color :  #023058;  
    height : 100vh;
    color : white;
    font-family : "Rye-Regular";
`
const SubjectItemContainer = styled.div`
    display : flex;
    width : 100%;
    align-items : flex-end;
`
const SubjectItem = styled.div`
    margin : 10px 10px;
    display : flex;
    flex-direction : column;
    justify-items : center;
    :hover div{
        color : black;
        background-color : ${props => props.color};
        transition : .4s ease;
        box-shadow :  0px 0px 10px 1px ${props => props.shadow};
    }
`
const SubjectLogo = styled.div`
    background-image : url(${props => props.src});
    background-repeat : no-repeat;
    background-size : cover; 
    background-position : center;
    width : 91px;
    height : 91px;
    margin : 0 auto;
    border-radius : 50%;
    cursor : pointer;
`
const OtherSubject = styled.h4`
    font-size: 32px;
    font-family : "Itim-Regular";
`
const Header = styled.h1`
    font-size : 120px;
    color : white;
` 
const SubHeader = styled.h2`
    font-size : 72px;
    color : white;
`
const Wrapper = styled.div`
    max-width : 90vw;
    margin : 0 auto;
    display : flex;
`
const Content = styled.div`
    font-size : 20px;
    font-family : "Itim-Regular";
`
const Column = styled.div`
    display : flex;
    flex-direction : column;
    width : 50%;
`

function Subject(props){
    return (
        <SubjectItem color={props.color} shadow={props.shadow}>
            <SubjectLogo  src={props.src} shadow={props.shadow}></SubjectLogo>
            <Button  color={props.color} shadow={props.shadow}> {props.name} </Button>
        </SubjectItem>
    )
}
function TotalSubject(){
    return (
        <SubjectItemContainer>
            <Subject src={fe_logo}  name="Front-End" color="#B9E6E9" shadow="#31CBED" />
            <Subject src={web_design_logo}  name="Web Design" color="#E8BEC6" shadow="#DB6CBE" />
            <Subject src={infra_logo} name="Infrastructure" color="#A8E9A1" shadow="#93EB98" />
            <Subject src={game_design_logo}  name="Game Design" color="#FFED8C" shadow="#FFEE7C" />
            <Subject src={game_dev_logo}  name="Game Development" color="#FFAC3A" shadow="#FFA700" />
        </SubjectItemContainer>
    )
}
export default class Team extends Component {
        state = {
            subject_header : "Front-End",
            subject_description : "ในสาขานี้จะพาไปเปิดโลกของการเป็นนักพัฒนาเว็บไซต์ ซึ่งจะได้เรียนรู้ตั้งเเต่ HTML & CSS, Javascript เเละการใช้ git จนถึงการเขียน React ซึ่งเป็นสิ่งที่มีความต้องการสูง ในสายงาน IT ในปัจจุบัน"
        }


    handleEvent = ()=> {}

    render() {
        return (
            <Fragment>
                <Container>
                    <Wrapper>
                    <Column>
                        <Header>Teams</Header>
                        <section className="subject-zone">
                            <SubHeader>{this.state.subject_header}</SubHeader>
                            <Content>{this.state.subject_description}</Content>
                            <Button color="#B9E6E9" shadow="#31CBED" width="100px">Register</Button>
                        </section>
                        <section className="other-subject-zone">
                            <OtherSubject>สาขาอื่นๆ</OtherSubject>
                            <TotalSubject />
                        </section>
                    </Column> 
                    <Column>
                        <img src={dolphin} style={{width:"100%",marginTop:"50px"}} alt="Dolphin"/>
                    </Column>
                    </Wrapper>
                </Container>
            </Fragment>
        )
    }
}
